const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
	{
		owner: {
			type: Schema.Types.ObjectId,
			ref: "user",
		},
		// userId: {
		// 	type: Schema.Types.ObjectId,
		// 	required: true,
		// },
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
			default: 0,
		},
		quantity: {
			type: String,
			required: true,
		},
		brand: {
			type: String,
		},
		// created: {
		// 	type: Date,
		// 	default: Date.now(),
		// },
		// updated: {
		// 	type: Date,
		// 	default: Date.now(),
		// },
	},
	{ timestamps: true }
);

const Product = mongoose.model("products", ProductSchema);

module.exports = Product;
