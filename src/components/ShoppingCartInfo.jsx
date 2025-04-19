
import React from "react";
import ShoppingCartHeader from "./ShoppingCartHeader";
import ShoppingCardFunction from "./ShoppingCardFunction";
import ListProduct from "./ListProduct";

export default function ShoppingCartInfo() {
  return (
    <div className="col-lg-7">
      {/* Phạm của Header */}
      <ShoppingCartHeader />
      <hr />
      {/* Phạm vi của function */}
      <ShoppingCardFunction />

      {/* Phạm vi của List Product */}
      <ListProduct />
    </div>
  );
}
