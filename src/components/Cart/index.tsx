import React from "react";
import { Product } from "../Product";
import { useProducts } from "../../hook/useProducts";

export const Cart: React.FC = () => {
  const { cart: products, deleteCartProduct } = useProducts();

  return (
    <div>
      <h4>Cart: {products.length}</h4>
      <ul>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleClick={() => deleteCartProduct(product.id)}
          />
        ))}
      </ul>
    </div>
  );
};
