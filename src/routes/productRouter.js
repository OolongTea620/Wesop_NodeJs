const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");
const errorHandler = require("../middlewares/errorHandler");

router.post("/test", errorHandler(productController.testCreate));
router.post("/admin/add", errorHandler(productController.productCreate));
module.exports = router;
