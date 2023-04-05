const {
  fetchUsers,
  fetchUserBalance,
  fetchUserById,
  fetchUserGroups,
  fetchUserBudget,
  fetchUserExpenses,
  checkUserName,
  insertNewUser,
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

const postNewUser = (request, response, next) => {
  const { email, user_name, name, currency, user_id, password, budget_id } =
    request.body;
  checkUserName(user_name)
    .then((data) => {
      if (data) {
        let errors = {};
        if (data.user_data.user_name === user_name) {
          errors.username = "User Name already exists";
          return response.status(400).json(errors);
        }
      } else {
        insertNewUser(
          email,
          user_name,
          name,
          currency,
          user_id,
          password,
          budget_id
        ).then((data) => {
          console.log(data);
          response.status(201).send(data);
        });
      }
    })
    .catch((err) => {
      return response.status(500).json({
        error: err,
      });
    });
};

module.exports = {
  getUsers,
  getUserBalance,
  getUserGroups,
  getUserBudget,
  getUserById,
  getUserExpenses,
  postNewUser,
};
