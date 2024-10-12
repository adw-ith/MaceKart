import Link from 'next/link';


const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-blue-600 text-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">MaceKart</Link>
          <div className="flex space-x-4">
            <Link href="products" className="hover:text-gray-200">Products</Link>
            <Link href="login" className="hover:text-gray-200">Login</Link>
            <Link href="signup" className="hover:text-gray-200">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;