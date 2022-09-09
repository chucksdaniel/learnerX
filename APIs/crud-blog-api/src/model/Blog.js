const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { ObjectId } = mongoose.Schema.Types;

const BlogSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true,
		},
		content: {
			type: String,
			required: true,
		},
		photo: {
			type: String,
			// required: true,
		},
		comments: {
			text: String,
			postedBy: { type: ObjectId, ref: "user" },
		},
		// createdAt: {
		// 	type: Date,
		// 	default: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
		// },
	},
	{ timestamps: true }
);

const Blog = mongoose.model("blog", BlogSchema);

module.exports = Blog;
