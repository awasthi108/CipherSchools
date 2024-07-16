const express=require("express")

const app=express();

app.get("/",(req,res)=>{
  res.send("This is created by express")
})

app.get("/add",(req,res)=>{
  let {a,b}=req.query;
  let sum=parseInt(a)+parseInt(b);
  res.send(sum);
})

app.listen(5000,()=>{
  console.log("Server is runing")
})