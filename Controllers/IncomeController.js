const {
  fetchIncomeCategories,
  fetchIncomeCategoryByName,
  insertIncomeByUserId,
} = require('../Models.js/IncomeModel');

const getIncomeCategories = (request, response, next) => {
  fetchIncomeCategories()
    .then((data) => {
      response.status(200).send({ data });
    })
    .catch((error) => {
      console.log(error);
    });
};

const getIncomeCategoryByName = (request, response, next) => {
  const { category_name } = request.params;
  fetchIncomeCategoryByName(category_name)
    .then((data) => {
      response.status(200).send({ data });
    })
    .catch((error) => {
      console.log(error);
    });
};

const postIncomeByUserId = (request, response, next) => {
  const { user_id } = request.params;
  const { amount, date, category, description, type } = request.body;
  insertIncomeByUserId(user_id, amount, date, category, description, type)
    .then((data) => {
      console.log(data);
      response.status(201).send(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = {
  getIncomeCategories,
  getIncomeCategoryByName,
  postIncomeByUserId,
};
