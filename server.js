const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./connect.js');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(express.json());
app.use(cors());
dotenv.config();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

const {
  getUserTransactions,
  getSingleTransaction,
  postUserTransaction,
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
  getUserGoals,
  getUserGoalById,
  postUserGoal,
} = require('./Controllers/GoalController.js');

const {
  getUsers,
  getUserBalance,
  getUserById,
  getUserGroups,
  getUserBudget,
  getUserExpenses,
  postNewUser,
} = require('./Controllers/UserControllers.js');

const { postNewUserBudget } = require('./Controllers/BudgetControllers.js');

// This route can be changed / used
app.get('/', (req, res) => {
  res.send('Welcome to Budget Buddies');
});

app.post('/users', postNewUser);
app.post('/users/:user_id/budget', postNewUserBudget);
app.get('/users', getUsers);
app.get('/users/:user_id', getUserById);

app.get('/users/:user_id/balance', getUserBalance);
app.get('/users/:user_id/groups', getUserGroups);
app.get('/users/:user_id/budget', getUserBudget);

app.get('/users/:user_id/transactions', getUserTransactions);
app.get('/users/:user_id/transactions/:transaction_id', getSingleTransaction);
app.post('/users/:user_id/transaction', postUserTransaction);

app.get('/users/:user_id/goals', getUserGoals);
app.get('/users/:user_id/goal/:goal_id', getUserGoalById);
app.get('/users/:user_id/goal/:goal_id', getUserGoalById);
app.post('/users/:user_id/goal', postUserGoal);

app.get('/users/:user_id/expenses', getUserExpenses);
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
