import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import ShopPage from './pages/ShopPage';
import ClassPage from './pages/ClassPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/Profile/ProfilePage';
import Navbar from './components/Navbar';
import ContactPage from './pages/ContactPage';
import ShopItemPage from './pages/ShopItemPage';

function App() {
    return (
        <div>
        <Navbar /> {/* when ready, add the Navbar component here */}
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/classes" element={<ClassPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/profile/*" element={<ProfilePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/shop/item/:id" element={<ShopItemPage />} />
            </Routes>
        </Router>
        </div>
    );
}

export default App;
