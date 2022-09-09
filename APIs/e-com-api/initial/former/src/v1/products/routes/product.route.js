const express = require("express");
const router = express.Router();

const { auth } = require("../../middleware/auth");
const productController = require("../controllers/product.controller");

/**
 *  @route     GET /api/v1/products/
 *  @desc      Get all the product
 *  @access    Private
 */
router.get("/", productController.getAllProducts);

/**
 *  @route     GET /api/v1/products/:productId
 *  @desc      Get a particular product
 *  @access    Private
 */
router.get("/:productId", auth, productController.getProduct);

/**
 *  @route     POST /api/v1/products
 *  @desc      Create a new product
 *  @access    Private (Sellers only)
 */
router.post("/", auth, productController.create);

/**
 *  @route     PUT /api/v1/products/:productId
 *  @desc      Update and edit a product
 *  @access    Private (Sellers)
 */
router.put("/:productId", productController.updateProduct);

/**
 *  @route     DELETE /api/v1/products/:productId
 *  @desc      Delete a particular product
 *  @access    Private (sellers)
 */
router.delete("/:productId", productController.deleteProduct);

module.exports = router;
