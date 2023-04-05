const { insertBudget } = require("../Models.js/BudgetModel.js");

const postNewUserBudget = (request, response, next) => {
  const {
    income_t_count,
    expense_t_count,
    balance,
    total_income,
    total_expenses,
  } = request.body;
  const { user_id } = request.params;

  insertBudget(
    user_id,
    income_t_count,
    expense_t_count,
    balance,
    total_income,
    total_expenses
  )
    .then((data) => {
      console.log(data);
      response.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      return response.status(500).json({
        error: err,
      });
    });
};

module.exports = {
  postNewUserBudget,
};
