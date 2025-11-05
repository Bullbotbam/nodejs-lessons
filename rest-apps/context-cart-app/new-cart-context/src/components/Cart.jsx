// src/components/Cart.js
import React from "react";
import { useCart } from "../context/CartContext";

export const Cart = () => {
  const { cartItems, removeFromCart, total } = useCart();

  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-xl font-bold mb-2">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <ul className="space-y-2">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border p-2 rounded"
            >
              <span>
                {item.name} x{item.qty} (${(item.qty * item.price).toFixed(2)})
              </span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
              >
                Remove
              </button>
            </li>
          ))}
          <li className="font-bold text-right">
            Total: ${total.toFixed(2)}
          </li>
        </ul>
      )}
    </div>
  );
};
