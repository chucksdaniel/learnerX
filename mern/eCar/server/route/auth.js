const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { check, validationResult } = require("express-validator");
const config = require("../config/keys");
const auth = require("../middleware/auth");

const User = require("../models/User");

/**
 * @route     GET api/get
 * @desc      Get logged in user
 * @access    Private
 */
router.get("/", auth, async (req, res) => {
	// console.log("Logged in");
	try {
		const user = await User.findById(req.user.id).select("-password");
		console.log(req.user);
		console.log(user);
		res.json(user);
	} catch (error) {
		console.error(error.message);
		res.status(500).json("Server error");
	}
	// res.send("Auth route");
});

/**
 * @route      POST api/get
 * @desc       Auth user and get token
 * @access     Public
 */
router.post(
	"/",
	[
		check("email", "Please enter a valid mail").isEmail(),
		check("password", "Password is required").exists(),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { email, password } = req.body;

		try {
			let user = await User.findOne({ email });

			if (!user) {
				return res
					.status(400)
					.json({ errors: [{ msg: "Invalid email or password" }] });
			}
			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch) {
				return res
					.status(400)
					.json({ errors: [{ msg: "Invalid email or password" }] });
			}

			const payload = {
				user: {
					id: user.id,
				},
			};

			jwt.sign(
				payload,
				config.jwtSceret,
				{ expiresIn: 3600 * 24 },
				(err, token) => {
					if (err) throw err;
					res.json(token);
				}
			);
		} catch (error) {
			console.error(error.message);
			res.status(500).json("Server error");
		}
	}
);

module.exports = router;

/**
 * {
    "name": "Daniel Chukwuma",
    "email": "iamdanielchukwuma@gmail.com",
    "password": "Iamasssosjhs"
}
 */
