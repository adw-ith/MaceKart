import ProductCard from "@/app/components/ProductCard";
import { Product } from "@prisma/client";


const products:Product[] = [
  {
    prod_id: 1,
    name: "Smartphone X Pro",
    description: "A high-end smartphone with a 6.5-inch display, 128GB storage, and a 48MP camera.",
    price: 799.99,
    image: "",
    quantity: 100,
    sid: 2,
    categoryId: 5,

  },
  {
    prod_id: 2,
    name: "Wireless Noise Cancelling Headphones",
    description: "Over-ear Bluetooth headphones with active noise cancellation and 30-hour battery life.",
    price: 199.99,
    image: "",
    quantity: 150,
    sid: 3,
    categoryId: 6,

  },
  {
    prod_id: 3,
    name: "4K Ultra HD Smart TV",
    description: "65-inch 4K UHD Smart TV with HDR10+ support and built-in streaming apps.",
    price: 999.99,
    image: "",
    quantity: 40,
    sid: 4,
    categoryId: 7,

  },
  {
    prod_id: 4,
    name: "Gaming Laptop GTZ 15",
    description: "Powerful gaming laptop with 16GB RAM, 1TB SSD, and NVIDIA RTX 3060 GPU.",
    price: 1499.99,
    image: "",
    quantity: 30,
    sid: 5,
    categoryId: 8,

  },
  {
    prod_id: 5,
    name: "Electric Kettle 1.7L",
    description: "Stainless steel electric kettle with auto shut-off and boil-dry protection.",
    price: 29.99,
    image: "",
    quantity: 200,
    sid: 6,
    categoryId: 9,

  },
  {
    prod_id: 6,
    name: "Fitness Smartwatch",
    description: "Waterproof fitness tracker with heart rate monitor, GPS, and 10-day battery life.",
    price: 129.99,
    image: "",
    quantity: 120,
    sid: 7,
    categoryId: 10,

  },
  {
    prod_id: 7,
    name: "Bluetooth Portable Speaker",
    description: "Compact Bluetooth speaker with 360° sound and up to 12 hours of playtime.",
    price: 59.99,
    image: "",
    quantity: 300,
    sid: 8,
    categoryId: 11,

  },
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
  {
    prod_id: 9,
    name: "Cordless Drill Kit",
    description: "20V cordless drill with two batteries, charger, and 50-piece accessory kit.",
    price: 79.99,
    image: "",
    quantity: 75,
    sid: 10,
    categoryId: 13,

  },
  {
    prod_id: 10,
    name: "Ergonomic Office Chair",
    description: "High-back office chair with lumbar support, adjustable height, and mesh back.",
    price: 189.99,
    image: "",
    quantity: 60,
    sid: 11,
    categoryId: 14,

  }
];

export default function BuyerDashboardPage() {
  return (
    <div className="min-h-screen bg-slate-400">
      <div className="mx-auto  px-10  md:px-16  py-8 bg-slate-400">
        <h1 className="text-2xl font-bold mb-6 text-slate-900 text-center">Buyer Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2md:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => (
          <ProductCard key={product.prod_id} product={product}/>
          ))}
        </div>
      </div>
    </div>
  );
}
