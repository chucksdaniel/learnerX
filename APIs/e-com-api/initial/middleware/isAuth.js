const userHelper = require("../utils/userHelper");

/** Get a token from the headers
 * Decode the token and return the user data
 */

const auth = (req, res, next) => {
	const token = req.header("x-auth-token");

	if (!token) {
		return res.status(401).json({ msg: "No token, authorization denied!" });
	}
	try {
		const decoded = userHelper.validateToken(token);
		req.user = decoded.user;
		next();
	} catch (error) {
		res.status(401).json({ msg: "Token is not valid" });
	}
};

const isAuthorized = (req, res, next) => {
	auth(req, res, () => {
		if (req.user.id === req.params.id || req.user.role === "sellers") {
			next();
		} else {
			res.status(403).json({
				msg: "You are not authorized to perform this action",
			});
		}
	});
};

module.exports = {
	auth,
	isAuthorized,
};
