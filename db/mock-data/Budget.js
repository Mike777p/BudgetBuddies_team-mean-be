
const mockBudgetData = [{
  user_id: 1,
  income_t_count: 2,
  expense_t_count: 4,
  balance: 100000,
  total_income: 12000,
  total_expenses: 2000,
  categorySpends: [{
    categoryId: 7,
    amount: 3,
  },{
    categoryId: 12,
    amount: 75,
  },{
    categoryId: 22,
    amount: 50,
  },{
    categoryId: 21,
    amount: 100,
  }],
  categoryIncome: [{
    categoryId: 1,
    amount: 2000,
  },{
    categoryId: 28,
    amount: 2000,
  }],
}];

module.exports = mockBudgetData;

