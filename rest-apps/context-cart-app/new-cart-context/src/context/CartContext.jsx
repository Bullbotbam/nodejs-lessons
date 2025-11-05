import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [products, setProducts] = useState([]);

	// Fetch from DummyJSON on load
	useEffect(() => {
		fetch('https://dummyjson.com/products?limit=12')
			.then((res) => res.json())
			.then((data) => setProducts(data.products))
			.catch((err) => console.error('Failed to fetch products', err));
	}, []);

	// Add item or increase quantity
	const addToCart = (product) => {
		setCartItems((alreadyInCart) => {
			const existing = alreadyInCart.find((item) => item.id === product.id);
			if (existing) {
				return alreadyInCart.map((item) =>
					item.id === product.id ? { ...item, qty: item.qty + 1 } : item
				);
			}
			return [...alreadyInCart, { ...product, qty: 1 }];
		});
	};

	// Remove or decrease quantity
	const removeFromCart = (id) => {
		setCartItems((alreadyInCart) =>
			alreadyInCart
				.map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
				.filter((item) => item.qty > 0)
		);
	};

	const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

	return (
		<CartContext.Provider
			value={{ products, cartItems, addToCart, removeFromCart, total }}
		>
			{children}
		</CartContext.Provider>
	);
};
