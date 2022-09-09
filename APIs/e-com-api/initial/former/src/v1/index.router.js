const express = require("express");
const router = express.Router();

const authRouter = require("./users/routes/auth.route");
const authVendorRoute = require("./users/routes/auth.vendor");
const usersRouter = require("./users/routes/user.route");
const productRoute = require("./products/routes/product.route");
const cartRouter = require("./cart/routes/cart.router");
const orderRouter = require("./orders/routes/order.route");

router.use("/auth", authRouter);
router.use("/auth/vendor", authVendorRoute);
router.use("/users", usersRouter);
router.use("/products", productRoute);
router.use("/cart", cartRouter);
router.use("/order", orderRouter);

router.get("/", async (req, res, next) => {
	res.send(`V1`);
});

module.exports = router;
