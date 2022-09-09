const helper = require("../../utils/product.helper");
const validator = require("../../utils/validator");
const createError = require("../../utils/errors");

exports.create = async (req, res, next) => {
	const body = req.body;
	console.log("Request user ");
	console.log(req.user);

	try {
		const validateData = await validator.validateProduct(body);

		const data = {
			owner: req.user.id,
			...validateData,
		};

		const product = await helper.creat(data);
		res.status(201).json({
			status: 201,
			data: product,
			msg: "Product created successfully",
		});
	} catch (error) {
		next(error);
	}
};

exports.getProduct = async (req, res, next) => {
	const { productId } = req.params;

	try {
		if (!productId) {
			return next(createError(400, "Product ID is needed"));
		}
		const product = await helper.getProduct(productId);

		if (!product) {
			next(createError(404, "Product not found"));
			return;
		}

		return res.json({
			data: product,
			msg: "Product was fetched successfully",
		});
	} catch (error) {
		next(error);
	}
};

exports.getAllProducts = async (req, res, next) => {
	try {
		const products = await helper.getAllProduct();
		res.json({ data: products, msg: "Products fetched successfully" });
	} catch (error) {
		next(error);
	}
};

exports.updateProduct = async (req, res, next) => {
	const { productId } = req.params;
	const body = req.body;
	try {
		const updatedProduct = await helper.updateProduct(body);

		res.status(201).json({
			data: updatedProduct,
			msg: "Product updated successfully",
		});
	} catch (error) {
		next(error);
	}
};

exports.deleteProduct = async (req, res, next) => {
	const { productId } = req.params;
	try {
		await helper.deleteProduct(productId);
		res.status(200).json({ msg: "Products has been deleted" });
	} catch (error) {
		next(error);
	}
};
