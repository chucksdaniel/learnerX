const express = require("express");
const router = express.Router();

const usercontroller = require("../../controllers/userController");
const auth = require("../../middleware/auth");

router.get("/", usercontroller.getAllUser);

/**
 *  @route      POST api/v1/users/signup
 *  @desc       Signup a user to the app
 *  @access     Public
 */
router.post("/signup", usercontroller.registerUser);

/**
 *  @route      POST api/v1/users/login
 *  @desc       Auth user and get token
 *  @access     Public
 */
router.post("/login", usercontroller.loginUser);

/**
 *  @route      GET api/v1/users/login
 *  @desc       Get logged in user
 *  @access     Private
 */
router.get("/login", auth, usercontroller.getUser);

module.exports = router;
