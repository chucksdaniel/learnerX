const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
	res.send("Welcome to Order endpoint");
});

router.post("/", (req, res, next) => {
	res.send("Welcome to place order endpoint");
});

router.put("/:orderId", (req, res, next) => {
	res.send("Welcome to update order endpoint");
});

router.delete("/:orderId", (req, res, next) => {
	res.send("Welcome to delete order endpoint");
});

module.exports = router;
