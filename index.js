// const express = require("express");
// import krne ka ye tarika thk hai , this is called common.js import
import express from "express";
// ye tarika module js ka hota hai ye kaam krta hai asynchronously for this type of impprt , we have mention type in package.json,
// require('dotenv').config()

const app = express();

app.get("/",(req,res)=>{
    res.send("server is ready");
})

app.get("/signup",(req,res)=>{
    res.send("signup here to access your account")
})

const port  = 4000;

app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`)
})