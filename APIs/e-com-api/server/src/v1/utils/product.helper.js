const ProductModel = require("../products/model/Product");

exports.creat = async (data) => {
	// console.log(data);
	// const newProduct = new ProductModel({
	// 	name: data.name,
	// 	description: data.description,
	// 	category: data.category,
	// 	price: data.price,
	// 	quantity: data.quantity,
	// 	brand: data.brand,
	// });

	const newProduct = new ProductModel(data);

	const product = await newProduct.save();
	return product;
};

exports.getProduct = async (productId) => {
	const product = await ProductModel.findById(productId).select("-__v");
	return product;
};

exports.getAllProduct = async () => {
	const products = await ProductModel.find();
	return products;
};

exports.updateProduct = async (productId) => {};

exports.deleteProduct = async (productId) => {
	return await ProductModel.findByIdAndRemove(productId);
};
