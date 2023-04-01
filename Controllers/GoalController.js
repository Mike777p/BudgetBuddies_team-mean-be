const {fetchUserGoals, fetchUserGoalById, insertUserGoal} = require("../Models.js/GoalModel")

const getUserGoals = (request, response, next) => {
    const { user_id } = request.params;
    fetchUserGoals(user_id)
      .then((data) => {
        response.status(200).send({ data });
      })
      .catch(next);
  };

  const getUserGoalById = (request, response, next) => {
    const { goal_id, user_id } = request.params;
    fetchUserGoalById(goal_id, user_id)
      .then((data) => {
        response.status(200).send({ data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postUserGoal = (request, response, next) => {
    const { user_id } = request.params;
    const userGoal = request.body;
    insertUserGoal(user_id, userGoal).then((data) => {
      response.status(201).send({ confirmation: data });
    });
  };

  module.exports = {  getUserGoals, getUserGoalById, postUserGoal}