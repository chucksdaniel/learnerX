const db = require("../../database/dbConnection");
const validator = require("../utils/validator");
const createError = require("../utils/errorhandler");
const helper = require("../utils/helper");

exports.createAccount = async (req, res, next) => {
	try {
		const body = req.body;
		const userData = await validator.validateSignup(body);

		const emailExist = await db("account")
			.first("*")
			.where({ email: userData.email });
		if (emailExist) {
			next(
				createError(400, "An account linked with this email already exists")
			);
			return;
		}

		const hashedPassword = await helper.hashPassword(userData.password);

		const account_number =
			Math.floor(Math.random() * 1000000000) + 1111111111;

		const [user] = await db("account")
			.insert({
				first_name: userData.first_name,
				last_name: userData.last_name,
				email: userData.email,
				password: hashedPassword,
				account_number: account_number,
			})
			.returning("*");

		return res.status(201).json({
			msg: "Account opened successfully",
			user: user,
		});
	} catch (error) {
		next(error);
	}
};

exports.accountLogin = async (req, res, next) => {
	try {
		const credential = req.body;
		const validData = await validator.validateLogin(credential);

		const user = await db("account")
			.first("*")
			.where({ email: validData.email });
		if (!user) {
			next(createError(404, "Wrong email and/or password"));
			return;
		}
		const passwordIsValid = await helper.compareHash(
			validData.password,
			user.password
		);

		if (!passwordIsValid) {
			next(createError(404, "Wrong email and/or password"));
			return;
		}

		const payload = {
			user: {
				id: user.id,
				first_name: user.name,
			},
		};

		const token = helper.signToken(payload);

		res.status(200).json({ msg: "User logged in successfully", data: token });
	} catch (error) {
		next(error);
	}
};
