const express = require("express");
const router = express.Router();

const authVendorController = require("../controllers/auth.vendor.controller");
/**
 *  @route      POST api/v1/users/vendor/signup
 *  @desc       Signup a vendor to the app
 *  @access     Public
 */
router.post("/signup", authVendorController.registerVendor);

/**
 *  @route      POST api/v1/users/vendor/login
 *  @desc       Login a vendor to the app
 *  @access     Public
 */
router.post("/login", authVendorController.login);

/**
 *  @route      GET api/v1/users/vendor/login
 *  @desc       Get a vendor user data
 *  @access     Private
 */
router.get("/login", authVendorController.getVendorUser);

module.exports = router;
