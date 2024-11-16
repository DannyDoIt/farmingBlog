import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContextAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
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
			navigate('/profile');
		} catch (error) {
			console.log(error.message)
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
				<button type="submit">Log In</button>
			</form>
			<div className="login-links">
				<Link to="/forgot-password">Forgot User/Password?</Link>
				<Link to="/signup">Sign Up</Link>
			</div>
		</div>
	);
};

export default LoginPage;
