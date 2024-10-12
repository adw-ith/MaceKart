'use client';
// import { useState } from 'react';
// import { Product } from '@/app/types';

// interface NewProduct {
//   name: string;
//   description: string;
//   price: string;
//   stock: string;
// }

export default function SellerDashboardPage() {
  // const [products, setProducts] = useState<Product[]>([
  //   {
  //     id: '1',
  //     name: 'Textbook: Computer Science',
  //     description: 'Slightly used, good condition',
  //     price: 599,
  //     stock: 1,
  //     seller: {
  //       id: '1',
  //       name: 'Current Seller'
  //     }
  //   }
  // ]);

  // const [newProduct, setNewProduct] = useState<NewProduct>({
  //   name: '',
  //   description: '',
  //   price: '',
  //   stock: ''
  // });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle new product submission
  // };

  return (
    <div className="min-h-screen bg-cyan-500 "><div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl text-white font-bold mb-6">Seller Dashboard</h1>
      {/* Rest of the component remains similar, with proper TypeScript typing */}
    </div>
    </div>
  );
}