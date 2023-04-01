const IncomeCategories = require("../db/seeds/seedModels.js/SeedIncomeCategoriesModel");
const User = require("../db/seeds/seedModels.js/SeedUsersModel");

const fetchIncomeCategories = async () => {
  try {
    const incomeCategories = await IncomeCategories.find();
    return incomeCategories;
  } catch (error) {
    throw error;
  }
};

const fetchIncomeCategoryByName = async (name) => {
  try {
    const incomeCategory = await IncomeCategories.findOne({ name });
    return incomeCategory;
  } catch (error) {
    throw new Error(`Income category ${name} was not found`);
  }
};

const insertIncomeByUserId = async (
  user_id,
  amount,
  date,
  category,
  description,
  type
) => {
  const newIncome = {
    userId: user_id,
    budgetId: "user_data.budget_id",
    categoryId: 1, //this will need to link to whatever category the user selects in the FE, i.e dropdown to select 'Food' and assign it its relevent categoryId
    type: type,
    description: description,
    amount: amount,
    date: Date.now(), //this will come from a user input of the date
    currency_id: 1, //this can be pulled from the users currency setting
  };
  try {
    const postedIncome = await User.updateOne(
      { "user_data.user_id": user_id },
      { $push: { transactions: newIncome } }
    );
    return postedIncome;
  } catch (error) {
    throw new Error(`Error adding an income: ${error.message}`);
  }
};

module.exports = {
  fetchIncomeCategories,
  fetchIncomeCategoryByName,
  insertIncomeByUserId,
};
