// Product data including images
const products = [
  {
    id: '1',
    name: 'Notebook',
    description: 'A4 ruled notebook for notes and sketches',
    price: 150,
    stock: 10,
    image: '/images/notebook.jpg', // Path to the notebook image
  },
  {
    id: '2',
    name: 'Pen',
    description: 'Blue ink ballpoint pen',
    price: 20,
    stock: 50,
    image: '/images/pen.jpg', // Path to the pen image
  },
  {
    id: '3',
    name: 'Pencil',
    description: 'Graphite pencil for drawing and writing',
    price: 10,
    stock: 100,
    image: '/images/pencil.jpg', // Path to the pencil image
  },
  {
    id: '4',
    name: 'Eraser',
    description: 'Rubber eraser for clean corrections',
    price: 15,
    stock: 30,
    image: '/images/eraser.jpg', // Path to the eraser image
  },
  {
    id: '5',
    name: 'Highlighter',
    description: 'Fluorescent highlighter for marking text',
    price: 25,
    stock: 40,
    image: '/images/highlighter.jpg', // Path to the highlighter image
  },
  {
    id: '6',
    name: 'Ruler',
    description: '30 cm plastic ruler for accurate measurements',
    price: 30,
    stock: 20,
    image: '/images/ruler.jpg', // Path to the ruler image
  },
];

export default function BuyerDashboardPage() {
  return (
    <div className="min-h-screen bg-cyan-500">
      <div className="container mx-auto px-4 py-8 bg-cyan-500 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Buyer Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-cyan-100 p-4 rounded-lg shadow-md">
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h2 className="text-xl text-black font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-2">{product.description}</p>
              <p className="text-lg font-bold text-cyan-600">₹{product.price}</p>
              <p className="text-gray-500">Stock: {product.stock}</p>
              <button className="mt-4 bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-600 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
