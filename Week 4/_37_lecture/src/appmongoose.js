const mongoose=require("mongoose")
const connect=mongoose.connect;

const MONGO_URL="mongodb+srv://prince1291:dlSpQdtxOFE5PrgU@cluster0.yjue12e.mongodb.net"

const DB_NAME="sample_mflix"

async function connectDb(){
  try{
    await connect(`${MONGO_URL}/${DB_NAME}`)
    console.log("mongodb connected")
  }
  catch(err){
    console.log(err)
  }
}

connectDb();