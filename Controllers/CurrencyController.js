const {fetchCurrencies, fetchCurrencyByName} = require('../Models.js/CurrencyModel')

const getCurrencies = (request, response, next) => {
    fetchCurrencies()
    .then((data) => {
        response.status(200).send({data})
    })
    .catch(error => {
        console.log(error)
    })
}

const getCurrencyByName = (request,response,next) => {
    const {currency_name} = request.params
    fetchCurrencyByName(currency_name)
    .then((data) => {
        response.status(200).send({data})
    })
    .catch(error => {
        console.log(error)
    })
}

module.exports = {
    getCurrencies,
    getCurrencyByName
}