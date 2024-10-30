"use client";
import { useCart } from "@/app/context/ShoppingCartContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [cartItems]);

  const router = useRouter();

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
      });

      await Promise.all(purchasePromises);

      clearCart();
      router.push("/pages/buyer/success");
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
    </div>
  );
};

export default CheckoutPage;
