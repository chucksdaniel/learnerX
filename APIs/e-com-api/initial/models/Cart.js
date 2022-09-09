const { string } = require("joi");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CartSchema = new Schema(
	{
		owner: {
			type: Schema.Types.ObjectId,
			ref: "user",
		},
		items: [
			{
				itemId: {
					type: Schema.Types.ObjectId,
					ref: "product",
				},
				name: String,
				quantity: {
					type: Number,
					min: 1,
					default: 0,
				},
				price: Number,
			},
		],
		bill: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: true }
);
