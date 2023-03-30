const User = require("../db/seeds/models.js/Users");

const fetchUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

fetchUsers();

module.exports = fetchUsers;
