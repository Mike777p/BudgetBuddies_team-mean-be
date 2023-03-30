const User = require('../db/seeds/models.js/Users');


const fetchUsers = async () => {
    try {
        const users = await User.find();
        return users;
      } catch (error) {
        console.error(error);
        throw error;
      }
}

const fetchUserGoals = async (id) => {
  try {
    const user = await User.findOne({ 'user_data.user_id': id }).select("userGoals");
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user
  } catch (error) {
    throw new Error(`Error fetching user goals: ${error.message}`);
  }
};

module.exports = {fetchUsers, fetchUserGoals};
