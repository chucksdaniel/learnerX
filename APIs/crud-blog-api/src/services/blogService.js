const Blog = require("../model/Blog");

const getAllBlog = () => {
	try {
		const allBlog = Blog.find();
		return allBlog;
	} catch (error) {
		throw error;
	}
};

const getBlog = (blogId) => {
	try {
		const blog = Blog.findById(blogId);
		// if (!blog) how to pass the error cast from database to error handler
		return blog;
	} catch (error) {}
};

const createNewBlog = (blog) => {
	try {
		const newBlog = new Blog({
			...blog,
		});
		const createBlog = newBlog.save();
		return createBlog;
	} catch (error) {
		throw error;
	}
};

const updateBlog = (blogId, blogtoUpdate) => {
	try {
		const blogUpdated = Blog.findByIdAndUpdate(
			blogId,
			{
				$set: {
					...blogtoUpdate,
				},
			},
			{ new: true }
		);
		return blogUpdated;
	} catch (error) {
		throw error;
	}
};

const deleteBlog = () => {};

module.exports = {
	getAllBlog,
	getBlog,
	createNewBlog,
	updateBlog,
	deleteBlog,
};
