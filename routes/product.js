const express = require("express");
const router = express.Router();

const productController = require("../controllers/product");
const { authenticatateJWT } = require("../middleware/authenticator");
const upload = require("../middleware/multer");

router.post(
  "/",
  authenticatateJWT,
  upload.single("productImage"),
  productController.create
);

module.exports = router;
