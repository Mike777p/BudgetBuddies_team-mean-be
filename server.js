const express = require('express');
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./connect.js");


app.use(express.json());

dotenv.config()

const getUsers = require('./Controllers/UserControllers.js');

app.get("/users", getUsers);

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