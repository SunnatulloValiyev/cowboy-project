// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ProductCard from "./components/productCard.tsx";

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data.products);
  };

  // const handleDelete = async (id: string) => {
  //   const confirm = window.confirm("Mahsulotni o‘chirishga ishonchingiz komilmi?");
  //   if (!confirm) return;

  //   const res = await fetch(`/api/products/${id}`, {
  //     method: "DELETE",
  //   });

  //   const data = await res.json();

  //   if (data.success) {
  //     // Mahsulotni UI dan olib tashlash
  //     setProducts(products.filter((p) => p._id !== id));
  //   } else {
  //     alert("Xatolik: " + data.message);
  //   }
  // };

  return (
    <>
      <div className="max-container">
        <Header />
      </div>

      <img src="./bg.jpg" className="p-5" alt="bg" />

      <div className="max-container">
        <h1 className="text-5xl text-center">Barcha mahsulotlar</h1>
        <hr className="my-5" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
          {products.map((product) => (
            <ProductCard key={product._id} product={product}  />
          ))}
        </div>
      </div>
    </>
  );
}
