import ProductCard from '@/app/components/ProductCard';
import { Product } from '@prisma/client';

export default function ProductsPage() {
  const products: Product[] = [
    {
      prod_id: 8,
      name: "Air Fryer 5.8 Quart",
      description: "Large capacity air fryer with 8 cooking presets and digital touch screen.",
      price: 89.99,
      image: "",
      quantity: 80,
      sid: 9,
      categoryId: 12,
  
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Available Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.prod_id} product={product} />
        ))}
      </div>
    </div>
  );
}