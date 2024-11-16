import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/Profile/LoginPage";
import SignupPage from "./pages/Profile/SignupPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import ChangePasswordPage from "./pages/Profile/ChangePasswordPage";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";

const App = () => {
	return (
		<AuthProvider>
			<CartProvider>
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/blog" element={<BlogPage />} />
						<Route path="/shop" element={<ShopPage />} />
						<Route path="/cart" element={<CartPage />} />
						<Route path="/contact" element={<ContactPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/signup" element={<SignupPage />} />
						<Route path="/profile" element={<ProfilePage />} />
						<Route path="/change-password" element={<ChangePasswordPage />} />
					</Routes>
				</Router>
			</CartProvider>
		</AuthProvider>
	);
};

export default App;
