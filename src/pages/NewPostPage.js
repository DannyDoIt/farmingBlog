import React, { useState } from 'react';
import '../src/styles/pages/NewPostPage.css';

const NewPostPage = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [image, setImage] = useState(null);

	const handleImageUpload = (e) => {
		setImage(e.target.files[0]);
	};

	const handleSubmit = () => {
		console.log({
			title,
			content,
			image,
		});
	};

	return (
		<div className="newpost-container">
			<h2>Create a New Post</h2>
			<input
				type="text"
				placeholder="Post Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<textarea
				placeholder="Post Content"
				value={content}
				onChange={(e) => setContent(e.target.value)}
			/>
			<input type="file" onChange={handleImageUpload} />
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
};

export default NewPostPage;
