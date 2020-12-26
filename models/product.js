const fs = require("fs");
const path = require("path");

//const products = [];

module.exports = class product {
  // constructor(productTitle){
  //     this.title = productTitle;
  // }

  constructor(productTitle, ProductCost, ProductDesc, ProductURL) {
    this.title = productTitle;
    this.cost = ProductCost;
    this.description = ProductDesc;
    this.url = ProductURL;
  }

  save() {
    console.log("Path ---- ");
    console.log(require.main.filename);
    const filePath = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );
    fs.readFile(filePath, (err, fileContent) => {
      let products = [];
      if (!err) {
        if (fileContent) {
          products = JSON.parse(fileContent);
        }
        products.push(this);
        fs.writeFile(filePath, JSON.stringify(products), (err) => {
          console.log(err);
        });
      } else {
        console.log(err);
      }
    });
  }

  static getAllProducts(callback) {
    const filePath = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );
    fs.readFile(filePath, (err, fileContent) => {
      console.log("Reading file ***");
      if (err) {
        callback([]);
      }
      //console.log(JSON.parse(fileContent));
      let products = [];
      if (fileContent) {
        products = JSON.parse(fileContent);
      }
      callback(products);
    });
  }
};
