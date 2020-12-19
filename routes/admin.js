const path = require('path');

const express = require('express');

const router = express.Router();

const rootPath = require('../util/path');

const products = []

router.post(('/product'),(req,res,next)=>{
    console.log("Product Added !!!");
    console.log(req.body);
    //res.redirect("/catelog");
    products.push({title: req.body.Title, cost: req.body.Cost, description: req.body.Description, url: req.body.ProductLink});
    console.log("From Add Product " + products);
    //res.sendFile(path.join(rootPath,'views','catelog.html'));  // This is HTML file 
    //https://elcopcbonline.com/photos/product/4/176/4.jpg
    res.redirect('/catelog');

});

router.get(('/product'), (req, res, next) => {
    console.log("This is product page!!!");
    //res.send('<form method="POST", action="./product"><input type="Text" name="Title"><button type="Submit">Add product</button></form>');
    //res.sendFile(path.join(rootPath,'views','addproduct.html')); // This is HTML file
    res.render('addproduct', {pageTitle: 'Add Product', pageName:'product', addproduct:true});
});


//module.exports = router;
exports.routes = router;
exports.products = products;