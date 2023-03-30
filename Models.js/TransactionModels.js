const User = require("../db/seeds/models.js/Users");

const fetchIndividualTransactions = async (id) => {
  try {
    const UserTransactions = await User.find({
      "user_data.user_id": id,
    }).select("transactions");
    return UserTransactions;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const fetchSingleTransaction = async (user_id, transaction_id) => {
  try {
    const UserTransaction = await User.findOne(
      { "user_data.user_id": user_id },
      { transactions: { $elemMatch: { _id: transaction_id } } }
    );
    return UserTransaction;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = { fetchIndividualTransactions, fetchSingleTransaction };
