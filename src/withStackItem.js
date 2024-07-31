import React from 'react';
import { StackItem } from "@fluentui/react";

const withStackItem = (WrappedComponent) => {
  return function WithStackItem(props) {
    return (
      <StackItem {...props}>
        <WrappedComponent {...props} />
      </StackItem>
    );
  };
};

export default withStackItem;
