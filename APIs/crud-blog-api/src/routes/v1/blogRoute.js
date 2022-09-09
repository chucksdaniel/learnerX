const express = require("express");
const router = express.Router();

const blogController = require("../../controllers/blogController");

router.get("/", blogController.getAllBlog);

router.get("/:blogId", blogController.getBlog);

router.post("/", blogController.createNewBlog);

router.put("/:blogId", blogController.updateBlog);

router.delete("/blogId", blogController.deleteBlog);

module.exports = router;
