"use client";
import { Product } from "@prisma/client";
import { useCart } from "../context/ShoppingCartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    cartItems,
    addItemToCart,
    increaseItemQuantity,
    decreaseItemQuantity,
  } = useCart();

  // Check if the product is already in the cart
  const cartItem = cartItems.find((item) => item.prod_id === product.prod_id);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image || "https://picsum.photos/200/300"}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col">
        <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-2">Seller: {product.sid}</p>
        <p className="text-xl font-bold text-blue-600">₹{product.price}</p>

        {/* If item exists in cart, show plus/minus buttons */}
        {cartItem ? (
          <div className="mt-4 flex items-center justify-between">
            <button
              className="bg-red-600 text-white px-2 py-1 rounded"
              onClick={() => decreaseItemQuantity(product.prod_id)}
            >
              -
            </button>
            <span className="px-4">{cartItem.quantity}</span>
            <button
              className="bg-green-600 text-white px-2 py-1 rounded"
              onClick={() => increaseItemQuantity(product.prod_id)}
            >
              +
            </button>
          </div>
        ) : (
          // If item is not in cart, show "Add to Cart" button
          <button
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            onClick={() => addItemToCart({ ...product, quantity: 1 })}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
