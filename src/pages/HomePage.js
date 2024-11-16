import React from "react";
import "../styles/pages/HomePage.css";

const HomePage = () => {
	return (
		<div className="home-page">
			<h1>Welcome to Our Shop</h1>
			<div className="home-image">
            <img src="/assets/images/HydroponicHomePage.jpg" alt="Shop" />
			</div>
			<p>Explore the best products we have to offer!</p>
		</div>
	);
};

export default HomePage;
