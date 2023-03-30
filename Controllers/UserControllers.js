const {
  fetchUsers,
  fetchUserBalance,
  fetchUserGoals,
  fetchUserGroups,
} = require("../Models.js/UserModels");

const getUsers = (request, response, next) => {
  fetchUsers()
    .then((data) => {
      response.status(200).send({ data });
    })
    .catch((error) => {
      console.log(error);
    });
};

const getUserBalance = (request, response, next) => {
  const { user_id } = request.params;
  fetchUserBalance(user_id)
    .then((data) => {
      response.status(200).send({ data });
    })
    .catch((error) => {
      console.log(error);
    });
};

const getUserGoals = (request, response, next) => {
  const { user_id } = request.params;
  fetchUserGoals(user_id).then((data) => {
    response.status(200).send({ data });
  });
};

const getUserGroups = (request, response, next) => {
  const { user_id } = request.params;
  fetchUserGroups(user_id).then((data) => {
    response.status(200).send({ data });
  });
};

module.exports = { getUsers, getUserBalance, getUserGoals, getUserGroups };
