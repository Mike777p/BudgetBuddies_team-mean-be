const { fetchUsers, fetchUserBalance } = require('../Models.js/UserModels');

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

module.exports = { getUsers, getUserBalance };
