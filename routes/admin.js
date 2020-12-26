const path = require("path");

const express = require("express");

const router = express.Router();

// Utility
const rootPath = require("../util/path");

// Conttrollers
const productController = require("../controllers/products");

const products = [];

router.post("/product", (req, res, next) => {
  console.log("Product Added !!!");
  console.log(req.body);
  //res.redirect("/catelog");
  products.push({
    title: req.body.Title,
    cost: req.body.Cost,
    description: req.body.Description,
    url: req.body.ProductLink,
  });
  console.log("From Add Product " + products);
  //res.sendFile(path.join(rootPath,'views','catelog.html'));  // This is HTML file
  //https://elcopcbonline.com/photos/product/4/176/4.jpg
  res.redirect("/catelog");
});

router.get("/product", productController.exeAddProduct);

//module.exports = router;
exports.routes = router;
exports.products = products;
