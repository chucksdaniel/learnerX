const router = require("express").Router();

const accountRoute = require("./account");
const transactionRoute = require("./transaction");

router.use("/account", accountRoute);
router.use("/transaction", transactionRoute);

router.get("/", (req, res) => {
	res.send("Welcome to account-api!");
});

module.exports = router;
