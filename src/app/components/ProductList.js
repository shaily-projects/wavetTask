"use client";

import { useState, useEffect } from "react";
import Sorting from "./Sorting";
import Link from "next/link";
import Image from "next/image";

export default function ProductList({ initialProducts }) {
  const [sortedProducts, setSortedProducts] = useState(initialProducts);
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    let sortedArray = [...initialProducts];
    if (sortOrder === "lowToHigh") {
      sortedArray.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highToLow") {
      sortedArray.sort((a, b) => b.price - a.price);
    }
    setSortedProducts(sortedArray);
  }, [sortOrder, initialProducts]);

  return (
    <div className="max-w-[1240px] w-full m-auto md:px-8 px-4 mb-12">
      <Sorting setSortOrder={setSortOrder} />
      <ul className="flex flex-wrap min-h-[100vh] md:flex-row flex-col items-center gap-[18px] ">
        {sortedProducts.map((product) => (
          <li
            key={product.id}
            className="w-full md:max-w-[calc(33%_-10px)] max-w-full shadow shadow-xl rounded-lg bg-white"
          >
            <Link
              href={`/product/${product.id}`}
              className="flex flex-col md:items-start items-center"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={247}
                height={120}
                className="mx-auto pt-2 object-fill	"
              />
              <div className="p-4 ">
                <p className="text-[#abb8c3] text-[12px] font-bold py-[2px] uppercase">
                  {product.category}
                </p>
                <p className="text-[14px] text-[#000] my-1 font-semibold min-h-[46px] line-clamp-2">
                  {product.title}
                </p>
                <p className="line-clamp-2 text-[12px] mb-1">
                  {product.description}
                </p>
                <p className="text-[#D26E4B] text-[14px] font-bold">
                  Rating: {product.rating?.rate}
                </p>
                <p className="text-[16px] text[#111111] font-semibold">
                  ${product.price}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
