import React, { useState, useEffect } from "react";
import axios from "axios";
import Comments from "./Comments";
import CommentList from "./CommentList";

export default () => {
	const [posts, setPosts] = useState({});

	const fetchPost = async () => {
		const res = await axios.get("http://localhost:4000/posts");

		setPosts(res.data);
	};

	useEffect(() => {
		fetchPost();
	}, []);

	// console.log(posts);

	// Convert the object to array version
	// const values = Object.values(posts);
	// console.log(values);

	const renderPost = Object.values(posts).map((post) => {
		return (
			<div
				className="card"
				style={{ width: "30%", marginBottom: "20px" }}
				key={post.id}
			>
				<div className="card-body">
					<h4>{post.title}</h4>
					<CommentList postId={post.id} />
					<Comments postId={post.id} />
				</div>
			</div>
		);
	});

	return (
		<div className="d-flex flex-row flex-wrap justify-content-between">
			{renderPost}
		</div>
	);
};
