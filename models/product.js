const products = [];

module.exports = class product {
    
    // constructor(productTitle){
    //     this.title = productTitle;        
    // }

    constructor(productTitle, ProductCost, ProductDesc, ProductURL){
        this.title = productTitle;
        this.cost = ProductCost;
        this.description = ProductDesc;
        this.url = ProductURL;
    }

    save(){
        products.push(this);
    }

    static getAllProducts(){
        return products;
    }
}