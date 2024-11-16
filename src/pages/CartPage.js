import React, { useState } from "react";
import { useContextCart } from "../contexts/CartContext";
import "../styles/pages/CartPage.css";

const CartPage = () => {
	const { cartItems, updateCartItem, removeFromCart } = useContextCart();
	const [updated, setUpdated] = useState({});

	const handleUpdate = (item) => {
		setUpdated((prev) => ({ ...prev, [item.id]: true }));
	};

	const handleRemove = (id) => {
		removeFromCart(id);
		setUpdated((prev) => ({ ...prev, [id]: false }));
	};

	return (
		<div className="cart-page">
			<h2>Your Cart</h2>
			<div className="cart-items">
				{cartItems.map((item) => (
					<div key={item.id} className="cart-item">
						<img src={`images/${item.image}`} alt={item.name} />
						<div className="item-details">
							<h3>{item.name}</h3>
							<p>${item.price}</p>
							<div className="quantity-controls">
								<button
									className="quantity-btn"
									onClick={() => updateCartItem(item.id, "-")}
								>
									-
								</button>
								<input
									type="text"
									value={item.quantity}
									className="quantity-input"
									readOnly
								/>
								<button
									className="quantity-btn"
									onClick={() => updateCartItem(item.id, "+")}
								>
									+
								</button>
							</div>
							<div className="cart-item-actions">
								<button
									className="remove-btn"
									onClick={() => handleRemove(item.id)}
								>
									Remove
								</button>
								<button
									className={updated[item.id] ? "updated-btn" : "update-cart-btn"}
									onClick={() => handleUpdate(item)}
								>
									{updated[item.id] ? "Item Updated" : "Update Cart"}
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="cart-total">
				Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
			</div>
		</div>
	);
};

export default CartPage;
