const express = require("express");
const connectDB = require("./config/db");

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

/** Use middleware to connect to the routes */
app.use(express.json({ extended: false }));
app.use("/api/users", require("./route/users"));
app.use("/api/car", require("./route/cars"));
app.use("/api/auth", require("./route/auth"));

app.get("/", (req, res) => {
	res.send("e-Car Application is up and running");
});

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
