const express = require("express");

const app = express();

const apiRoutes = require("./src/routes");

const PORT = process.env.PORT || 5000;

app.use(express.json({ extended: true }));

app.use("/api", apiRoutes);

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

app.listen(PORT, () => {
	console.log(`CRUD App running on port ${PORT}`);
});
