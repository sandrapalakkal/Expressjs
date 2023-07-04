const express = require("express");

const router= express.Router();

router.get("/",(req,res)=>{
  res.send("Ok");
});

router.post("/",(req,res)=>{
    console.log("Successful");
});

module.exports=router;