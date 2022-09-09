const helper = require("../utils/user.helper");
const createError = require("../utils/errors");

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
	// const token = helper.getToken(req);
	const token = getToken(req);
	try {
		const decoded = helper.validateToken(token);
		req.user = decoded.user;
		next();
	} catch (error) {
		res.status(401).json({ msg: "Token is not valid" });
	}
};

/** Middleware for a user to view or edit his profile */
const isAuthorized = (req, res, next) => {
	auth(req, res, () => {
		if (req.user.id === req.params.id || req.user.role === "admin") {
			next();
		} else {
			res.status(403).json({
				msg: "You are not authorized to perform this action",
			});
		}
	});
};

/** Only vendor are authenticated on this middleware */
const isVendor = (req, res, next) => {
	auth(req, res, () => {
		if (req.user.id === req.params.id && req.user.role === "vendor") {
			next();
		} else {
			res.status(403).json({
				msg: "You are not allow to perform this action",
			});
		}
	});
};

//customer

const isAdmin = (req, res, next) => {
	auth(req, res, () => {
		if (req.user.role === "admin") {
			next();
		} else {
			res.status(403).json({
				msg: "Authorization denied!, contact the admin",
			});
		}
	});
};

module.exports = {
	auth,
	isAuthorized,
	isVendor,
	isAdmin,
};
