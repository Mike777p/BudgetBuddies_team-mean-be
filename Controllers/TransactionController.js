const {
  fetchIndividualTransactions,
  fetchSingleTransaction,
  insertUserTransaction,
} = require("../Models.js/TransactionModels");

const getIndividualTransactions = (request, response, next) => {
  const { user_id } = request.params;
  fetchIndividualTransactions(user_id)
    .then((data) => {
      console.log(data);
      response.status(200).send({ data });
    })
    .catch((error) => {
      console.log(error);
    });
};

const getSingleTransaction = (request, response, next) => {
  const { user_id } = request.params;
  const { transaction_id } = request.params;

  fetchSingleTransaction(user_id, transaction_id)
    .then((data) => {
      console.log(data);
      response.status(200).send({ data });
    })
    .catch((error) => {
      console.log(error);
    });
};

const postUserTransaction = (request, response, next) => {
  const { user_id } = request.params;
  const transactionData = request.body;
    insertUserTransaction(user_id, transactionData).then((data)=>{
      response.status(201).send({ "confirmation": data })
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { getIndividualTransactions, getSingleTransaction, postUserTransaction };
