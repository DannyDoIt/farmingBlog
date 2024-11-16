import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useContextAuth } from "../contexts/AuthContext";
import "../styles/components/Navbar.css";

const Navbar = () => {
	const { user } = useContextAuth();

	return (
		<div className="navbar">
			<Link to="/">Home</Link>
			<Link to="/blog">Blog</Link>
			<Link to="/shop">Shop</Link>
			<Link to="/contact">Contact</Link>
			{user ? (
				<Link to="/profile">Profile</Link>
			) : (
				<Link to="/login">Login</Link>
			)}
			<Link to="/cart" className="cart-link">Cart</Link> {/* Added Cart link */}
		</div>
	);
};

export default Navbar;
