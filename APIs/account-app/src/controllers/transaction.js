const db = require("../../database/dbConnection");
const createError = require("../utils/errorhandler");

exports.depositFund = async (req, res, next) => {
	try {
		const { amount } = req.body;
		console.log("The user making request: ", req.user);
		if (!amount) {
			next(createError(404, "Please enter the amount you want to deposit!"));
			return;
		}
		if (amount < 0) {
			next(createError(404, "Invalid amount!"));
			return;
		}
		const account = await db("account").first("*").where({ id: req.user.id });
		if (!account) {
			next(createError(400, "Invalid account number"));
			return;
		}
		console.log("Account Details", account);

		const newAccount = await db("account")
			.where({ id: req.user.id })
			.update({ balance: (account.balance += amount) });

		return res.status(200).json({
			msg: "Your deposit was successful",
			balance: account.balance,
		});
	} catch (error) {
		next(error);
	}
};

exports.withdrawFund = async (req, res, next) => {
	try {
		console.log("The Person making the request", req.user);
		const { amount } = req.body;
		if (!amount) {
			next(
				createError(404, "Please enter the amount you want to withdraw!")
			);
			return;
		}
		if (amount < 0) {
			next(createError(404, "Invalid amount!"));
			return;
		}
		const account = await db("account").first("*").where({ id: req.user.id });
		if (!account) {
			next(createError(400, "Invalid account number"));
			return;
		}
		console.log("Account Details", account);

		const newAccount = await db("account")
			.where({ id: req.user.id })
			.update({ balance: (account.balance -= amount) });

		return res.status(200).json({
			msg: "Your withdrawal was successful",
			balance: account.balance,
			newAccount,
		});
	} catch (error) {
		next(error);
	}
};

exports.transferFund = async (req, res, next) => {
	try {
		const { target_account, amount } = req.body;
		console.log("The Person making the transfer request", req.user);
		if (!target_account) {
			next(createError(404, "Please enter the destination account number!"));
			return;
		}
		if (!amount) {
			next(createError(404, "Please enter the amount!"));
			return;
		}
		if (amount < 0) {
			next(createError(404, "Invalid amount!"));
			return;
		}

		// await db("account").select().where({account_number: target_account}).limit(1);

		const target = await db("account")
			.first("*")
			.where({ account_number: target_account });
		console.log("Receiver", target);
		if (!target) {
			next(createError(404, "Invalid account"));
			return;
		}
		const source_account = await db("account")
			.first("*")
			.where({ id: req.user.id });
		if (source_account.balance <= amount) {
			next(createError(404, "Insufficient fund!"));
			return;
		}

		const source_account_bal = await db("account")
			.where({ id: req.user.id })
			.update({ balance: (source_account.balance -= amount) });

		console.log("Source accout: ", source_account_bal);

		const target_account_bal = await db("account")
			.where({ account_number: target_account })
			.update({ balance: (target.balance += amount) });

		console.log("Receiver account: ", target_account_bal);
		return res.status(200).json({
			msg: `You have successfully transfered #${amount} to ${target.first_name} balance: #${source_account.balance}`,
		});
	} catch (error) {
		next(error);
	}
};
