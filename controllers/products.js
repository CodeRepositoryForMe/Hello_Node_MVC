exports.exeAddProduct = (req, res, next) => {
    console.log("This is product page!!!");
    //res.send('<form method="POST", action="./product"><input type="Text" name="Title"><button type="Submit">Add product</button></form>');
    //res.sendFile(path.join(rootPath,'views','addproduct.html')); // This is HTML file
    res.render("addproduct", {
      pageTitle: "Add Product",
      pageName: "product",
      addproduct: true,
    });
  };
