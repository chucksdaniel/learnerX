import React, { useState, useEffect } from "react";
import axios from "axios";

export default ({ postId }) => {
	const [comments, setComment] = useState([]);
	/* Returns arrays of comment associated with a particular post*/

	const fetchData = async () => {
		const res = await axios.get(
			`http://localhost:4001/posts/${postId}/comments`
		);

		setComment(res.data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const renderComment = comments.map((comment) => {
		return <li key={comment.id}>{comment.content}</li>;
	});

	return <ul>{renderComment}</ul>;
};
