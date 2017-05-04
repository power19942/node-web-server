const express = require("express");
const hbs = require("hbs");
var app = express();

hbs.registerPartials(__dirname+"/views/partials");
hbs.registerHelper("getCurrentYear",()=>{
   return new Date().getFullYear();
});
app.set("view engine","hbs");

app.use((req,res,next)=>{
    var now = new Date().toString();
    console.log(`${now}: ${req.method} / ${req.url}`);
    next();
});
app.use((req,res,next)=>{
   res.render("maintenance.hbs");
});
app.use(express.static(__dirname+'/public'));
app.get('/',(req,res)=>{
    res.send("hello");
});
app.get('/about',(req,res)=>{
    res.render("about.hbs",{
        pageTitle:"About Page"
    });
});

app.listen(5555,()=>{
    console.log("start");
});