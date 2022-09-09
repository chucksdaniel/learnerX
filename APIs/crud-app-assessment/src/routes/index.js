const router = require("express").Router();

const authRouter = require("./auth");
const userRouter = require("./users");

const { auth } = require("../middleware/auth");

router.get("/", (req, res) => {
	res.send(
		"CRUD application using Node.js, Express.js, and PostgreSQL Assesement"
	);
});

router.use("/auth", authRouter);
router.use("/users", auth, userRouter);

module.exports = router;
