const Budget = require("./SeedBudgetModel.js");
const Currency = require("./SeedCurrenciesModel.js");
const ExpenseCategories = require("./SeedExpenseCategoriesModel.js");
const IncomeCategory = require("./SeedIncomeCategoriesModel.js");
const { User } = require("./SeedUsersModel.js");

module.exports = {
  Budget,
  Currency,
  ExpenseCategories,
  IncomeCategory,
  User,
};
