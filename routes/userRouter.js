const express = require("express");

const userRoute = express.Router();

const users = [];

userRoute.post("/login",(req,res)=>{
  users.push(req.body)
  res.send(users)
})


module.exports = userRoute;