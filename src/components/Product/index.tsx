import React from "react";
import { CardItem } from "../../screens/Products/styles";

interface IProductProps {
  product: any;
  handleClick: () => void;
}

export const Product: React.FC<IProductProps> = ({ product, handleClick }) => {
  return (
    <CardItem onClick={handleClick}>
      <img src={product.image} alt={product.description} />
      <h4>{product.title}</h4>
    </CardItem>
  );
};
