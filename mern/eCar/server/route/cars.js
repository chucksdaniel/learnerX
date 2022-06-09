const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");

const Car = require("../models/Car");

/**
 * @route     POST api/get
 * @desc      Create a Product (car)
 * @access    Private
 */
router.post(
	"/",
	[
		auth,
		[
			check("name", "Name of the Car is required").not().isEmpty(),
			check("model", "The Model of the car is required").not().isEmpty(),
			check("year", "The year of the car is required").not().isEmpty(),
			check("price", "The price of the car is required").not().isEmpty(),
			check("quantity", "The number of car avaliable is required")
				.not()
				.isEmpty(),
		],
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, model, year, price, quantity } = req.body;

		try {
			const newCar = new Car({
				userId: req.user.id,
				name,
				model,
				year,
				price,
				quantity,
			});

			const car = await newCar.save();
			res.json({ car });
		} catch (error) {
			console.error(error.message);
			res.status(500).send("Server error");
		}
	}
);
router.get("/", (req, res) => {
	console.log("Product route");
});

module.exports = router;
