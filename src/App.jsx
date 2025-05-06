import Navbar from "./components/navbar";
import ProductDetail from "./pages/ProductDetail";
import { useState } from "react";

function App() {
  const [addProducts, setAddProducts] = useState(0);

  const addNewProduct = () => {
    setAddProducts((addProducts) => addProducts + 1);
  };
  return (
    <h1>
      <Navbar addProducts={addProducts} />
      <ProductDetail addNewProduct={addNewProduct} />
    </h1>
  );
}

export default App;
