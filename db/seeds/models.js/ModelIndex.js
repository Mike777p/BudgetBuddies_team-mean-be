const Budget = require('./BudgetModel.js');
const Currency = require('./CurrenciesModel.js');
const ExpenseCategories = require('./ExpenseCategoriesModel.js');
const IncomeCategory = require('./IncomeCategoriesModel.js');
const {User} = require('./Users.js');

module.exports = {
  Budget,
  Currency,
  ExpenseCategories,
  IncomeCategory,
  User,
};
