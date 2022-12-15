import React, { useState } from "react";
import axios from "axios";

// You have to know the id of the post you will associate the comment with
export default ({ postId }) => {
	const [content, setContent] = useState("");

	const onSubmit = async (event) => {
		event.preventDefault();

		await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
			content,
		});
		// After making a post request to the POST API, we need to clear the input
		setContent("");
	};

	return (
		<div>
			<h6>Leave a Comment</h6>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label>New Comment</label>
					<input
						value={content}
						onChange={(e) => setContent(e.target.value)}
						className="form-control"
					/>
				</div>
				<button className="btn btn-primary">Post</button>
			</form>
		</div>
	);
};
