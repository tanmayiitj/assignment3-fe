import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./components/Cart";
import ItemSection from "./components/itemSection";
import { Stack } from "@fluentui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./redux/cartSlice";
import { getProductsData } from "./API";
import withStackItem from "./withStackItem"; // Import the HOC

const StackItemCart = withStackItem(Cart); // Wrap Cart with HOC
const StackItemItemSection = withStackItem(ItemSection); // Wrap ItemSection with HOC

const App = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.products); // Cart items
  const [allProducts, setAllProducts] = React.useState([]); // State for all products

  React.useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProductsData();
      console.log("Products fetched:", products);
      if (products) {
        setAllProducts(products); // Store fetched products in local state
      }
    };
    fetchProducts();
  }, []);

  const onAddToCart = (id, name, desc, price, quantity, color, isOutOfStock) => {
    console.log("Attempting to add to cart:", { id, name, desc, price, quantity, color, isOutOfStock });

    if (!isOutOfStock && quantity > 0 && color) {
      const newProduct = {
        id,
        name,
        desc,
        price,
        quantity,
        color,
        isOutOfStock,
      };
      dispatch(addToCart(newProduct));
      console.log("Product added to cart:", newProduct);
    } else if (isOutOfStock) {
      console.log("This item is out of stock and cannot be added to the cart.");
    } else {
      console.log("Invalid quantity/color.");
    }
  };

  const onRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
    console.log("Product removed from cart:", id);
  };

  return (
    <div className="App">
      <Header />
      <Stack horizontal horizontalAlign="space-between">
        <StackItemItemSection 
          products={allProducts} 
          onAddToCart={onAddToCart} 
          grow="4" 
          style={{ padding: "36px 0", backgroundColor: "#c2c2c2" }} 
        />
        <StackItemCart 
          products={cartProducts} 
          onRemoveFromCart={onRemoveFromCart} 
          grow="2" 
          style={{ width: "30%" }} 
        />
      </Stack>
      <Footer />
    </div>
  );
};

export default App;
