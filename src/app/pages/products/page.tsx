import ProductCard from '@/app/components/ProductCard';
import { Product } from '@/app/types';

export default function ProductsPage() {
  const products: Product[] = [
    {
      id: '1',
      name: 'Textbook: Computer Science',
      description: 'Excellent condition computer science textbook',
      price: 599,
      stock: 1,
      seller: {
        id: '1',
        name: 'John Doe'
      }
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Available Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}