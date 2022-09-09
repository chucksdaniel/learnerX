// const bcrypt = require("bcryptjs");
// const Joi = require("joi");

// const hashPassword = async (password) => {
// 	const salt = await bcrypt.genSalt(10);

// 	const hash = await bcrypt.hash(password, salt);
// 	return hash;
// };

// const compareHash = async (password, hash) => {
// 	return await bcrypt.compare(password, hash);
// };

// const validateUserSchema = Joi.object({
// 	username: Joi.string().alphanum().min(5).max(30).required(),
// 	password: Joi.string().required(),
// 	email: Joi.string()
// 		.email({
// 			minDomainSegments: 2,
// 			tlds: { allow: ["com", "net"] },
// 		})
// 		.required(),
// });

// const validateSignup = async (user) => {
// 	try {
// 		const value = await validateUserSchema.validateAsync(user);
// 		return value;
// 	} catch (error) {
// 		throw new Error(error.message || "Validation error");
// 	}
// };

// const validateLoginSchema = Joi.object({
// 	userIdentifier: Joi.string().required(),
// 	password: Joi.string().required(),
// });

// const validateLogin = async (user) => {
// 	try {
// 		const value = await validateLoginSchema.validateAsync(user);
// 		return value;
// 	} catch (error) {
// 		throw new Error(error.message || "Validation error");
// 	}
// };

// module.exports = {
// 	hashPassword,
// 	compareHash,
// 	validateSignup,
// 	validateLogin,
// };
