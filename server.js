const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./connect.js");

app.use(express.json());

dotenv.config();

const getUsers = require("./Controllers/UserControllers.js");
const {
  getIndividualTransactions,
  getSingleTransaction,
} = require("./Controllers/TransactionController");

// This route can be changed / used
app.get("/", (req, res) => {
  res.send("Welcome to Budget Buddies");
});

app.get("/users", getUsers);
app.get("/users/:user_id/transactions", getIndividualTransactions);
app.get("/users/:user_id/transactions/:transaction_id", getSingleTransaction);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
