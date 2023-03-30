const {
  fetchUsers,
  fetchUserBalance,
  fetchUserGoals,
  fetchUserById
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

const getUserById = (request, response, next) => {
  const {user_id} = request.params;
  fetchUserById(user_id)
  .then((data) => {
    response.status(200).send({data})
  })
  .catch((error) => {
    console.log(error);
  })
}

module.exports = { getUsers, getUserBalance, getUserGoals, getUserById };
