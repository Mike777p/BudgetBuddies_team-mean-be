const {
  fetchIndividualTransactions,
  fetchSingleTransaction,
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
  console.log(transactionData, user_id)
    // insertUserTransaction(user_id).then((data)=>{response.status(201).send({ "comment": data });})
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { getIndividualTransactions, getSingleTransaction, postUserTransaction };
