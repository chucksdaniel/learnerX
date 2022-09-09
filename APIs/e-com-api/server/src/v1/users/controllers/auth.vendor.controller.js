const userHelper = require("../../utils/user.helper");
const validator = require("../../utils/validator");

const createError = require("../../utils/errors");

exports.registerVendor = async (req, res, next) => {
	const body = req.body;

	console.log(body);
	try {
		const userData = await validator.validateSignup(body);

		const usernameExit = await userHelper.findByUsername(
			userData.username.toLowerCase()
		);

		if (usernameExit) {
			next(createError(400, "A user with this username already exists"));
			return;
		}
		const emailExist = await userHelper.findByEmail(
			userData.email.toLowerCase()
		);
		if (emailExist) {
			next(createError(400, "A user with this eamil already exists"));
			return;
		}

		userData.password = await userHelper.hashPassword(userData.password);
		const newUser = await userHelper.createVendor(userData);

		return res.status(201).json({
			msg: "User registered successfully",
			user: newUser,
		});
	} catch (error) {
		next(error);
	}
};

exports.login = async (req, res, next) => {
	const credentials = req.body;
	try {
		const validData = await validator.validateLogin(credentials);

		const userExist = await userHelper.findByEmailOrUsername(
			validData.userIdentifier
		);

		if (!userExist) {
			next(createError(400, "User not found"));
		}
		const passwordIsValid = await userHelper.compareHash(
			validData.password,
			userExist.password
		);

		if (!passwordIsValid) {
			next(createError(404, "Incorrect password"));
		}

		const payload = {
			user: {
				id: userExist.id,
				role: userExist.role,
			},
		};
	} catch (error) {
		next(error);
	}
};

exports.getVendorUser = async (req, res, next) => {
	res.send("Vendors logged in endpoint");
};
