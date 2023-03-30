const User = require('../db/seeds/models.js/Users');
const Budget = require('../db/seeds/models.js/BudgetModel');

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
    const userBalance = await Budget.find({ user_id }, { user_id: 1, balance: 1 });
    // this is saying find where user_id = user_id and only give me balance, if it was balance : 0, this would omit balance from the results, can also do .find({user_id}).select('balance')
    return userBalance;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = { fetchUsers, fetchUserBalance };
