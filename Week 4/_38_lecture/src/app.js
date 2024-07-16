require("./appmongoose")

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

app.post("/add-task", async (req, res) => {
  try {
    const task = new task({
      title: req.body.title,
      description: req.body.description
    })
    await task.save()
    return res.status(200).send({
      message: "saved"
    })
  } catch (error) {
    return res.status(500).send({
      message: "Failed to save task"
    })
  }
})

app.listen(5000,()=>{
  console.log("Server is runing")
})