// import "./App.css";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Cart from "./components/Cart";
// import ItemSection from "./components/itemSection";
// import { Stack, StackItem } from "@fluentui/react";
// import products from "./products.json";
// import React from "react";
// import { getProductsData } from "./API";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       products: [],
//       allProducts: []
//     };
//     this.onAddToCart = this.onAddToCart.bind(this);
//     this.onRemoveFromCart = this.onRemoveFromCart.bind(this);
//   }

//   componentDidMount = () => {
//     getProductsData().then((products) => {
//       console.log(products);
//       if (products) {
//         this.setState({
//           allProducts: products
//         })
//       }
//     })
//   }
//   onAddToCart(id, name, desc, price, quantity, color, isOutOfStock) {
//     console.log(isOutOfStock,id);
//     if (!this.state.products?.find((products) => products.id === id)
//       && quantity && color) {
//       const newProduct = {
//         id: id,
//         name: name,
//         desc: desc,
//         price: price,
//         quantity: quantity,
//         color: color,
//         isOutOfStock: isOutOfStock
//       };

//       this.setState(
//         (prevState) => ({
//           products: [...prevState.products, newProduct],
//         }),
//         () => {
//           console.log(this.state.products);
//           console.log('onAddToCart');
//         }
//       );
//     }
//   }

//   onRemoveFromCart(id) {
//     const updatedList = this.state.products.filter(
//       (products) => products.id !== id
//     );
//     this.setState({ products: updatedList });
//   }

//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <Stack horizontal horizontalAlign="space-between">
//           <StackItem
//             grow="4"
//             style={{ padding: "36px 0", backgroundColor: "#c2c2c2" }}
//           >
//             <ItemSection products={this.state.allProducts} onAddToCart={this.onAddToCart} />
//           </StackItem>
//           <StackItem grow="2"
//             style={{ width: "30%" }}
//           >
//             <Cart
//               products={this.state.products}
//               onRemoveFromCart={this.onRemoveFromCart}
//             />
//           </StackItem>
//         </Stack>
//         <Footer />
//       </div>
//     );
//   }
// }

// export default App;
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./components/Cart";
import ItemSection from "./components/itemSection";
import { Stack, StackItem } from "@fluentui/react";
import products from "./products.json";
import React from "react";
import { getProductsData } from "./API";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      allProducts: []
    };
    this.onAddToCart = this.onAddToCart.bind(this);
    this.onRemoveFromCart = this.onRemoveFromCart.bind(this);
  }

  componentDidMount = () => {
    getProductsData().then((products) => {
      console.log("Products fetched:", products);
      if (products) {
        this.setState({
          allProducts: products
        });
      }
    });
  }

  onAddToCart(id, name, desc, price, quantity, color, isOutOfStock) {
    console.log("Attempting to add to cart:", { id, name, desc, price, quantity, color, isOutOfStock });

    if (!isOutOfStock && !this.state.products?.find((product) => product.id === id) && quantity && color) {
      const newProduct = {
        id: id,
        name: name,
        desc: desc,
        price: price,
        quantity: quantity,
        color: color,
        isOutOfStock: isOutOfStock
      };

      this.setState(
        (prevState) => ({
          products: [...prevState.products, newProduct],
        }),
        () => {
          console.log("Product added to cart:", newProduct);
          console.log("Current state of products in cart:", this.state.products);
        }
      );
    } else if (isOutOfStock) {
      console.log("This item is out of stock and cannot be added to the cart.");
    } else {
      console.log("Product already in cart or invalid quantity/color.");
    }
  }

  onRemoveFromCart(id) {
    const updatedList = this.state.products.filter(
      (product) => product.id !== id
    );
    this.setState({ products: updatedList });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Stack horizontal horizontalAlign="space-between">
          <StackItem
            grow="4"
            style={{ padding: "36px 0", backgroundColor: "#c2c2c2" }}
          >
            <ItemSection products={this.state.allProducts} onAddToCart={this.onAddToCart} />
          </StackItem>
          <StackItem grow="2"
            style={{ width: "30%" }}
          >
            <Cart
              products={this.state.products}
              onRemoveFromCart={this.onRemoveFromCart}
            />
          </StackItem>
        </Stack>
        <Footer />
      </div>
    );
  }
}

export default App;
