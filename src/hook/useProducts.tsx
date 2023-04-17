import React, { createContext, useContext, useState } from "react";
import { mock_products } from "../screens/Products/products_list";

interface IProductsContext {
  cart: any[];
  products: any[];
  deleteProductsItem: (id: number) => void;
  deleteCartProduct: (id: number) => void;
  appendCart: (product: any) => void;
}

const ProductsContext = createContext({} as IProductsContext);

interface IProductsProviderProps {
  children: React.ReactNode;
}

const ProductsProvider: React.FC<IProductsProviderProps> = ({ children }) => {
  const [products, setProducts] = useState(mock_products);
  const [cart, setCart] = useState<any[]>([]);

  const deleteProductsItem = (id: number) => {
    setProducts((oldState) => oldState.filter((item) => item.id !== id));
  };

  const deleteCartProduct = (id: number) => {
    setCart((oldState) => oldState.filter((item) => item.id !== id));

    setProducts((oldState) => [
      ...oldState,
      ...mock_products.filter((item) => item.id === id),
    ]);
  };

  const appendCart = (product: any) => {
    setCart((oldState) => [...oldState, product]);
    deleteProductsItem(product.id);
  };

  return (
    <ProductsContext.Provider
      value={{
        appendCart,
        deleteProductsItem,
        deleteCartProduct,
        cart,
        products,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

function useProducts(): IProductsContext {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }

  return context;
}

export { ProductsProvider, useProducts };
