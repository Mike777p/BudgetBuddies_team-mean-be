const { fetchUsers, fetchUserGoals, fetchUserGoalById } = require("../Models.js/UserModels");

const getUsers = (request, response, next) => {
  fetchUsers()
    .then((data) => {
      response.status(200).send({ data });
    })
    .catch(next);
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

module.exports = { getUsers, getUserGoals, getUserGoalById };
