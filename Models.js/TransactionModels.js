const {User, Transaction} = require("../db/seeds/models.js/Users");
const Budget = require("../db/seeds/models.js/BudgetModel");

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


const insertUserTransaction = async (userId, transactionData) => {

  // create new transaction
  const transaction = new Transaction({
    userId,
    budgetId: transactionData.budgetId,
    categoryId: transactionData.categoryId,
    type: transactionData.type,
    description: transactionData.description,
    amount: transactionData.amount,
    date: transactionData.date,
    currency_id: transactionData.currency_id
  });

  // update the users transactions array
  try {
    const user = await User.updateOne(
      { 'user_data.user_id': userId },
      { $push: { transactions: transaction } },
      { new: true }
    )
      // update budgets categorySpends or categoryIncome array, depending on transaction type!
  const budget = await Budget.updateOne(
    { user_id: userId },
    {
      $inc: {
        balance: transaction.type === 'income' ? transaction.amount : -transaction.amount,
        total_income: transaction.type === 'income' ? transaction.amount : 0,
        total_expenses: transaction.type === 'expense' ? transaction.amount : 0,
      },
      $push: {
        [transaction.type === 'income' ? 'categoryIncome' : 'categorySpends']: {
          categoryId: transaction.categoryId,
          amount: transaction.amount,
          transactionId: transaction._id
        }
      }
    },
    { new: true }
  );

    return {user, budget}
  } catch (error) {
    console.error(error);
    throw error;
  }

};


module.exports = { fetchIndividualTransactions, fetchSingleTransaction, insertUserTransaction };
