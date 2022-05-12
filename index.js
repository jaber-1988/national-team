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
app.use("/players", (req, res) => {
    try{
        
    }caches{}
    return res.json({ msg: "hello" });
})

mongoose.connect(process.env.MONGOOSE_CONNECTION).then(()=>{
    app.listen(port, () => {
    console.log(`nationalteam API is listening on ${port}`);
})
})
