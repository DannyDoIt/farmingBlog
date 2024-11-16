import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useContextAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [cart, setCart] = useState([]);

	const login = (email, password) => {
		if (email === "dannydo@test.com" && password === "asdf1234") {
			setUser({ email });
			return true;
		} else {
			throw new Error("Invalid credentials");
		}
	};

	const signup = (email, password) => {
		if (email && password) {
			setUser({ email });
			return true;
		} else {
			throw new Error("Please provide valid email and password");
		}
	};

	const logout = () => {
		setUser(null);
		setCart([]);
	};

	const addToCart = (item) => {
		setCart((prevCart) => {
			const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
			if (existingItem) {
				return prevCart.map((cartItem) =>
					cartItem.id === item.id
						? { ...cartItem, quantity: cartItem.quantity + 1 }
						: cartItem
				);
			} else {
				return [...prevCart, { ...item, quantity: 1 }];
			}
		});
	};

	return (
		<AuthContext.Provider value={{ user, login, signup, logout, cart, addToCart }}>
			{children}
		</AuthContext.Provider>
	);
};
