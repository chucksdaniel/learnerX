const userHelper = require("../utils/userHelper");
// const jwt = require("jsonwebtoken");

exports.register = async (user) => {
	console.log(user);
	console.log(user.username);

	try {
		const usernameExist = await userHelper.findByUsername(
			user.username.toLowerCase()
		);
		if (usernameExist) {
			throw new Error("A user with this username already exists");
		}

		const emailExist = await userHelper.findByEmail(user.email.toLowerCase());
		if (emailExist) {
			throw new Error("A user with this email already exists");
		}

		user.password = await userHelper.hashPassword(user.password);

		const newUser = await userHelper.create(user);

		return newUser;
	} catch (error) {
		throw error;
	}
};

exports.login = async (user) => {
	console.log(user);

	const userExist = await userHelper.findByEmailOrUsername(
		user.userIdentifier
	);

	if (!userExist) throw new Error("User not found");

	const passwordIsValid = await userHelper.compareHash(
		user.password,
		userExist.password
	);

	if (!passwordIsValid) throw new Error("Incorrect password");

	// const payload = {
	// 	id: userExist.id,
	// 	email: userExist.email,
	// 	username: userExist.username,
	// };

	const payload = {
		user: {
			id: userExist.id,
		},
	};

	console.log(userExist);
	console.log(userExist.password);

	const token = userHelper.signToken(payload);

	return {
		// ...payload,
		token,
	};
};

exports.getUser = async (id) => {
	console.log("userService parameter: " + id);
	return await userHelper.findById(id);
};
