const jwt = require("jsonwebtoken");
const userHelper = require("../utils/userHelper");

/** Get a token from the headers
 * Decode the token and return the user data
 */

module.exports = function (req, res, next) {
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
