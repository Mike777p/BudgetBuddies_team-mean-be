const {
  User,
  Transaction,
} = require("../db/seeds/seedModels.js/SeedUsersModel");
const Budget = require("../db/seeds/seedModels.js/SeedBudgetModel");
const categoryById = require("../assets/CategorisedExpenses");
const monthNames = require("../assets/MonthsByIndex");

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
  // create a new transaction piece of data & insert values
  const transaction = new Transaction({
    userId,
    budgetId: transactionData.budgetId,
    categoryId: transactionData.categoryId,
    type: transactionData.type,
    description: transactionData.description,
    amount: transactionData.amount * 100,
    date: transactionData.date,
    currency_id: transactionData.currency_id,
  });

  const dateObject = new Date(transaction.date);
  const year = dateObject.getFullYear();
  const monthIndex = dateObject.getMonth();

  // update the users transactions array
  try {
    const user = await User.updateOne(
      { "user_data.user_id": userId },
      { $push: { transactions: transaction } },
      { new: true }
    );
    //  Incement Budget fields from trnasaction data
    const budget = await Budget.updateOne(
      { user_id: userId },
      {
        $inc: {
          balance:
            transaction.type === "income"
              ? transaction.amount
              : -transaction.amount,
          total_income: transaction.type === "income" ? transaction.amount : 0,
          total_expenses:
            transaction.type === "expense" ? transaction.amount : 0,
          income_t_count: transaction.type === "income" ? 1 : 0,
          expense_t_count: transaction.type === "expense" ? 1 : 0,
        },
        $push: {
          // update budgets categorySpends or categoryIncome array, depending on transaction type!
          [transaction.type === "income"
            ? `categoryIncome.${monthNames[monthIndex]}`
            : `categorySpends.${monthNames[monthIndex]}`]: {
            categoryId: transaction.categoryId,
            amount: transaction.amount,
            mainCategoryName: categoryById[transaction.categoryId].categoryName,
            icon: categoryById[transaction.categoryId].icon,
            year: year,
            month: monthNames[monthIndex],
            transactionId: transaction._id,
          },
        },
      },
      { new: true }
    );

    return { user, budget };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  fetchIndividualTransactions,
  fetchSingleTransaction,
  insertUserTransaction,
};
