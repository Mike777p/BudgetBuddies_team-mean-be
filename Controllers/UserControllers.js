const {
  fetchUsers,
  fetchUserBalance,
  fetchUserGoals,
  fetchUserBudget,
} = require('../Models.js/UserModels');

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
    .then((balanceData) => {
      response.status(200).send({ balanceData });
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

const getUserBudget = (request, response, next) => {
  const { user_id } = request.params;
  fetchUserBudget(user_id)
    .then((budgetData) => {
      response.status(200).send({ budgetData });
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { getUsers, getUserBalance, getUserGoals, getUserBudget };
