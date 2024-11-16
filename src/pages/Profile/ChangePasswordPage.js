import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/pages/ChangePasswordPage.css';

const ChangePasswordPage = () => {
	const [newPassword, setNewPassword] = useState("");
	const navigate = useNavigate();

	const handlePasswordChange = () => {
		console.log("Password Changed: ", newPassword);
		navigate("/profile");
	};

	return (
		<div className="change-password-container">
			<h2>Change Password</h2>
			<input
				type="password"
				placeholder="New Password"
				value={newPassword}
				onChange={(e) => setNewPassword(e.target.value)}
			/>
			<button onClick={handlePasswordChange}>Change Password</button>
		</div>
	);
};

export default ChangePasswordPage;
