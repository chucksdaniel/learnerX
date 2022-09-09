const validator = require("../../utils/validator");
const userHelper = require("../../utils/user.helper");

const createError = require("../../utils/errors");
// const { use } = require("../routes/auth.route");

exports.registerUser = async (req, res, next) => {
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
		const newUser = await userHelper.create(userData);

		return res.status(201).json({
			msg: "User registered successfully",
			user: newUser,
		});
	} catch (error) {
		next(error);
	}
};

exports.loginUser = async (req, res, next) => {
	try {
		const credential = req.body;
		const validData = await validator.validateLogin(credential);

		const userExist = await userHelper.findByEmailOrUsername(
			validData.userIdentifier
		);

		if (!userExist) {
			next(createError(404, "User not found"));
		}

		const passwordIsValid = await userHelper.compareHash(
			validData.password,
			userExist.password
		);

		if (!passwordIsValid) {
			next(createError(404, "Incorrect password"));
		}

		// const payload = {
		//    id: userExist.id,
		//    eamil: userExist.email,
		//    username: userExist.username
		// }

		const payload = {
			user: {
				id: userExist.id,
				role: userExist.role,
			},
		};

		console.log(userExist);
		console.log(userExist.password);

		const token = userHelper.signToken(payload);

		res.status(200).json({ msg: "User logged in successfully", data: token });
	} catch (error) {
		next(createError(500, error));
	}
};

exports.getUser = async (req, res, next) => {
	console.log(req.user);
	try {
		const user = await userHelper.findById(req.user.id);
		res.json({
			status: 200,
			data: user,
			msg: "User details fetched successfully",
		});
	} catch (error) {
		next(error);
	}
};

/** Vendors special routes for signing up */
