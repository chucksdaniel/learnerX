const router = require("express").Router();
const { auth } = require("../middleware/auth");

const {
	depositFund,
	withdrawFund,
	transferFund,
} = require("../controllers/transaction");

router.route("/withdraw").patch(auth, withdrawFund);
router.route("/transfer").patch(auth, transferFund);
router.route("/deposit").patch(auth, depositFund);

module.exports = router;
