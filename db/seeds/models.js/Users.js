const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  transactionId: { type: mongoose.Types.ObjectId, ref: "CategorySpendsSchema" },
  userId: { type: Number, required: true },
  budgetId: { type: Number, required: true },
  categoryId: { type: Number, required: true },
  type: { type: String, enum: ["income", "expense"], required: true },
  description: { type: String, required: false },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  currency_id: { type: Number, required: true },
});

const UserGoalSchema = new mongoose.Schema({
  user_id: { type: Number, required: true },
  target_amount: { type: Number, required: true },
  balance: { type: Number, default: 0 },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  target_date: { type: Date, required: true },
  deposit: { type: Number, required: true },
  deposit_frequency: { type: String, required: true },
  reason: { type: String },
  goal_id: { type: mongoose.Types.ObjectId }
});

const RecurringPaymentSchema = new mongoose.Schema({
  user_id: { type: Number, required: true },
  budget_id: { type: Number, required: true },
  category_id: { type: Number, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  frequency: { type: String, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
});

const UserSchema = new mongoose.Schema({
  user_data: {
    user_id: { type: Number, required: true },
    budget_id: { type: Number, required: true },
    name: { type: String, required: true },
    user_name: { type: String, required: true },
    email: { type: String, required: true },
    currency: { type: String, required: true },
    password: { type: String, required: true },
    groups: [{ type: Number }],
  },
  transactions: [TransactionSchema],
  userGoals: [UserGoalSchema],
  recurringPayments: [RecurringPaymentSchema],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
