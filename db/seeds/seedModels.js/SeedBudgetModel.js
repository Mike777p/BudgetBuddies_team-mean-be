const mongoose = require('mongoose');


const CategorySpendsSchema = new mongoose.Schema({
  categoryId: { type: Number, required: true },
  amount: { type: Number, required: true },
  transactionId: { type: mongoose.Types.ObjectId, ref: 'TransactionSchema' },
});

const CategoryIncomeSchema = new mongoose.Schema({
  categoryId: { type: Number, required: true },
  amount: { type: Number, required: true },
  transactionId: { type: mongoose.Types.ObjectId, ref: 'TransactionSchema' },
});

const BudgetSchema = new mongoose.Schema({
  user_id: { type: Number, required: true },
  income_t_count: {type: Number, required: false},
  expense_t_count: {type: Number, required: false},
  balance: { type: Number, required: true },
  total_income: { type: Number, required: true },
  total_expenses: { type: Number, required: true },
  categorySpends: [CategorySpendsSchema],
  categoryIncome: [CategoryIncomeSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Budget = mongoose.model('Budget', BudgetSchema);

module.exports = Budget;


