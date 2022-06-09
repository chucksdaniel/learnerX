const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const config = require("../config/keys");

const User = require("../models/User");

const router = express.Router();

router.get("/", (req, res) => {
	res.send("User's route");
});

router.post(
	"/",
	[
		check("name", "Name is required").not().isEmpty(),
		check("email", "Please enter a valid email address").isEmail(),
		check(
			"password",
			"Please enter a password with at least 6 charater"
		).isLength({ min: 6 }),
	],
	async (req, res) => {
		const errors = validationResult(req);
		console.log(req.body);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, email, password } = req.body;

		try {
			let user = await User.findOne({ email });

			if (user) {
				return res
					.status(400)
					.json({ errors: [{ msg: "User already exists" }] });
			}

			user = new User({
				name,
				email,
				password,
			});

			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);

			user.save();

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
					res.json({ token });
				}
			);
		} catch (error) {
			console.error(error);
			res.status(500).send("Server error");
		}
	}
);

module.exports = router;
