const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app.js");

const {
  Budget,
  Currency,
  ExpenseCategories,
  IncomeCategory,
  User,
  } = require("../db/seeds/models.js/ModelIndex.js");
  const {
  mockBudgetData,
  mockExpencesCategoriesData,
  mockUserData,
  mockCurrenciesData,
  mockIncomeCategoriesData,
  } = require("../db/mock-data/index.js");

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
