exports.transaction = async (req, res, next) => {
	try {
		const { account_number, type, amount } = req.body;
		if (!account_number) {
		}
		if (amount < 0) {
			next(createError(404, "Invalid amount!"));
			return;
		}
		const account = await db("account").first("*").where({ account_number });
		if (!account) {
			next(createError(400, "Invalid account number"));
			return;
		}
		console.log("Account Details", account);
		switch (type) {
			case "withdraw":
			case "W":
				if (account.balance < amount) {
					next(createError(404, "Insufficient fund"));
				}
				db("account")
					.where({ id: 1 })
					.update({ account_number: (account.balance -= value) });
				break;

			case "deposit":
			case "D":
				account.balance += amount;
				break;
		}
	} catch (error) {
		next(error);
	}
};

router.put("/:id", async (req, res) => {
	const { id } = req.params;
	const changes = req.body;

	try {
		const count = await db("posts").where({ id }).update(changes);
		if (count) {
			res.status(200).json({ updated: count });
		} else {
			res.status(404).json({ message: "Record not found" });
		}
	} catch (err) {
		res.status(500).json({ message: "Error updating new post", error: err });
	}
});
