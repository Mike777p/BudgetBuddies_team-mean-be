const { User } = require("../db/seeds/seedModels.js/SeedUsersModel");

const Budget = require("../db/seeds/seedModels.js/SeedBudgetModel");

const fetchUsers = async () => {
  try {
    const users = await User.find();
    if (!users) {
      throw new Error(`Users not found`);
    }
    return users;
  } catch (error) {
    console.error(error);
    throw new Error(`Error! users not found: ${error.message}`);
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

const fetchUserById = async (user_id) => {
  try {
    const user = await User.findOne({ "user_data.user_id": user_id }).select(
      "user_data"
    );
    return user;
  } catch (error) {
    throw error;
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

const fetchUserExpenses = async (user_id) => {
  try {
    const userExpenses = await User.find({
      "user_data.user_id": user_id,
    }).select("transactions");

    return userExpenses;
  } catch (error) {
    throw new Error(`Error fetching user expenses: ${error.message}`);
  }
};

module.exports = {
  fetchUsers,
  fetchUserBalance,
  fetchUserGroups,
  fetchUserBudget,
  fetchUserById,
  fetchUserExpenses,
};
