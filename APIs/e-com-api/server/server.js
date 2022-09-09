const express = require("express");

const indexRouter = require("./src/v1/index.router");
const connectDB = require("./database/db");

connectDB();

const app = express();

app.use(express.json({ extended: false }));

app.use("/api/v1/", indexRouter);

/** Error handling Middleware */
app.use((req, res, next) => {
	const error = new Error();
	error.name = "Not Found";
	error.status = 404;
	error.message = "Route not found, Please try a valid endpoint";
	next(error);
});

// Instantiate the error handler class
app.use((err, req, res, next) => {
	res.json({
		status: err.status || 500,
		message: err.message,
		stack: err.stack,
	});
});

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
