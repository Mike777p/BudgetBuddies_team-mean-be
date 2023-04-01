const { User, UserGoal } = require("../db/seeds/seedModels.js/SeedUsersModel");

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
      { userGoals: { $elemMatch: { _id: g_id } } }
    );
    if (!userGoal) {
      throw new Error(`User ${u_id} with goal id ${g_id} was not found`);
    }
    return userGoal;
  } catch (error) {
    throw new Error(`Error fetching user goal: ${error.message}`);
  }
};

const insertUserGoal = async (userId, userGoalData) => {
  const userGoal = new UserGoal({
    user_id: userId,
    budgetId: userGoalData.budgetId,
    target_amount: userGoalData.target_amount,
    balance: userGoalData.balance,
    description: userGoalData.description,
    target_date: userGoalData.target_date,
    deposit: userGoalData.deposit,
    deposit_frequency: userGoalData.deposit_frequency,
    reason: userGoalData.reason,
  });

  try {
    const user = await User.updateOne(
      { "user_data.user_id": userId },
      { $push: { userGoals: userGoal } },
      { new: true }
    );
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = { fetchUserGoals, fetchUserGoalById, insertUserGoal };
