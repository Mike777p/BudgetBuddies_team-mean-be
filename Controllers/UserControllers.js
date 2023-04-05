const {
  fetchUsers,
  fetchUserBalance,
  fetchUserById,
  fetchUserGroups,
  fetchUserBudget,
  fetchUserExpenses,
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

const getUserById = (request, response, next) => {
  const { user_id } = request.params;
  fetchUserById(user_id)
    .then((data) => {
      response.status(200).send({ data });
    })
    .catch((error) => {
      console.log(error);
    });
};

const getUserGroups = (request, response, next) => {
  console.log("Budget Requested");
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

const getUserExpenses = (request, response, next) => {
  const { user_id } = request.params;
  fetchUserExpenses(user_id)
    .then((data) => {
      let data_user_exp = data[0].transactions.filter(
        (word) => word.type == "expense"
      );
      response.status(200).send({ data_user_exp });
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = {
  getUsers,
  getUserBalance,
  getUserGroups,
  getUserBudget,
  getUserById,
  getUserExpenses,
};
