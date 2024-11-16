import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContextAuth } from '../../contexts/AuthContext';
import '../../styles/pages/SignupPage.css';

const SignupPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const { signup } = useContextAuth();
	const navigate = useNavigate();

	const handleSignup = async (e) => {
		e.preventDefault();
		setError('');

		if (!email || !password) {
			setError('Please provide valid email and password');
			return;
		}

		try {
			await signup(email, password);
			navigate('/profile');
		} catch (err) {
			setError('Sign up failed. Please try again.');
		}
	};

	return (
		<div className="signup-container">
			<h2>Sign Up</h2>
			<form onSubmit={handleSignup}>
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
				<button type="submit">Sign Up</button>
			</form>
			{error && <p style={{ color: 'red' }}>{error}</p>}
		</div>
	);
};

export default SignupPage;
