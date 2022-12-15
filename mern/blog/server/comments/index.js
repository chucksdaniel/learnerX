const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
	res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", async (req, res) => {
	const commentId = randomBytes(4).toString("hex");
	const { content } = req.body;

	const comments = commentsByPostId[req.params.id] || [];

	comments.push({ id: commentId, content });

	commentsByPostId[req.params.id] = comments;

	await axios.post("http://localhost:4005/events", {
		type: "CommentCreated",
		data: {
			id: commentId,
			comments,
			postId: req.params.id,
		},
	});

	res.status(201).send(comments);
});

// Event handler: receive event coming from event bus
app.post("/events", (req, res) => {
	console.log("Received event: ", req.body.type);

	res.send({});
});

app.listen(4001, () => {
	console.log("App is running on Port 4001");
});
