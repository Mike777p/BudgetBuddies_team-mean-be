import request from "supertest";
import mongoose from "mongoose";
import app from "../app.js";
import {
    Budget,
    Currency,
    ExpenseCategories,
    IncomeCategory,
    User,
  } from "../db/seeds/models.js/ModelIndex.js";
  import {
    mockBudgetData,
    mockExpencesCategoriesData,
    mockUserData,
    mockCurrenciesData,
    mockIncomeCategoriesData,
  } from "../db/mock-data/index.js";

describe("GET /expensesCategories", () => {
  beforeAll(async () => {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    await User.insertMany(mockUserData);
    await Budget.insertMany(mockBudgetData);
    await Currency.insertMany(mockCurrenciesData);
    await ExpenseCategories.insertMany(mockExpencesCategoriesData);
    await IncomeCategory.insertMany(mockIncomeCategoriesData);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  afterEach(async () => {
    await User.deleteMany({});
    await Budget.deleteMany({});
    await Currency.deleteMany({});
    await ExpenseCategories.deleteMany({});
    await IncomeCategory.deleteMany({});
    console.log("Data seeded successfully!");
  });

  test("it should return an array of expenses categories", async () => {
    const response = await request(app).get("/users");
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
