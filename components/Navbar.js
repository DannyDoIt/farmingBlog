import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
    <nav className="navbar">
        <div className="navbar-container">
        <div className="navbar-logo">
            <Link to="/">FarmingBlog</Link>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="navbar-icon">&#9776;</span> {/* Menu icon */}
        </div>
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/blog" onClick={toggleMenu}>Blog</Link></li>
            <li><Link to="/shop" onClick={toggleMenu}>Shop</Link></li>
            <li><Link to="/classes" onClick={toggleMenu}>Classes</Link></li>
            <li><Link to="/profile" onClick={toggleMenu}>Profile</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
            </ul>
        </div>
        </nav>
    );
}

export default Navbar;
