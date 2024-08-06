import axios from "axios";
import Image from "next/image";

export default async function Product({ params }) {
  const { id } = params;
  const product = await fetchProduct(id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <main>
      <div className="max-w-[1210px] w-full m-auto flex md:px-8 px-4">
        <div className="max-w-[800px] w-full m-auto mt-[90px] flex items-center justify-center md:flex-row flex-col shadow shadow-xl p-4 rounded-lg bg-white">
          <Image
            src={product.image}
            alt={product.title}
            width={247}
            height={100}
            className="m-auto h-auto "
          />

          <div className="flex flex-col items-start justify-start md:pl-10 md:pr-4">
            <p className="text-[#abb8c3] text-[12px] font-bold py-[2px] uppercase">
              {product.category}
            </p>
            <h1 className="text-[24px] text-[#000] py-[2px] font-semibold text-start mb-2">
              {product.title}
            </h1>
            <p className="mb-2 ">{product.description}</p>
            <p className="text-[#D26E4B] text-[14px] font-bold mb-1">
              Rating: {product.rating?.rate}
            </p>
            <p className="text-[18px] text[#111111] font-semibold mb-2">
              ${product.price}
            </p>
            <div className="border-t-[1px] border-[#abb8c3] w-[100%] pt-[10px] flex gap-2">
              <button className=" p-2 outline-none border border-[#D3D3D3] text-[12x] bg-[#446084] text-[white]">
                Buy Now
              </button>
              <button className=" p-2 outline-none border border-[#D3D3D3] text-[12x]">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

async function fetchProduct(id) {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}
// Fetch all product IDs to generate static paths
export async function generateStaticParams() {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    const products = response.data;

    // Generate a list of paths based on product IDs
    return products.map(product => ({
      id: product.id.toString(),
    }));
  } catch (error) {
    console.error("Error fetching product IDs:", error);
    return [];
  }
}