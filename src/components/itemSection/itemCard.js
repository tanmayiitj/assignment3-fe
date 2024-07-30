import React from "react";
import p1 from "../../images/products/product-1.png";
import { Stack, StackItem } from "@fluentui/react";
import ItemDetails from "./itemDetails";


class ItemCard extends React.Component {
  render() {
    return (
      <Stack
        style={{
          width: "200px",
          backgroundColor: "#fff",
          borderRadius: "10px",
        }}
      >
        <StackItem>
          <img
            style={{ borderRadius: "10px 10px 0 0" }}
            height="150px"
            width="200px"
            src={p1}
            alt="Cart"
          />
        </StackItem>
        <StackItem>
          <ItemDetails onAddToCart={this.props.onAddToCart} productDetails={this.props.productDetails} />
        </StackItem>
      </Stack>
    );
  }
}

export default ItemCard;
