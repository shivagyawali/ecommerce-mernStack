const Product = require("../models/Product");

exports.create = async (req, res) => {
  console.log("req.body:", req.body);
  console.log("req.file:", req.file);
  console.log("req.user", req.user);

  const { filename } = req.file;
  const {
    productName,
    productDesc,
    productCategory,
    productPrice,
    productQty,
  } = req.body;

  try {
    let product = new Product();
    product.fileName = filename;
    product.productName = productName;
    product.productPrice = productPrice;
    product.productDesc = productDesc;
    product.productCategory = productCategory;
    product.productQty = productQty;
    await product.save();
    res.status(200).json({
      successMessage: "Product Created",
    });
  } catch (error) {
    console.log("Product creation error", error);
    res.status(500).json({
      errorMessage: "Please try again later",
    });
  }

  setTimeout(() => {
    res.json({
      successMessage: ` was created`,
    });
  }, 2000);
};
