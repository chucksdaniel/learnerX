const Joi = require("joi");

/** User validation section */
const validateUserSchema = Joi.object({
	name: Joi.string().min(10).max(100),
	username: Joi.string().alphanum().min(5).max(30).required(),
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
	userIdentifier: Joi.string().required(),
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

/** Product validation section */

const validateProductSchema = Joi.object({
	name: Joi.string().alphanum().min(5).max(30).required(),
	description: Joi.string().max(100).required(),
	category: Joi.string().max(30).required(),
	price: Joi.number().required(),
	quantity: Joi.string().required(),
	brand: Joi.string(),
});

const validateProduct = async (product) => {
	try {
		const value = await validateProductSchema.validateAsync(product);
		return value;
	} catch (error) {
		throw new Error(error.message || "Validation error");
	}
};

module.exports = {
	validateSignup,
	validateLogin,
	validateProduct,
};
