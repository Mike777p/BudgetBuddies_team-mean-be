const User = require("../db/seeds/models.js/Users");

const fetchUsers = async () => {
  try {
    const users = await User.find();
    if (!user) {
      throw new Error(`User ${id} not found`);
    }
    return users;
  } catch (next) {
    throw error;
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

const fetchUserGoalById = async (g_id, u_id) => {
  try {
    const userGoal = await User.findOne(
      { "user_data.user_id": u_id },
      { "userGoals": { $elemMatch: { _id: g_id } } }
    );
    if (!userGoal) {
      throw new Error(`User ${u_id} with goal id ${g_id} was not found`);
    }
    return userGoal
  } catch (error) {
    throw new Error(`Error fetching user goal: ${error.message}`);
  }
};

module.exports = { fetchUsers, fetchUserGoals, fetchUserGoalById };
