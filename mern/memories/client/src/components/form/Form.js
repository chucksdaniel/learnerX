import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./style";
import { createPost, updatePost } from "../../actions/posts";

// Get the current ID

export default function Form({ currentId, setCurrentId }) {
	/** State field */
	const [postData, setPostData] = useState({
		creator: "",
		title: "",
		message: "",
		tags: "",
		selectedFile: "",
	});
	/** Fetch Data for the post to be update */
	const post = useSelector((state) =>
		currentId ? state.posts.find((p) => p._id === currentId) : null
	);
	const classes = useStyles();
	const dispatch = useDispatch();

	// Populate the value to the form
	useEffect(() => {
		if (post) setPostData(post);
	}, [post]);

	const handleSubmit = (e) => {
		console.log("onSubmit handler goes here");
		e.preventDefault();

		if (currentId) {
			dispatch(updatePost(currentId, postData));
		} else {
			dispatch(createPost(postData));
		}
		clear();
	};

	const clear = () => {
		setCurrentId(null);
		setPostData({
			creator: "",
			title: "",
			message: "",
			tags: "",
			selectedFile: "",
		});
	};

	return (
		<Paper className={classes.paper}>
			<form
				autoComplete="off"
				noValidate
				className={classes.form}
				onSubmit={handleSubmit}
			>
				<Typography variant="h6">
					{currentId ? "Editting" : "Creating"} a Memory
				</Typography>
				<TextField
					name="creator"
					variant="outlined"
					label="Creator"
					fullWidth
					value={postData.creator}
					onChange={(e) =>
						setPostData({ ...postData, creator: e.target.value })
					}
				/>
				<TextField
					name="title"
					variant="outlined"
					label="Title"
					fullWidth
					value={postData.title}
					onChange={(e) =>
						setPostData({ ...postData, title: e.target.value })
					}
				/>
				<TextField
					name="message"
					variant="outlined"
					label="Message"
					fullWidth
					value={postData.message}
					onChange={(e) =>
						setPostData({ ...postData, message: e.target.value })
					}
				/>
				<TextField
					name="tags"
					variant="outlined"
					label="Tags"
					fullWidth
					value={postData.tags}
					onChange={(e) =>
						setPostData({ ...postData, tags: e.target.value.split(",") })
					}
				/>
				<div className={classes.fileInput}>
					<FileBase
						type="file"
						multiple={false}
						onDone={({ base64 }) =>
							setPostData({ ...postData, selectedFile: base64 })
						}
					/>
				</div>
				<Button
					className={classes.buttonSubmit}
					variant="contained"
					color="primary"
					size="large"
					type="submit"
					fullWidth
				>
					Submit
				</Button>
				<Button
					variant="contained"
					color="secondary"
					size="small"
					onClick={clear}
					fullWidth
				>
					Clear
				</Button>
			</form>
		</Paper>
	);
}
