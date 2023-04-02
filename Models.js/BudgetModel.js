const Budget = require("../db/seeds/seedModels.js/SeedBudgetModel");

const insertBudget = async (
  user_id,
  income_t_count,
  expense_t_count,
  balance,
  total_income,
  total_expenses
) => {
  try {
    const postedIncome = await Budget.create({
      user_id: user_id,
      income_t_count: income_t_count,
      expense_t_count: expense_t_count,
      balance: balance,
      total_income: total_income,
      total_expenses: total_expenses,
    });
    return postedIncome;
  } catch (error) {
    throw new Error(`Error checking for inserting new user: ${error.message}`);
  }
};

module.exports = {
  insertBudget,
};
