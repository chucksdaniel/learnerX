const helper = require("../utils/helper");
const createError = require("../utils/errorHandler");

/**
 *  Get a token from the headers
 *  Decode the token and return the user data
 */

const getToken = (req) => {
	const authToken = req.headers.authorization || req.headers.Authorization;
	if (!authToken) {
		// throw new Error("No Token, authorization denied!");
		throw createError(401, "No Token, authorization denied!");
	}
	const token = authToken.split(" ")[1];
	return token;
};

const auth = (req, res, next) => {
	const token = getToken(req);
	try {
		const decoded = helper.validateToken(token);
		req.user = decoded.user;
		next();
	} catch (error) {
		res.status(401).json({ msg: "Token is not valid" });
	}
};

module.exports = {
	auth,
};
