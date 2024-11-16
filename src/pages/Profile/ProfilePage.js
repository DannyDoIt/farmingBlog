import React, { useState, useContext } from "react";
import { useContextAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import '../../styles/pages/ProfilePage.css';

const ProfilePage = () => {
	const { user, logout } = useContextAuth();
	const [isChangePasswordVisible, setIsChangePasswordVisible] = useState(false);
	const navigate = useNavigate();

	const handleChangePasswordClick = () => {
		setIsChangePasswordVisible(true);
		navigate("/change-password");
	};

	return (
		<div className="profile-container">
			<h2>Profile</h2>
			{user ? (
				<div>
					<p>Email: {user.email}</p>
					<button onClick={logout}>Log Out</button>
					<div>
						{isChangePasswordVisible ? (
							<input type="password" placeholder="New Password" />
						) : (
							<button onClick={handleChangePasswordClick}>Change Password</button>
						)}
					</div>
				</div>
			) : (
				<p>Not logged in</p>
			)}
		</div>
	);
};

export default ProfilePage;
