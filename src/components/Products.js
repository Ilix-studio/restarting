import React from "react";
const products = [
  { name: "Product1", id: 1 },
  { name: "Product2", id: 2 },
  { name: "Product3", id: 3 },
];

const Products = () => {
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Products;
