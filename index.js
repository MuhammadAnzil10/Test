const express = require("express");
const app = express();
const userRoute = require("./routes/userRouter.js");
const port = 3002

app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
  res.send("Testing...")
})

app.use("/user",userRoute)

app.listen(port,()=>{
  console.log("server running");
})