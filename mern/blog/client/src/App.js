import React from "react";
import PostCreate from "./components/PostCreate";
import PostList from "./components/PostList";

export default () => {
	return (
		<div className="container">
			<h2>Create Post</h2>
			<PostCreate />
			<PostList />
		</div>
	);
};
