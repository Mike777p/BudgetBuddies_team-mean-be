import mongoose from "mongoose";
import dotenv from "dotenv";
import {
  Budget,
  Currency,
  ExpenseCategories,
  IncomeCategory,
  User,
} from "./models.js/ModelIndex.js";
import {
  mockBudgetData,
  mockExpencesCategoriesData,
  mockUserData,
  mockCurrenciesData,
  mockIncomeCategoriesData,
} from "../mock-data/index.js";
dotenv.config();

async function seed() {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/budgetBuddy",
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
