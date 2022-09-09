const { User } = require("../../models");

const validator = require("../utils/validator");
const helper = require("../utils/helper");
const createError = require("../utils/errorHandler");

const signupUser = async (req, res, next) => {
	const body = req.body;
	console.log(body);
	try {
		const userData = await validator.validateSignup(body);

		const emailExist = await User.findOne({
			where: { email: userData.email },
		});
		if (emailExist) {
			next(createError(400, "A user with this email already exists"));
			return;
		}

		const hashedPassword = await helper.hashPassword(userData.password);

		const newUser = await User.create({
			name: userData.name,
			email: userData.email,
			password: hashedPassword,
		});

		return res.status(201).json({
			msg: "User registered successfully",
			user: newUser,
		});
	} catch (error) {
		next(error);
	}
};

const loginUser = async (req, res, next) => {
	try {
		const credential = req.body;
		const validData = await validator.validateLogin(credential);

		const userExist = await User.findOne({
			where: { email: validData.email },
		});

		if (!userExist) {
			next(createError(404, "User not found"));
			return;
		}

		const passwordIsValid = await helper.compareHash(
			validData.password,
			userExist.password
		);

		if (!passwordIsValid) {
			next(createError(404, "Incorrect password"));
			return;
		}

		const payload = {
			user: {
				id: userExist.id,
				name: userExist.name,
			},
		};

		const token = helper.signToken(payload);

		res.status(200).json({ msg: "User logged in successfully", data: token });
	} catch (error) {
		next(error);
	}
};

const getUserloggedIn = async (req, res, next) => {
	console.log(req.user);
	try {
		const user = await User.findOne({ where: { email: email } });
		res.json({
			status: 200,
			data: user,
			msg: "User details fetched successfully",
		});
	} catch (error) {
		next(error);
	}
};

module.exports = {
	signupUser,
	loginUser,
	getUserloggedIn,
};
