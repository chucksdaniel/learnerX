import React, { useState } from "react";
import axios from "axios";

export default () => {
	const [title, setTitle] = useState();

	const onSubmit = async (event) => {
		event.preventDefault();
		// Make request to post micro service
		await axios.post("http://localhost:4000/posts", {
			title,
			// body,
		});

		setTitle("");
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label>Title</label>
					<input
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className="form-control"
					/>
				</div>
				<div class="mb-3">
					<label for="exampleFormControlTextarea1" class="form-label">
						Blog Content
					</label>
					<textarea
						class="form-control"
						id="exampleFormControlTextarea1"
						rows="3"
					></textarea>
				</div>
				<button className="btn btn-primary">Submit</button>
			</form>
		</div>
	);
};
