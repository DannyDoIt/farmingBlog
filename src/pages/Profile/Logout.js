import React from 'react';
import { useContextAuth } from '../../contexts/AuthContext';

const ProfilePage = () => {
	const { user, logout } = useContextAuth();

	const handleLogout = () => {
		logout();
		window.location.href = '/login';
	};

	return (
		<div className="profile-container">
			<h2>Profile</h2>
			{user ? (
				<div>
					<p>Email: {user.email}</p>
					<input type="password" placeholder="New Password" />
					<button>Change Password</button>
					<button onClick={handleLogout}>Log Out</button>
				</div>
			) : (
				<p>You are not logged in</p>
			)}
		</div>
	);
};

export default ProfilePage;
