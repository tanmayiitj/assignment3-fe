// // import React from "react";
// // import { Label, Stack, StackItem, Text, mergeStyles } from "@fluentui/react";
// // import cart from "../../images/common/add-to-cart.png";
// // import useProductQuantity from "./useProductQuantity";

// // const priceTextStyles = mergeStyles({
// //   marginTop: "8px",
// //   color: "red",
// //   textAlign: "initial",
// // });

// // const marginTop = mergeStyles({
// //   marginTop: "8px",
// // });

// // const textAlign = mergeStyles({
// //   textAlign: "initial",
// // });

// // const stackStyles = {
// //   root: {
// //     padding: "8px 16px",
// //   },
// // };

// // const ItemDetails = (props) => {
// //   const [quantity, handleChange] = useProductQuantity(0);

// //   const getDetails = () => {
// //     return (
// //       <>
// //         <Label className={textAlign}>{props.productDetails.name}</Label>
// //         <Text className={textAlign}>{props.productDetails.description}</Text>
// //         <Text className={priceTextStyles} variant="xLarge" block>
// //           ${props.productDetails.price * quantity}
// //         </Text>
// //       </>
// //     );
// //   };

// //   const getActions = () => {
// //     return (
// //       <>
// //         <Text block> Qty</Text>
// //         <select
// //           name="quantity"
// //           id="product-quantity"
// //           onChange={handleChange}
// //           value={quantity}
// //         >
// //           <option value="0">0</option>
// //           <option value="1">1</option>
// //           <option value="2">2</option>
// //         </select>
// //         <div className={marginTop}>
// //           <img
// //             onClick={() => {
// //               props.onAddToCart(
// //                 props.productDetails.id,
// //                 props.productDetails.name,
// //                 props.productDetails.description,
// //                 props.productDetails.price,
// //                 quantity
// //               );
// //             }}
// //             height="30px"
// //             src={cart}
// //             alt="Add to Cart"
// //           />
// //         </div>
// //       </>
// //     );
// //   };

// //   return (
// //     <Stack styles={stackStyles} horizontal horizontalAlign="space-between">
// //       <StackItem>{getDetails()}</StackItem>
// //       <StackItem>{getActions()}</StackItem>
// //     </Stack>
// //   );
// // };

// // export default ItemDetails;

// import React from "react";
// import { Label, Stack, StackItem, Text, mergeStyles } from "@fluentui/react";
// import cart from "../../images/common/add-to-cart.png";
// import outOfStock from "../../images/common/outOfStock.png"
// import courier from "../../images/common/courier.png"
// import useProductAttributes from "./useProductAttributes"; // Adjust the import path as needed

// const priceTextStyles = mergeStyles({
//   marginTop: "8px",
//   color: "red",
//   textAlign: "initial",
// });

// const paddingOut = mergeStyles({
//   paddingRight: "6px",
// });

// const marginTop = mergeStyles({
//   marginTop: "8px",
// });

// const textAlign = mergeStyles({
//   textAlign: "initial",
// });

// const stackStyles = {
//   root: {
//     padding: "8px 16px",
//   },
// };

// const ItemDetails = (props) => {
//   const { quantity, color, handleQuantityChange, handleColorChange } = useProductAttributes(0, "");

//   const getDetails = () => {
//     return (
//       <>
//         <Label className={textAlign}>{props.productDetails.name}</Label>
//         <Text className={textAlign}>{props.productDetails.description}</Text>
//         <Text className={priceTextStyles} variant="xLarge" block>
//           ${props.productDetails.price * quantity}
//         </Text>
//         <Text>
//           <img src={outOfStock} className={paddingOut} align="left" height="20px" alt="Out of Stock" title="Out of Stock"/>
//           <img src={courier} align="left" height="18px" alt="Fast Delivery" title="Fast Delivery" />
//         </Text>
//       </>
//     );
//   };

//   const getActions = () => {
//     return (
//       <>
//         <Text block> Qty</Text>
//         <select
//           name="quantity"
//           id="product-quantity"
//           onChange={handleQuantityChange}
//           value={quantity}
//         >
//           <option value="0">0</option>
//           <option value="1">1</option>
//           <option value="2">2</option>
//         </select>
//         <Text block> Color</Text>
//         <select
//           name="color"
//           id="product-color"
//           onChange={handleColorChange}
//           value={color}
//         >
//           <option value="">Clr</option>
//           <option value="Red">Red</option>
//           <option value="Blue">Blue</option>
//           <option value="Green">Green</option>
//         </select>
//         <div className={marginTop}>
//           <img
//             onClick={() => {
//               props.onAddToCart(
//                 props.productDetails.id,
//                 props.productDetails.name,
//                 props.productDetails.description,
//                 props.productDetails.price,
//                 quantity,
//                 color
//               );
//             }}
//             height="30px"
//             src={cart}
//             alt="Add to Cart"
//           />
          
//         </div>
//       </>
//     );
//   };

//   return (
//     <Stack styles={stackStyles} horizontal horizontalAlign="space-between">
//       <StackItem>{getDetails()}</StackItem>
//       <StackItem>{getActions()}</StackItem>
//     </Stack>
//   );
// };

// export default ItemDetails;
import React from "react";
import { Label, Stack, StackItem, Text, mergeStyles } from "@fluentui/react";
import cart from "../../images/common/add-to-cart.png";
import outOfStock from "../../images/common/outOfStock.png"
import courier from "../../images/common/courier.png"
import useProductAttributes from "./useProductAttributes"; // Adjust the import path as needed

const priceTextStyles = mergeStyles({
  marginTop: "8px",
  color: "red",
  textAlign: "initial",
});

const paddingOut = mergeStyles({
  paddingRight: "6px",
});

const marginTop = mergeStyles({
  marginTop: "8px",
});

const textAlign = mergeStyles({
  textAlign: "initial",
});

const stackStyles = {
  root: {
    padding: "8px 16px",
  },
};

const ItemDetails = (props) => {
  const { quantity, color, handleQuantityChange, handleColorChange, isOutOfStock, isFastDelivery } = useProductAttributes(0, "");

  const getDetails = () => {
    return (
      <>
        <Label className={textAlign}>{props.productDetails.name}</Label>
        <Text className={textAlign}>{props.productDetails.description}</Text>
        <Text className={priceTextStyles} variant="xLarge" block>
          ${props.productDetails.price * quantity}
        </Text>
        <Text>
          {isOutOfStock && <img src={outOfStock} className={paddingOut} align="left" height="20px" alt="Out of Stock" title="Out of Stock" />}
          {isFastDelivery && <img src={courier} align="left" height="18px" alt="Fast Delivery" title="Fast Delivery" />}
        </Text>
      </>
    );
  };

  const getActions = () => {
    return (
      <>
        <Text block> Qty</Text>
        <select
          name="quantity"
          id="product-quantity"
          onChange={handleQuantityChange}
          value={quantity}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <Text block> Color</Text>
        <select
          name="color"
          id="product-color"
          onChange={handleColorChange}
          value={color}
        >
          <option value="">Clr</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
        </select>
        <div className={marginTop}>
          <img
            onClick={() => {
              props.onAddToCart(
                props.productDetails.id,
                props.productDetails.name,
                props.productDetails.description,
                props.productDetails.price,
                quantity,
                color,
                isOutOfStock 
              );
            }}
            height="30px"
            src={cart}
            alt="Add to Cart"
          />
        </div>
      </>
    );
  };

  return (
    <Stack styles={stackStyles} horizontal horizontalAlign="space-between">
      <StackItem>{getDetails()}</StackItem>
      <StackItem>{getActions()}</StackItem>
    </Stack>
  );
};

export default ItemDetails;
