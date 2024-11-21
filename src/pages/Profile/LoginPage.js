import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContextAuth } from '../../contexts/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/pages/LoginPage.css';

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { login } = useContextAuth();
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			await login(email, password);
			toast.success('Successfully logged in!');
			navigate('/profile');
		} catch (error) {
			toast.error('Invalid credentials, please try again!');
		}
	};

	return (
		<div className="login-container">
			<h2>Log In</h2>
			<form onSubmit={handleLogin}>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<button type="submit" className="login-btn">Log In</button>
			</form>
			<div className="login-links">
				<button className="link-btn" onClick={() => navigate('/forgot-password')}>Forgot User/Password?</button>
				<button className="link-btn" onClick={() => navigate('/signup')}>Sign Up</button>
			</div>
			<ToastContainer />
		</div>
	);
};

export default LoginPage;
