const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://MEAN:Bb123456..@budgetbuddies.t7ojtka.mongodb.net/budget-buddies?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = connectDB;

