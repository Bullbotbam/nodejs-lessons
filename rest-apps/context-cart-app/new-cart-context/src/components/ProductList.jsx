import React from "react";
import { useCart } from "../context/CartContext";
import "../App.css";

// Displays a horizontal scrollable product gallery using Tailwind CSS
export const ProductList = () => {
  const { products, addToCart } = useCart();

  return (
    <div className="p-4">
      {/* Section heading */}
      <h2 className="text-3xl font-bold text-green-800 mb-4">
        Featured Products
      </h2>

      {/* Scrollable container */}
      <div className="overflow-x-auto">
        {/* Flexbox layout for horizontal scrolling */}
        <div className="flex space-x-6 snap-x snap-mandatory scroll-smooth pb-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[250px] bg-white border border-green-200 rounded-xl shadow-sm snap-start flex-shrink-0 p-4 flex flex-col items-center text-center"
            >
              {/* Product image */}
              <img
                src={product.thumbnail}
                alt={product.title}
                className="rounded-lg mb-3 h-40 w-full object-cover"
              />

              {/* Product title */}
              <h3 className="font-semibold text-green-900 mb-1">
                {product.title}
              </h3>

              {/* Product price */}
              <p className="text-green-700 font-medium mb-3 text-lg">
                ${product.price.toFixed(2)}
              </p>

              {/* Add to Cart button */}
              <button
                onClick={() => addToCart(product)}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full shadow"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
