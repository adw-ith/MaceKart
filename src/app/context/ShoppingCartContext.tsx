"use client";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

export interface CartItem {
  name: string;
  prod_id: number;
  description: string | null;
  price: number;
  image: string | null;
  quantity: number;
  sid: number | null;
  categoryId: number | null;
}

interface CartContextType {
  cartItems: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (prod_id: number) => void;
  increaseItemQuantity: (prod_id: number) => void;
  decreaseItemQuantity: (prod_id: number) => void;
  clearCart: () => void;
  moveToCheckout: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

function useSessionStorageCart(): [CartItem[], (items: CartItem[]) => void] {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = sessionStorage.getItem("shopping-cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const saveCartItems = (items: CartItem[]) => {
    setCartItems(items);
    sessionStorage.setItem("shopping-cart", JSON.stringify(items));
  };

  return [cartItems, saveCartItems];
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useSessionStorageCart();
  const router = useRouter();

  const addItemToCart = (item: CartItem) => {
    const existingItem = cartItems.find((i) => i.prod_id === item.prod_id);
    let updatedCart;

    if (existingItem) {
      updatedCart = cartItems.map((i) =>
        i.prod_id === item.prod_id ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      updatedCart = [...cartItems, { ...item, quantity: 1 }];
    }

    setCartItems(updatedCart);
  };

  const increaseItemQuantity = (prod_id: number) => {
    const updatedCart = cartItems.map((item) =>
      item.prod_id === prod_id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const decreaseItemQuantity = (prod_id: number) => {
    const updatedCart = cartItems
      .map((item) =>
        item.prod_id === prod_id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0); // Remove item if quantity is 0
    setCartItems(updatedCart);
  };

  const removeItemFromCart = (prod_id: number) => {
    const updatedCart = cartItems.filter((item) => item.prod_id !== prod_id);
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]);
    sessionStorage.removeItem("shopping-cart");
  };

  const moveToCheckout = () => {
    if (cartItems.length === 0) {
      alert(
        "Your cart is empty. Add some items before proceeding to checkout."
      );
      return;
    }
    router.push("/checkout");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        increaseItemQuantity,
        decreaseItemQuantity,
        clearCart,
        moveToCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
