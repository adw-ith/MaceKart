'use client';
import { useState } from 'react';

interface Seller {
  id: string;
  name: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  seller: Seller;
}

export default function SellerDashboardPage() {
  const [products] = useState<Product[]>([
    {
      id: '1',
      name: 'Textbook: Computer Science',
      description: 'Slightly used, good condition',
      price: 599,
      stock: 1,
      image: 'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA',
      seller: {
        id: '1',
        name: 'John Doe',
      },
    },
    {
      id: '1',
      name: 'Textbook: Computer Science',
      description: 'Slightly used, good condition',
      price: 599,
      stock: 1,
      image: 'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA',
      seller: {
        id: '1',
        name: 'John Doe',
      },
    },
    {
      id: '1',
      name: 'Textbook: Computer Science',
      description: 'Slightly used, good condition',
      price: 599,
      stock: 1,
      image: 'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA',
      seller: {
        id: '1',
        name: 'John Doe',
      },
    },
    {
      id: '1',
      name: 'Textbook: Computer Science',
      description: 'Slightly used, good condition',
      price: 599,
      stock: 1,
      image: 'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA',
      seller: {
        id: '1',
        name: 'John Doe',
      },
    },
    {
      id: '1',
      name: 'Textbook: Computer Science',
      description: 'Slightly used, good condition',
      price: 599,
      stock: 1,
      image: 'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA',
      seller: {
        id: '1',
        name: 'John Doe',
      },
    },
    {
      id: '1',
      name: 'Textbook: Computer Science',
      description: 'Slightly used, good condition',
      price: 599,
      stock: 1,
      image: 'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA',
      seller: {
        id: '1',
        name: 'John Doe',
      },
    },
    {
      id: '1',
      name: 'Textbook: Computer Science',
      description: 'Slightly used, good condition',
      price: 599,
      stock: 1,
      image: 'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA',
      seller: {
        id: '1',
        name: 'John Doe',
      },
    },
    {
      id: '1',
      name: 'Textbook: Computer Science',
      description: 'Slightly used, good condition',
      price: 599,
      stock: 1,
      image: 'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA',
      seller: {
        id: '1',
        name: 'John Doe',
      },
    },
    {
      id: '2',
      name: 'Wireless Headphones',
      description: 'Brand new, sealed box',
      price: 299,
      stock: 5,
      image: 'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA',
      seller: {
        id: '2',
        name: 'Jane Smith',
      },
    },
    {
      id: '2',
      name: 'Wireless Headphones',
      description: 'Brand new, sealed box',
      price: 299,
      stock: 5,
      image: 'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA',
      seller: {
        id: '2',
        name: 'Jane Smith',
      },
    },
    {
      id: '2',
      name: 'Wireless Headphones',
      description: 'Brand new, sealed box',
      price: 299,
      stock: 5,
      image: 'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA',
      seller: {
        id: '2',
        name: 'Jane Smith',
      },
    },
    {
      id: '2',
      name: 'Wireless Headphones',
      description: 'Brand new, sealed box',
      price: 299,
      stock: 5,
      image: 'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA',
      seller: {
        id: '2',
        name: 'Jane Smith',
      },
    },
    {
      id: '2',
      name: 'Wireless Headphones',
      description: 'Brand new, sealed box',
      price: 299,
      stock: 5,
      image: 'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA',
      seller: {
        id: '2',
        name: 'Jane Smith',
      },
    },
    {
      id: '2',
      name: 'Wireless Headphones',
      description: 'Brand new, sealed box',
      price: 299,
      stock: 5,
      image: 'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA',
      seller: {
        id: '2',
        name: 'Jane Smith',
      },
    },
    {
      id: '2',
      name: 'Wireless Headphones',
      description: 'Brand new, sealed box',
      price: 299,
      stock: 5,
      image: 'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA',
      seller: {
        id: '2',
        name: 'Jane Smith',
      },
    },
    {
      id: '2',
      name: 'Wireless Headphones',
      description: 'Brand new, sealed box',
      price: 299,
      stock: 5,
      image: 'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA',
      seller: {
        id: '2',
        name: 'Jane Smith',
      },
    },
    {
      id: '2',
      name: 'Wireless Headphones',
      description: 'Brand new, sealed box',
      price: 299,
      stock: 5,
      image: 'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA',
      seller: {
        id: '2',
        name: 'Jane Smith',
      },
    },
    {
      id: '2',
      name: 'Wireless Headphones',
      description: 'Brand new, sealed box',
      price: 299,
      stock: 5,
      image: 'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA',
      seller: {
        id: '2',
        name: 'Jane Smith',
      },
    },
  ]);

  return (
    <div className="min-h-screen bg-slate-400">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl text-white font-bold mb-6">Seller Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-2">{product.description}</p>
              <p className="text-sm text-gray-600">Sold by: {product.seller.name}</p>
              <div className="mt-4 space-x-2">
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  View
                </button>
                <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
