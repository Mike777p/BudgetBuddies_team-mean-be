const mongoose = require('mongoose');
const dotenv = require("dotenv");
const { Budget, Currency, ExpenseCategories, IncomeCategory, User } = require("./models.js/ModelIndex.js");
const { mockBudgetData, mockExpencesCategoriesData, mockUserData, mockCurrenciesData, mockIncomeCategoriesData } = require("../mock-data/index.js");

dotenv.config();

async function seed() {
  try {
    await mongoose.connect(
      process.env.MONGO_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    await User.deleteMany({});
    await User.insertMany(mockUserData);

    await Budget.deleteMany({});
    await Budget.insertMany(mockBudgetData);

    await Currency.deleteMany({});
    await Currency.insertMany(mockCurrenciesData)

    await ExpenseCategories.deleteMany({});
    await ExpenseCategories.insertMany(mockExpencesCategoriesData)

    await IncomeCategory.deleteMany({});
    await IncomeCategory.insertMany(mockIncomeCategoriesData)

    console.log("Data seeded successfully!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seed();
