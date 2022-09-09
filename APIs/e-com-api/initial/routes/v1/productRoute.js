const express = require("express");
const router = express.Router();

const auth = require("../../middleware/auth");
const productController = require("../../controllers/productContoller");

/**
 *  @route      GET api/v1/users/login
 *  @desc       Get logged in user
 *  @access     Private
 */
router.get("/", productController.getAllProducts);
/**
 *  @route      POST api/v1/products/
 *  @desc       Create a new product
 *  @access     Public
 */
router.get("/:productId", productController.getProduct);

/**
 *  @route      POST api/v1/products/
 *  @desc       Create a new product
 *  @access     Private
 */
router.post("/", auth, productController.createProduct);
/**
 *  @route      PUT api/v1/products/:productId
 *  @desc       Edit a particular product by product owner
 *  @access     Private
 */
router.put("/:productId", auth, productController.editProduct);
/**
 *  @route      DELETE api/v1/products/:productId
 *  @desc       Delete a particular product by product owner
 *  @access     Private
 */
router.delete("/:productId", auth, productController.deleteProduct);

module.exports = router;
