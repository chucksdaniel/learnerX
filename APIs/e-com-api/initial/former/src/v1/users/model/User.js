const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
	{
		name: String,
		username: String,
		email: String,
		password: String,
		role: {
			type: String,
			default: "customer",
			enum: ["customer", "vendor", "admin"],
		},
		// isAdmin: {
		// 	type: Boolean,
		// 	default: false,
		// },
	},
	{ timestamps: true }
);

const User = mongoose.model("user", UserSchema);
module.exports = User;
