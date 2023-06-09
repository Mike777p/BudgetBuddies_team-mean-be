const mongoose = require('mongoose');

const IncomeCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true },
  categoryId: { type: Number, required: true },
});

const IncomeCategory = mongoose.model("IncomeCategory", IncomeCategorySchema);

module.exports = IncomeCategory