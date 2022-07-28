const Joi = require("joi");

/** User validation section */
const validateUserSchema = Joi.object({
	name: Joi.string().min(10).max(100),
	password: Joi.string().required(),
	email: Joi.string()
		.email({
			minDomainSegments: 2,
			tlds: { allow: ["com", "net"] },
		})
		.required(),
});

const validateSignup = async (user) => {
	try {
		const value = await validateUserSchema.validateAsync(user);
		return value;
	} catch (error) {
		throw new Error(error.message || "Validation error");
	}
};

const validateLoginSchema = Joi.object({
	email: Joi.string().required(),
	password: Joi.string().required(),
});

const validateLogin = async (user) => {
	try {
		const value = await validateLoginSchema.validateAsync(user);
		return value;
	} catch (error) {
		throw new Error(error.message || "Validation error");
	}
};

module.exports = {
	validateSignup,
	validateLogin,
};
