import express from "express";
const app = express();
import dotenv from "dotenv";
import connectDB from "./connect.js";



dotenv.config()

app.get("/", (req, res)=>{
    res.send("Welcome to Budget Buddies");
})

const port = process.env.PORT || 5000;

const start = async () => {
    try {
     await connectDB(process.env.MONGO_URL)
     app.listen(port, () => {
        console.log(`Server is listening on port ${port}...`);
      });
    } catch (error) {
        console.log(error)
    }
}

start()