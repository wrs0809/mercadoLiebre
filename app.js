const express = require("express");
const app = express();
const path = require("path");

app.get("/index",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/index.html"));
})

app.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/register.html"));
})

app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/login.html"));
})

app.use(express.static("public"));

app.listen (3500,()=>{console.log("servidor en ejecución puerto 3500")})