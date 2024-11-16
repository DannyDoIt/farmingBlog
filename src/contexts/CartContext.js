import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useContextCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (item) => {
		const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
		if (existingItem) {
			setCartItems(
				cartItems.map((cartItem) =>
					cartItem.id === item.id
						? { ...cartItem, quantity: cartItem.quantity + item.quantity }
						: cartItem
				)
			);
		} else {
			setCartItems([...cartItems, item]);
		}
	};

	const updateCartItem = (id, type) => {
		setCartItems((prevItems) =>
			prevItems.map((item) =>
				item.id === id
					? {
							...item,
							quantity:
								type === "+"
									? item.quantity + 1
									: type === "-" && item.quantity > 1
									? item.quantity - 1
									: item.quantity,
					}
					: item
			)
		);
	};

	const removeFromCart = (id) => {
		setCartItems(cartItems.filter((item) => item.id !== id));
	};

	return (
		<CartContext.Provider value={{ cartItems, addToCart, updateCartItem, removeFromCart }}>
			{children}
		</CartContext.Provider>
	);
};
