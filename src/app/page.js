import axios from "axios";
import ProductList from "./components/ProductList";

export default async function Home() {
  const products = await fetchProducts();

  return (
    <main>
      <ProductList initialProducts={products} />
    </main>
  );
}

async function fetchProducts() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
} 
