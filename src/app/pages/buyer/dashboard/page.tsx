"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "@prisma/client";
import ProductCard from "@/app/components/ProductCard";

export default function BuyerDashboardPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/product/fetchProducts");
        if (response.data.success) {
          setProducts(response.data.data);
          console.log(response.data.data);
        } else {
          setError("Failed to fetch products");
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="min-h-screen bg-slate-400">
      <div className="mx-auto px-10 md:px-16 py-8 bg-slate-50">
        <h1 className="text-2xl font-bold mb-6 text-slate-900 text-center">
          Buyer Dashboard
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2md:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.prod_id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
