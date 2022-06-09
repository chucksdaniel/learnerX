const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	model: {
		type: String,
		required: true,
	},
	year: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	image: {
		type: String,
		default: "",
	},
	role: {
		type: String,
		default: "customer",
	},
	quantity: {
		type: String,
		required: true,
	},
	created: {
		type: Date,
		default: Date.now(),
	},
	updated: {
		type: Date,
		default: Date.now(),
	},
});

const Car = mongoose.model("car", CarSchema);
module.exports = Car;
