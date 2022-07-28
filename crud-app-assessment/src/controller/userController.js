const { User } = require("../../models");

const createError = require("../utils/errorHandler");
const helper = require("../utils/helper");

const getAllUser = async (req, res, next) => {
	try {
		const user = await User.findAll();
		if (!user) {
			next(createError(404, "No user found"));
			return;
		}
		res.status(200).json({ msg: "Users fetched successfully", data: user });
	} catch (error) {
		next(error);
	}
};

const getUserData = async (req, res, next) => {
	try {
		const userId = req.params.userId;
		const user = await User.findByPk(userId);
		if (!user) {
			next(createError(404, "User not found"));
			return;
		}
		if (req.user.id != userId) {
			next(createError(422, "Forbidden! authorization denied"));
			return;
		}
		res.status(200).json({ msg: "User fetched successfully", data: user });
	} catch (error) {
		next(error);
	}
};

const editUser = async (req, res, next) => {
	const { name, email, password } = req.body;
	const userId = req.params.userId;
	try {
		const user = await User.findOne({ where: { id: userId } });
		if (!user) {
			next(createError(404, "User not found"));
			return;
		}

		if (req.user.id != userId) {
			next(createError(422, "Forbidden! authorization denied"));
			return;
		}

		const updatedUserData = await user.update({
			name,
			email,
			password: await helper.hashPassword(password),
		});
		res.status(200).json({
			msg: "User updated successfully",
			data: updatedUserData,
		});
	} catch (error) {
		next(error);
	}
};

const deleteUser = async (req, res, next) => {
	const userId = req.params.userId;

	try {
		const user = await User.findOne({ where: { id: userId } });
		if (!user) {
			next(createError(404, "User not found"));
			return;
		}
		if (req.user.id != userId) {
			next(createError(422, "Forbidden! authorization denied"));
		}
		await user.destroy();
		res.status(200).json({ msg: `User ${userId} has been deleted` });
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getAllUser,
	getUserData,
	editUser,
	deleteUser,
};
