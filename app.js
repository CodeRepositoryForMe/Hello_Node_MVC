const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const userRouter = require("./routes/user");
const defaultRoute = require("./routes/default");

const app = express();

// For ejs
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/',(req, res, next) => {
    console.log("This always Executes !!!");
    console.log(req.body);
    next();
});

app.use(adminRouter.routes);
app.use(shopRouter);
app.use('/user/',userRouter);
app.use(defaultRoute);

app.use((req,res,next)=>{
    //res.status(404).send("<h1>Page Not Found!!!!</h1>")
    //res.status(404).sendFile(path.join(__dirname,'views','pageNotFound.html')); // This is HTML page 
    res.status(404).render("pageNotFound",{pageName:'404',pageTitle:'Page Not Found'});
});



const server = http.createServer(app);

server.listen(3000, function(){
    console.log("Server started !!!");
});