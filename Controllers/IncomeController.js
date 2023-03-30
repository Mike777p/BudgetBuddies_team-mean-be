const {fetchIncomeCategories, fetchIncomeCategoryByName} = require('../Models.js/IncomeModel')

const getIncomeCategories = (request, response, next) => {
    fetchIncomeCategories()
    .then((data) => {
        response.status(200).send({data})
    })
    .catch(error => {
        console.log(error)
    })
}

const getIncomeCategoryByName = (request,response,next) => {
    const {category_name} = request.params
    fetchIncomeCategoryByName(category_name)
    .then((data) => {
        response.status(200).send({data})
    })
    .catch(error => {
        console.log(error)
    })
}

module.exports = {
    getIncomeCategories,
    getIncomeCategoryByName
}