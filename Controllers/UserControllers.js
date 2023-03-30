const {fetchUsers, fetchUserGoals} = require("../Models.js/UserModels");

const getUsers = (request, response, next) => {
  fetchUsers()
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

module.exports = { getUsers, getUserGoals };
