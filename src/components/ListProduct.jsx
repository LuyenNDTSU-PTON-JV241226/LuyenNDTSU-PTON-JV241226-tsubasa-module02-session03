import React from "react";
import ProductItem from "./ProductItem";

export default function ListProduct() {
  const products = [
    {
      id: 1,
      productName: "Iphone 11",
      price: 1000000000,
    },
    {
      id: 2,
      productName: "Iphone 12",
      price: 1000000000,
    },
    {
      id: 3,
      productName: "Iphone 13",
      price: 1000000000,
    },
    {
      id: 4,
      productName: "Iphone 13",
      price: 1000000000,
    },
  ];
  return (
    <div>
      {/* {products.map((product) => {
        return <ProductItem />;
      })} */}

      {products.map((product) => (
        <ProductItem key={product.id} />
      ))}
    </div>
  );
}