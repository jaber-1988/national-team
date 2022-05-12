import express from "express"
import cors from "cors"
import "dotenv/config"
import mongoose from "mongoose"


const app = express()
app.use(cors());
const playersSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    club:String,
    position:String,
    yearBirth:Number,
})
const Player=mongoose.model("player",playersSchema,"players")
const port = process.env.PORT
app.use("/players",async (req, res) => {
    try{
        const players=await Player.find().exec()
        res.json(players)
    }catch{
  console.log(err);
  res.status(500).json({error:err.message})
    }
   
})

mongoose.connect(process.env.MONGOOSE_CONNECTION).then(()=>{
    app.listen(port, () => {
    console.log(`nationalteam API is listening on ${port}`);
})
})
