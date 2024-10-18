import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import ChangePasswordPage from './ChangePasswordPage';
import Logout from './Logout';

function ProfilePage() {
    return (
        <div>
        <h2>Profile</h2>
        <nav>
            <ul>
            <li><Link to="login">Log In</Link></li>
            <li><Link to="signup">Sign Up</Link></li>
            <li><Link to="change-password">Change Password</Link></li>
            <li><Link to="logout">Log Out</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="change-password" element={<ChangePasswordPage />} />
            <Route path="logout" element={<Logout />} />
        </Routes>
        </div>
    );
}

export default ProfilePage;
