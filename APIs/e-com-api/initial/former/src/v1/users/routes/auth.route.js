const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");
const { auth } = require("../../middleware/auth");

/**
 *  @route      POST api/v1/users/signup
 *  @desc       Signup a user to the app
 *  @access     Public
 */
router.post("/signup", authController.registerUser);

/**
 *  @route      POST api/v1/users/login
 *  @desc       Auth user and get token
 *  @access     Public
 */
router.post("/login", authController.loginUser);

/**
 *  @route      GET api/v1/users/login
 *  @desc       Get logged in user
 *  @access     Private
 */
router.get("/login", auth, authController.getUser);

module.exports = router;
