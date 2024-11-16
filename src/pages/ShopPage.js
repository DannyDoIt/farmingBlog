import React, { useState } from "react";
import { useContextCart } from "../contexts/CartContext";
import "../styles/pages/ShopPage.css";

const ShopPage = () => {
	const [items] = useState([
		{ id: 1, name: "Apple", description: "Fresh red apple", price: 2.5, image: "apple.jpg" },
		{ id: 2, name: "Banana", description: "Fresh ripe bananas", price: 1.8, image: "banana.jpg" },
		{ id: 3, name: "Carrot", description: "Fresh organic carrots", price: 1.2, image: "carrot.jpg" },
		{ id: 4, name: "Grapes", description: "Fresh green grapes", price: 2.8, image: "grapes.jpg" },
		{ id: 5, name: "Lemon", description: "Fresh yellow lemons", price: 1.5, image: "lemon.jpg" },
		{ id: 6, name: "Orange", description: "Fresh juicy oranges", price: 2.0, image: "orange.jpg" },
		{ id: 7, name: "Pineapple", description: "Fresh tropical pineapple", price: 3.5, image: "pineapple.jpg" },
		{ id: 8, name: "Mango", description: "Sweet ripe mangoes", price: 2.2, image: "mango.jpg" },
		{ id: 9, name: "Peach", description: "Fresh juicy peaches", price: 2.7, image: "peach.jpg" },
		{ id: 10, name: "Strawberry", description: "Fresh ripe strawberries", price: 3.0, image: "strawberry.jpg" },
		{ id: 11, name: "Plum", description: "Fresh sweet plums", price: 2.4, image: "plum.jpg" },
		{ id: 12, name: "Avocado", description: "Fresh creamy avocado", price: 2.9, image: "avocado.jpg" },
	]);

	const { addToCart } = useContextCart();

	const [quantities, setQuantities] = useState(
		items.reduce((acc, item) => {
			acc[item.id] = 1;
			return acc;
		}, {})
	);

	const [addedToCart, setAddedToCart] = useState({});

	const handleQuantityChange = (id, type) => {
		setQuantities((prev) => {
			const newQuantity = type === "+" ? prev[id] + 1 : prev[id] > 1 ? prev[id] - 1 : 1;
			return { ...prev, [id]: newQuantity };
		});
	};

	const handleAddToCart = (item) => {
		const quantity = quantities[item.id];
		addToCart({ ...item, quantity });
		setAddedToCart((prev) => ({ ...prev, [item.id]: true }));

		setTimeout(() => {
			setAddedToCart((prev) => ({ ...prev, [item.id]: false }));
		}, 1500);
	};

	return (
		<div className="shop-page">
			<h2>Shop Page</h2>
			<div className="shop-items">
				{items.map((item) => (
					<div key={item.id} className="shop-item">
						<img src={`images/${item.image}`} alt={item.name} />
						<h3>{item.name}</h3>
						<p>{item.description}</p>
						<p>${item.price}</p>

						<div className="quantity-controls">
							<button
								className="quantity-btn"
								onClick={() => handleQuantityChange(item.id, "-")}
								style={{ backgroundColor: "#ccc" }}
							>
								-
							</button>
							<input
								type="text"
								value={quantities[item.id]}
								onChange={(e) =>
									setQuantities((prev) => ({
										...prev,
										[item.id]: Math.max(1, parseInt(e.target.value))
									}))
								}
								className="quantity-input"
							/>
							<button
								className="quantity-btn"
								onClick={() => handleQuantityChange(item.id, "+")}
								style={{ backgroundColor: "#ccc" }}
							>
								+
							</button>
						</div>

						<button
							onClick={() => handleAddToCart(item)}
							className="add-to-cart-btn"
							style={{
								backgroundColor: addedToCart[item.id] ? "gray" : "#4CAF50"
							}}
						>
							{addedToCart[item.id] ? "Item Added to Cart" : "Add to Cart"}
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default ShopPage;
