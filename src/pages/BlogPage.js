import React, { useState, useEffect } from 'react';
import { useContextAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../../src/styles/pages/BlogPage.css';

const BlogPage = () => {
	const { user } = useContextAuth();
	const [posts, setPosts] = useState([]);
	const [comments, setComments] = useState([]);
	const [newComment, setNewComment] = useState("");
	const [newPostTitle, setNewPostTitle] = useState("");
	const [newPostContent, setNewPostContent] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		const fetchPosts = async () => {
			const fetchedPosts = [
				{
					id: 1,
					author: "dannydo@test.com",
					title: "My First Blog Post",
					content: "This is the content of my first post.",
				},
				{
					id: 2,
					author: "someoneelse@test.com",
					title: "A Second Post",
					content: "Here's the content of a second post.",
				}
			];
			setPosts(fetchedPosts);
		};

		const fetchComments = async () => {
			const fetchedComments = [
				{ postId: 1, user: "dannydo@test.com", comment: "Great post!", id: 1 },
				{ postId: 1, user: "someoneelse@test.com", comment: "I agree, nice read.", id: 2 },
			];
			setComments(fetchedComments);
		};

		fetchPosts();
		fetchComments();
	}, []);

	const handleAddComment = (postId) => {
		if (newComment.trim()) {
			const newCommentObj = {
				postId: postId,
				user: user.email,
				comment: newComment,
				id: comments.length + 1,
			};
			setComments([...comments, newCommentObj]);
			setNewComment("");
		}
	};

	const handleDeleteComment = (commentId) => {
		setComments(comments.filter((comment) => comment.id !== commentId));
	};

	const handleEditComment = (commentId, newText) => {
		setComments(
			comments.map((comment) =>
				comment.id === commentId ? { ...comment, comment: newText } : comment
			)
		);
	};

	const handleDeletePost = (postId) => {
		setPosts(posts.filter((post) => post.id !== postId));
	};

	const handleEditPost = (postId, newContent) => {
		setPosts(
			posts.map((post) =>
				post.id === postId ? { ...post, content: newContent } : post
			)
		);
	};

	const handlePublishPost = () => {
		if (newPostTitle.trim() && newPostContent.trim()) {
			const newPost = {
				id: posts.length + 1,
				author: user.email,
				title: newPostTitle,
				content: newPostContent,
			};
			setPosts([...posts, newPost]);
			setNewPostTitle("");
			setNewPostContent("");
			navigate("/blog");
		}
	};

	const handleDiscardPost = () => {
		navigate("/blog");
	};

	return (
		<div className="blog-page">
			<h2>Blog Page</h2>
			<div className="create-post-container">
				<h3>Create a New Post</h3>
				<input
					type="text"
					placeholder="Post Title"
					value={newPostTitle}
					onChange={(e) => setNewPostTitle(e.target.value)}
				/>
				<textarea
					placeholder="Write your post here..."
					value={newPostContent}
					onChange={(e) => setNewPostContent(e.target.value)}
				></textarea>
				<div className="create-post-actions">
					<button className="publish-btn" onClick={handlePublishPost}>Publish Post</button>
					<button className="discard-btn" onClick={handleDiscardPost}>Discard</button>
				</div>
			</div>
			{posts.map((post) => (
				<div key={post.id} className="post">
					<h3>{post.title}</h3>
					<p>{post.content}</p>
					{user && user.email === post.author && (
						<div className="post-actions">
							<button onClick={() => handleEditPost(post.id, "New content here...")}>Edit Post</button>
							<button onClick={() => handleDeletePost(post.id)}>Delete Post</button>
						</div>
					)}
					<div className="comments">
						{comments
							.filter((comment) => comment.postId === post.id)
							.map((comment) => (
								<div key={comment.id} className="comment">
									<p><strong>{comment.user}:</strong> {comment.comment}</p>
									{user && user.email === comment.user && (
										<div className="comment-actions">
											<button onClick={() => handleEditComment(comment.id, "Updated comment text")}>Edit Comment</button>
											<button onClick={() => handleDeleteComment(comment.id)}>Delete Comment</button>
										</div>
									)}
								</div>
							))}
					</div>
					{user && (
						<div className="add-comment">
							<input
								type="text"
								value={newComment}
								onChange={(e) => setNewComment(e.target.value)}
								placeholder="Add a comment"
							/>
							<button onClick={() => handleAddComment(post.id)}>Submit Comment</button>
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default BlogPage;
