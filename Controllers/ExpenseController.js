const {
    fetchExpenseCategories
} = require('../Models.js/ExpenseModel')

const getExpenseCategories = (request, response, next) => {
    fetchExpenseCategories()
    .then((data) => {
        response.status(200).send({data})
    })
    .catch(error => {
        console.log(error)
    })
}

module.exports = {
    getExpenseCategories
}