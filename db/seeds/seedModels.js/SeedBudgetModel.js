const mongoose = require('mongoose');

const CategorySpendsSchema = new mongoose.Schema({
  categoryId: { type: Number, required: true },
  amount: { type: Number, required: true },
  mainCategoryName: { type: String, required: true },
  icon: { type: String, required: true },
  year: { type: Number, required: true },
  month: { type: String, required: true },
});

const CategoryIncomeSchema = new mongoose.Schema({
  categoryId: { type: String, required: true },
  amount: { type: Number, required: true },
  mainCategoryName: { type: String, required: true },
  icon: { type: String, required: true },
  year: { type: Number, required: true },
  month: { type: String, required: true },
});

const BudgetSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  income_t_count: { type: Number, required: false },
  expense_t_count: { type: Number, required: false },
  balance: { type: Number, required: true },
  total_income: { type: Number, required: true },
  total_expenses: { type: Number, required: true },
  categorySpends: {
    January: [CategorySpendsSchema],
    February: [CategorySpendsSchema],
    March: [CategorySpendsSchema],
    April: [CategorySpendsSchema],
    May: [CategorySpendsSchema],
    June: [CategorySpendsSchema],
    July: [CategorySpendsSchema],
    August: [CategorySpendsSchema],
    September: [CategorySpendsSchema],
    October: [CategorySpendsSchema],
    November: [CategorySpendsSchema],
    December: [CategorySpendsSchema],
  },
  categoryIncome: {
    January: [CategoryIncomeSchema],
    February: [CategoryIncomeSchema],
    March: [CategoryIncomeSchema],
    April: [CategoryIncomeSchema],
    May: [CategoryIncomeSchema],
    June: [CategoryIncomeSchema],
    July: [CategoryIncomeSchema],
    August: [CategoryIncomeSchema],
    September: [CategoryIncomeSchema],
    October: [CategoryIncomeSchema],
    November: [CategoryIncomeSchema],
    December: [CategoryIncomeSchema],
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Budget = mongoose.model('Budget', BudgetSchema);

module.exports = Budget;
