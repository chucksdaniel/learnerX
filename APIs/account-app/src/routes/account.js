const router = require("express").Router();

const { accountLogin, createAccount } = require("../controllers/account");

router.route("/create").post(createAccount);
router.route("/login").post(accountLogin);

module.exports = router;
