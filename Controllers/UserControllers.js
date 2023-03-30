
const {
  fetchUsers,
  fetchUserBalance,
  fetchUserGoals,
  fetchUserGroups,
  fetchUserBudget,
  fetchUserGoalById,
} = require("../Models.js/UserModels");


const getUsers = (request, response, next) => {
  fetchUsers()
    .then((data) => {
      response.status(200).send({ data });
    })
    .catch(next);
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
  }).catch(next);
};

const getUserGoalById = (request, response, next) => {
  const { goal_id, user_id } = request.params;
  fetchUserGoalById(goal_id, user_id).then((data) => {
    response.status(200).send({ data });
  })
  .catch((error) => {
    console.log(error);
  });
};

const getUserGroups = (request, response, next) => {
  const { user_id } = request.params;
  fetchUserGroups(user_id).then((data) => {
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

module.exports = {
  getUsers,
  getUserBalance,
  getUserGoals,
  getUserGroups,
  getUserBudget,
  getUserGoalById,
};
