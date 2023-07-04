const express = require("express");
const app = express();
app.use(express.json());
//app.get("/",(req,res)=>{
 //   res.send("Ok");
//})
//app.post("/",(req,res)=>{
 //   res.send(req.body);
//})
const AuthRoute=require("./routes/auth.js")
app.use("/",AuthRoute);
app.listen(7000,()=>{
    console.log("Server running at port 7000");
})

