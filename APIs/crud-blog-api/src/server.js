const express = require("express");

const app = express();

// Import files
const v1blogRoutes = require("./routes/v1/blogRoute");
const v1userRoutes = require("./routes/v1/userRoute");
const connectDB = require("./config/db");

connectDB();

const PORT = process.env.PORT || 5500;

app.use(express.json({ extended: false }));
app.use("/api/v1/blogs", v1blogRoutes);
// app.use("/api/v1/users", v1userRoutes);

/** Error Handling middleware */
app.use((err, req, res, next) => {
	const errStatus = err.status || 500;
	const errMessage = err.message || "Something went wrong";
	return res.status(errStatus).json({
		success: false,
		status: errStatus,
		message: errMessage,
		stack: err.stack,
	});
});

app.listen(PORT, () => {
	console.log(`Blog API is running on port ${PORT}`);
});
