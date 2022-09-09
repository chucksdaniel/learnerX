const validator = require("../../utils/validator");
const userHelper = require("../../utils/user.helper");

const helper = require("../../utils/user.helper");
const createError = require("../../utils/errors");

exports.getAllUser = async (req, res, next) => {
	try {
		const user = await helper.getAllUser();
		res.status(200).json({ data: user, msg: "Users fetched successfully" });
	} catch (error) {
		next(error);
	}
};

exports.getUser = (req, res, next) => {
	res.send("Get a user endpoint");
};

exports.registerUser = (req, res, next) => {
	res.send("Admin register user endpoint");
};

exports.updateUser = (req, res, next) => {
	res.send("Update users' endpoint");
};

exports.deleteUser = (req, res, next) => {
	res.send("Delete users' endpoint");
};
