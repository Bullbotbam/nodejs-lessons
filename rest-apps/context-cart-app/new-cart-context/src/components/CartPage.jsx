import React from 'react';
import { useCart } from '../context/CartContext';

export default function CartPage() {
	const { cartItems, removeFromCart, total } = useCart();

	return (
		<div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
			<div className="bg-white w-full max-w-md mx-auto rounded-xl shadow-lg p-6 relative">
				<h2 className="text-2xl font-bold text-green-800 mb-4 text-center">
					Your Shopping Cart
				</h2>
				{cartItems.length === 0 ? (
					<p className="text-green-600 text-center">Your cart is empty.</p>
				) : (
					<ul className="divide-y divide-green-100 mb-4">
						{cartItems.map((item) => (
							<li
								key={item.id}
								className="flex justify-between items-center py-3"
							>
								<div>
									<h3 className="font-semibold text-green-900">{item.title}</h3>
									<p className="text-sm text-green-700">
										${item.price.toFixed(2)} × {item.qty} = $
										{(item.price * item.qty).toFixed(2)}
									</p>
								</div>
								<button
									onClick={() => removeFromCart(item.id)}
									className="text-sm text-red-600 hover:underline"
								>
									Remove
								</button>
							</li>
						))}
					</ul>
				)}
				<div className="text-right font-bold text-lg text-green-900">
					Total: ${total.toFixed(2)}
				</div>
			</div>
		</div>
	);
}
