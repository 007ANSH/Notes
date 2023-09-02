const express=require("express");
const app=express();
const path=require("path");
const port =3000;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));// this would let you run your sever from any directory
app.get("/",(req,res)=>{
    // res.send("This is our home dir");// this send function can only send strings but not files.
    res.render("home.ejs");// by default render function would look for view directory and we dont have to require ejs because express comes with ejs internally we just have to install it

})
app.listen(port,(req,res)=>{
    console.log("server is running");
})