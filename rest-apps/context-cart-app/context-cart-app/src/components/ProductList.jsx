// src/components/ProductList.js
import React from 'react';
import { useCart } from '../context/CartContext';
import '../App.css';
const products = [
	{
		id: 1,
		name: 'Apple',
		price: 1.25,
		image: '/images/amit-lahav-rxN2MRdFJVg-unsplash.jpg',
	},
	{
		id: 2,
		name: 'Banana',
		price: 0.75,
		image: '/images/mockup-graphics-Kl3467edwsE-unsplash.jpg',
	},
	{
		id: 3,
		name: 'Orange',
		price: 2.30,
		image: '/images/xiaolong-wong-nibgG33H0F8-unsplash.jpg',
	},
	{
		id: 4,
		name: 'Grape',
		price: 3.25,
		image: '/images/andrey-haimin-qtwlKiu6VHg-unsplash.jpg',
	},
	{
		id: 5,
		name: 'Watermelon',
		price: 5.75,
		image: '/images/art-rachen-izi5AnlbRIA-unsplash.jpg',
	},
	{
		id: 6,
		name: 'Kiwi',
		price: 2.90,
		image: '/images/engin-akyurt-jPVcZsxRGJo-unsplash.jpg',
	},
	{
		id: 7,
		name: 'Avocado',
		price: 2.25,
		image: '/images/thought-catalog-9aOswReDKPo-unsplash.jpg',
	},
	{
		id: 8,
		name: 'Pineapple',
		price: 7.75,
		image: '/images/stephany-williams-yx3-a7ualMM-unsplash.jpg',
	},
	{
		id: 9,
		name: 'Strawberry',
		price: 3.00,
		image: '/images/justus-menke-gkANpt2K2Hk-unsplash.jpg',
	},
];

export const ProductList = () => {
	const { addToCart } = useCart();

	return (
		<div className="p-4">
			<h2 className="text-xl font-bold mb-2">Products</h2>
			<div className="grid grid-cols-1 gap-2">
				{products.map((product) => (
					<div
						key={product.id}
						className="p-3 border rounded flex justify-between items-center"
					>
						<div>
							<img
								src={product.image}
								alt={product.name}
								className="product-image"
							/>
							{product.name} - ${product.price.toFixed(2)}
						</div>
						<button
							onClick={() => addToCart(product)}
							className="bg-blue-500 text-white px-2 py-1 rounded"
						>
							Add to Cart
						</button>
					</div>
				))}
			</div>
		</div>
	);
};
