const validator = require("../utils/validator");

const userService = require("../services/userService");

exports.getAllUser = (req, res) => {
	res.send("Welcome to user's router");
};

exports.registerUser = async (req, res, next) => {
	const body = req.body;

	console.log(body);

	try {
		const userData = await validator.validateSignup(body);

		const user = await userService.register(userData);
		res.status(201).json({ msg: "User registered successfully", data: user });
	} catch (error) {
		next(error);
	}
};

exports.loginUser = async (req, res, next) => {
	try {
		const body = req.body;

		const userData = await validator.validateLogin(body);
		const user = await userService.login(userData);
		res.json({
			status: 200,
			data: user,
			message: "User logged in successfully",
		});
	} catch (error) {
		next(error);
	}
};

exports.getUser = async (req, res, next) => {
	try {
		console.log(req.user);
		const user = await userService.getUser(req.user.id);
		console.log(user);
		res.json({
			status: 200,
			// data: { ...user },
			data: user,
			message: "User details fetched successfully",
		});
	} catch (error) {
		next(error);
	}
};

// {
//    "name": "Chucks Daniel",
//    "username": "chucks",
//    "email": "iamdanielchukwuma@gmail.com",
//    "password": "123456"
// }
