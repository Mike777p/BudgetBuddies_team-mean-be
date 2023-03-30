const {
    fetchExpenseCategories,
    fetchExpenseCategoriesByName,
    fetchSubCategoriesByName
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

const getExpenseCategoriesByName = (request, response, next) => {
    const {category_name} = request.params;
    fetchExpenseCategoriesByName(category_name)
    .then((data) => {
        response.status(200).send({data});
    })
    .catch((error) => {
        console.log(error)
    })
}

const getsubCategoriesByName = (request, response, next) => {
    const {category_name} = request.params;
    fetchSubCategoriesByName(category_name)
    .then((data) => {
        response.status(200).send({data})
    })
    .catch((error) => {
        console.log(error)
    })
}

module.exports = {
    getExpenseCategories,
    getExpenseCategoriesByName,
    getsubCategoriesByName
}