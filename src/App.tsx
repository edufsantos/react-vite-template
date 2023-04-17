import { ProductsProvider } from "./hook/useProducts";
import { Products } from "./screens/Products";

function App() {
  return (
    <ProductsProvider>
      <Products />
    </ProductsProvider>
  );
}

export default App;
