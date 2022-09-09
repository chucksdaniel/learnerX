const { createError } = require("../utils/error");
const blogService = require("../services/blogService");

const getAllBlog = async (req, res, next) => {
	try {
		const blogs = await blogService.getAllBlog();

		if (!blogs) {
			return next(createError(400, "No post found"));
		}
		return res.status(200).json({ status: "Success", data: blogs });
	} catch (error) {
		next(error);
	}
};

const getBlog = async (req, res, next) => {
	const { blogId } = req.params;
	try {
		const blog = await blogService.getBlog(blogId);
		if (!blog) {
			return next(createError(404, "Blog post not found"));
		}
		return res.status(200).json({ status: "Success", data: blog });
	} catch (error) {
		next(error);
	}
};

const createNewBlog = async (req, res, next) => {
	console.log(req.body);
	const { title, content } = req.body;

	if (!title || !content)
		return next(createError(400, "Title and Content is required"));

	const newBlog = {
		title,
		content,
	};
	try {
		const createBlog = await blogService.createNewBlog(newBlog);
		return res.status(201).json({ status: "Ok", data: createBlog });
	} catch (error) {
		next(error);
	}
};

const updateBlog = async (req, res, next) => {
	const { title, content } = req.body;
	// const { blogId } = req.params;

	const blogtoUpdate = {
		title,
		content,
	};

	try {
		const blogUpdated = blogService.updateBlog(
			req.params.blogId,
			blogtoUpdate
		);
		return res.status(201).json({ status: "Success", data: blogUpdated });
	} catch (error) {
		next(error);
	}
};

const deleteBlog = (req, res) => {
	res.send("Delete a blog post");
};

module.exports = {
	getAllBlog,
	getBlog,
	createNewBlog,
	updateBlog,
	deleteBlog,
};
