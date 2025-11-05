import React from "react";
import { CartProvider } from "./context/CartContext";
import { ProductList } from "./components/ProductList";
import { Cart } from "./components/Cart";

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen p-6 bg-white text-gray-800">
        <h1 className="text-2xl font-bold mb-6">Context Cart App</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProductList />
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
