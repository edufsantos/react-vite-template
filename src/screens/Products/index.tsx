import React from "react";
import { Cart } from "../../components/Cart";
import { Product } from "../../components/Product";
import { useProducts } from "../../hook/useProducts";
import { Container, ProductsContainer } from "./styles";

export const Products: React.FC = () => {
  const { products, appendCart } = useProducts();

  return (
    <Container>
      <ProductsContainer>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleClick={() => appendCart(product)}
          />
        ))}
      </ProductsContainer>

      <Cart />
    </Container>
  );
};
