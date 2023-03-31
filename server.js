const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./connect.js');
const mongoose = require('mongoose');

app.use(express.json());

dotenv.config();

const {
  getIndividualTransactions,
  getSingleTransaction,
} = require('./Controllers/TransactionController');

const {
  getExpenseCategories,
  getExpenseCategoriesByName,
  getsubCategoriesByName,
} = require('./Controllers/ExpenseController');

const {
  getCurrencies,
  getCurrencyByName,
} = require('./Controllers/CurrencyController');

const {
  getIncomeCategories,
  getIncomeCategoryByName,
  postIncomeByUserId,
} = require('./Controllers/IncomeController');

const {
  getUsers,
  getUserBalance,
  getUserGoals,
  getUserById,
  getUserGroups,
  getUserBudget,
  getUserGoalById,
} = require('./Controllers/UserControllers.js');

// This route can be changed / used
app.get('/', (req, res) => {
  res.send('Welcome to Budget Buddies');
});

app.get('/users', getUsers);
app.get('/users/:user_id/transactions', getIndividualTransactions);
app.get('/users/:user_id/transactions/:transaction_id', getSingleTransaction);
app.get('/users/:user_id/balance', getUserBalance);
app.get('/users/:user_id/goals', getUserGoals);
app.get('/users/:user_id/groups', getUserGroups);
app.get('/user/:user_id/:goal_id', getUserGoalById);
app.get('/users/:user_id/budget', getUserBudget);

app.get('/users/:user_id', getUserById);
app.get('/expense_categories', getExpenseCategories);
app.get('/expense_categories/:category_name', getExpenseCategoriesByName);
app.get(
  '/expense_categories/:category_name/:subcategory',
  getsubCategoriesByName
);
app.get('/currencies', getCurrencies);
app.get('/currencies/:currency_name', getCurrencyByName);
app.get('/income_categories', getIncomeCategories);
app.get('/income_categories/:category_name/', getIncomeCategoryByName);

app.post('/users/:user_id/income', postIncomeByUserId);

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
