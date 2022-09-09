function canGetProducts(user, product) {
	return user.role === "admin" || product.owner === user.id;
}

function scopedProduct(user, product) {
	if (user.role === "admin") return product;
	return project.filter((p) => p.owner === user.id);
}

function canUpdateProduct(user, product) {
	return product.owner === user.id;
}

function authProduct(req, res, next) {
	if (!canGetProducts(req.user, req.product)) {
		return res
			.status(403)
			.json({ msg: "Not authorized to perform this action" });
	}
	next();
}

module.exports = {
	authProduct,
};
