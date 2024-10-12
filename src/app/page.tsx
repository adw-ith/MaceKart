import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-cyan-500 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to MaceKart</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="pages/buyer/dashboard" 
            className="p-8 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-4">Buy Products</h2>
            <p>Browse and purchase products from your college mates</p>
          </Link>
          <Link href="pages/seller/dashboard"
            className="p-8 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-4">Sell Products</h2>
            <p>List your products and start selling to college community</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
