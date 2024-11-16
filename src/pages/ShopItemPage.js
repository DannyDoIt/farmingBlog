import React, { useState } from "react";

const SignupPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignup = (e) => {
		e.preventDefault();
		console.log("Signing up with:", email, password);
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
		</div>
	);
};

export default SignupPage;
