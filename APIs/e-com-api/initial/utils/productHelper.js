const ProductModel = require("../models/Product");

exports.create = async ({
	name,
	description,
	category,
	price,
	quantity,
	brand,
}) => {
	const newProduct = new ProductModel({
		// userId: req.user.id,
		name,
		description,
		category,
		price,
		quantity,
		brand,
	});
	const product = await newProduct.save();

	return product;
};

exports.getAllProducts = async () => {
	const products = await ProductModel.find();

	return products;
};

exports.getProduct = async (productId) => {
	const product = await ProductModel.findById(productId);
	console.log("Product " + product);
	return product;
};

exports.updateProduct = async (productId, productData) => {};
