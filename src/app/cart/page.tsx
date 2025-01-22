"use client";

import { useEffect, useState } from "react";

// Define types for Cart and CartItem
type CartItem = {
  id: number; // Use string if WooCommerce IDs are strings
  name: string;
  quantity: number;
  price: number;
};

type Cart = {
  items: CartItem[];
  total_price: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<Cart>({
    items: [],
    total_price: 0,
  }); // Default state
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch("/api/cart"); // Replace with your WooCommerce API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Cart = await response.json(); // Ensure the data matches the `Cart` type
        setCart(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.items.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>Quantity: {item.quantity}</p>
          <p>Price: {item.price}</p>
        </div>
      ))}
      <h3>Total: {cart.total_price}</h3>
    </div>
  );
}
