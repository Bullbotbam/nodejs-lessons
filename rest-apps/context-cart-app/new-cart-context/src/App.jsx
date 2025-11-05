import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ProductList } from './components/ProductList';
import CartPage from './components/CartPage';
import { CartProvider } from './context/CartContext';

export default function App() {
	return (
		<CartProvider>
			<header className="bg-green-700 text-white p-4 flex justify-between items-center">
				<h1 className="text-2xl font-bold">Shopping Cart</h1>
				<nav className="space-x-4">
					<Link to="/" className="navItem hover:underline">
						Home
					</Link>
					<Link to="/cart" className="hover:underline">
						Cart
					</Link>
				</nav>
			</header>
			<Routes>
				<Route path="/" element={<ProductList />} />
				<Route path="/cart" element={<CartPage onClose={() => {}} />} />
			</Routes>
		</CartProvider>
	);
}
