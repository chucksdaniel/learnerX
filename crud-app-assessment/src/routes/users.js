const router = require("express").Router();

const auth = require("../middleware/auth");

const {
	getAllUser,
	getUserData,
	editUser,
	deleteUser,
} = require("../controller/userController");

router.route("/").get(getAllUser);
router.route("/:userId").get(getUserData).put(editUser).delete(deleteUser);

module.exports = router;
