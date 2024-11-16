import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContextAuth } from '../contexts/AuthContext';
import '../../src/styles/pages/BlogPostPage.css';

const BlogPostPage = () => {
	const { user } = useContextAuth();
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const navigate = useNavigate();

	const handlePublishPost = () => {
		if (title.trim() && content.trim()) {
			console.log('New Post Published:', { title, content });

			navigate("/blog");
		}
	};

	return (
		<div className="blog-post-page">
			<h2>Create a New Post</h2>
			<input
				type="text"
				placeholder="Post Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<textarea
				placeholder="Write your post here..."
				value={content}
				onChange={(e) => setContent(e.target.value)}
			/>
			<button onClick={handlePublishPost}>Publish Post</button>
		</div>
	);
};

export default BlogPostPage;
