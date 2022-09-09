const express = require("express");
const router = express.Router();

/**
 *  @route      POST api/v1/users/admin/signup
 *  @desc       Signup an admin to the app
 *  @access     Public
 */
router.post("/admin/signup", authController.registerAdmin);

/**
 *  @route      GET api/v1/users/admin/login
 *  @desc       login an admin to the app
 *  @access     Public
 */
router.post("/admin/login", authController.loginAdmin);

/**
 *  @route      GET api/v1/users/admin/login
 *  @desc       login an admin to the app
 *  @access     Public
 */
router.get("/admin/signup", authController.getAdmin);

module.exports = router;
