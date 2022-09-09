const express = require("express");
const router = express.Router();

const usercontroller = require("../controllers/user.controller");
const { auth, isAuthorized, isAdmin } = require("../../middleware/auth");

/**
 *  @route      GET api/v1/users/
 *  @desc       Get all user to
 *  @access     Private (admin)
 */
router.get("/", isAdmin, usercontroller.getAllUser);

/**
 *  @route      GET api/v1/users/
 *  @desc       Get a particular user
 *  @access     Private (admin, owner)
 */
router.get("/:userId", isAuthorized, usercontroller.getUser);

/**
 *  @route      POST api/v1/users/signup
 *  @desc       Signup a user to the app
 *  @access     Private (admin)
 */
router.post("/", usercontroller.registerUser);

/**
 *  @route      PUT api/v1/users/:userId
 *  @desc       Auth user and get token
 *  @access     Public
 */
router.put("/:userId", usercontroller.updateUser);

/**
 *  @route      delete api/v1/users/:id
 *  @desc       Delete user end point
 *  @access     Private
 */
router.delete("/:userId", auth, usercontroller.deleteUser);

module.exports = router;
