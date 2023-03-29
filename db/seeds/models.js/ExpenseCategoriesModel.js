const mongoose = require('mongoose');


const SubcategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true },
  categoryId: { type: Number, required: true },
});

const ExpensesCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true },
  subcategories: [SubcategorySchema],
});

const ExpenseCategories = mongoose.model("ExpensesCategory", ExpensesCategorySchema);

module.exports = ExpenseCategories
