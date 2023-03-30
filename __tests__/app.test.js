const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app.js");
const { MongoMemoryServer } = require('mongodb-memory-server');
// const {MongoClient} = require('mongodb');
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


  let mongoServer

  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongo.getUri();
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });


    db = await connection.db(globalThis.__MONGO_DB_NAME__);
    await User.insertMany(mockUserData);
    await Budget.insertMany(mockBudgetData);
    await Currency.insertMany(mockCurrenciesData);
    await ExpenseCategories.insertMany(mockExpencesCategoriesData);
    await IncomeCategory.insertMany(mockIncomeCategoriesData);
    console.log("Data seeded successfully!");
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
    // await connection.close();
  });

  afterEach(async () => {
    await User.deleteMany({});
    await Budget.deleteMany({});
    await Currency.deleteMany({});
    await ExpenseCategories.deleteMany({});
    await IncomeCategory.deleteMany({});
    console.log("Data deleted successfully!");
  });

  test("return all users", async () => {
    const response = await request(app).get("/users");
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

