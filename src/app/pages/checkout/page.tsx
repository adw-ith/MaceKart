"use client";
import { useCart } from "@/app/context/ShoppingCartContext";
import { useEffect, useState } from "react";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const [purchaseResults, setPurchaseResults] = useState<any>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [cartItems]);

  const handlePurchase = async () => {
    try {
      const purchasePromises = cartItems.map(async (item) => {
        const response = await fetch("/api/purchase/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cid: 1,
            prod_id: item.prod_id,
            sid: item.sid,
            quantity: item.quantity,
            totalPrice: item.price * item.quantity,
          }),
        });

        if (!response.ok) {
          throw new Error(
            `Failed to purchase item with prod_id ${item.prod_id}`
          );
        }

        const data = await response.json();
        return { ...data, ...item };
      });

      const results = await Promise.all(purchasePromises);
      setPurchaseResults(results);
      setIsModalVisible(true);

      // Hide modal after 15 seconds
      setTimeout(() => setIsModalVisible(false), 15000);

      clearCart();
    } catch (error) {
      console.error("Error purchasing items:", error);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Checkout</h1>

        <div className="space-y-4">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.prod_id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">
                    ₹{item.price} x {item.quantity}
                  </p>
                </div>
                <p className="text-lg font-bold text-blue-600">
                  ₹{item.price * item.quantity}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Your cart is empty</p>
          )}
        </div>

        {/* Total Price */}
        <div className="mt-6 flex justify-between items-center border-t pt-4">
          <h2 className="text-xl font-bold text-blue-600">Total Price</h2>
          <p className="text-2xl font-bold text-blue-600">₹{totalPrice}</p>
        </div>

        <button
          onClick={handlePurchase}
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          disabled={cartItems.length === 0} // Disable if cart is empty
        >
          Purchase
        </button>
      </div>

      {/* Purchase Modal */}
      {isModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-lg mx-auto transform transition-transform duration-300 ease-in-out scale-105">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-blue-600">Purchase Successful</h2>
              <button
                onClick={() => setIsModalVisible(false)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none text-2xl"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              {purchaseResults.map((item: any) => (
                <div
                  key={item.prod_id}
                  className="border-b border-gray-300 py-4 last:border-none"
                >
                  <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-gray-600">
                    Price: <span className="font-medium text-gray-800">₹{item.price * item.quantity}</span>
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsModalVisible(false)}
                className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none transition-all duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
