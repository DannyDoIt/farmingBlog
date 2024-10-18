import React from 'react';
import '../styles/HomePage.css';

function HomePage() {
    return (
        <div className="home-container">
            <div className="welcome-section">
                <h1>Welcome to FarmingBlog</h1>
                <p>Your one-stop shop for farming tips, local products, and class bookings.</p>
            </div>
            <div className="features-section">
                <div className="feature-box">
                    <h2>Blog</h2>
                    <p>Read the latest articles and tips about farming and gardening.</p>
                </div>
                <div className="feature-box">
                    <h2>Shop</h2>
                    <p>Explore local products and produce available for purchase.</p>
                </div>
                <div className="feature-box">
                    <h2>Classes</h2>
                    <p>Book a spot in one of our upcoming farming and gardening classes.</p>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
