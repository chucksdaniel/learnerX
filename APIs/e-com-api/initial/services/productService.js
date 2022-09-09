const productHelper = require("../utils/productHelper");
const ProductModel = require("../models/Product");

exports.getAllProducts = async () => {
	const products = await productHelper.getAllProducts();
	return products;
};

exports.getProduct = async (productId) => {
	try {
		const product = await productHelper.getProduct(productId);

		if (!product) {
			throw new Error("Product not found");
		}
		return product;
	} catch (error) {
		throw error;
	}
};

exports.createProduct = async (productData) => {
	try {
		const product = await productHelper.create(productData);

		return product;
	} catch (error) {
		throw error;
	}
};

exports.updateProduct = async (productId, productData) => {
	try {
		const product = ProductModel.findById(productId);
		if (!product) throw new Error("Product not found");
		const updatedProduct = await ProductModel.findByIdAndUpdate(
			productId,
			{
				$set: {
					...productData,
				},
			},
			{ new: true }
		);

		return updatedProduct;
	} catch (error) {
		throw error;
	}
};

exports.deleteProduct = (productId) => {};
