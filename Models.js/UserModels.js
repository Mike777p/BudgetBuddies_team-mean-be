const User = require("../db/seeds/models.js/Users");
const Budget = require("../db/seeds/models.js/BudgetModel");

const fetchUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const fetchUserBalance = async (user_id) => {
  try {
    const userBalance = await Budget.find(
      { user_id },
      { user_id: 1, balance: 1 }
    );
    // this is saying find where user_id = user_id and only give me balance, if it was balance : 0, this would omit balance from the results, can also do .find({user_id}).select('balance')
    return userBalance;
  } catch (error) {
    console.error(error);
    throw new Error(`Error fetching user balance: ${error.message}`);
  }
};

const fetchUserGoals = async (id) => {
  try {
    const user = await User.findOne({ "user_data.user_id": id }).select(
      "userGoals"
    );
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  } catch (error) {
    throw new Error(`Error fetching user goals: ${error.message}`);
  }
};

const fetchUserGroups = async (id) => {
  try {
    const user = await User.find({ "user_data.user_id": id }).select(
      "user_data.groups"
    );
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  } catch (error) {
    throw new Error(`Error fetching user goals: ${error.message}`);
  }
};

const fetchUserBudget = async (user_id) => {
  try {
    const userBudget = await Budget.find({ user_id });
    return userBudget;
  } catch (error) {
    throw new Error(`Error fetching user budget: ${error.message}`);
  }
};

module.exports = {
  fetchUsers,
  fetchUserBalance,
  fetchUserGoals,
  fetchUserGroups,
  fetchUserBudget,
};
