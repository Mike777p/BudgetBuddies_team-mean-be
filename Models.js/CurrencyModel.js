const Currencies = require('../db/seeds/models.js/CurrenciesModel')

const fetchCurrencies = async () => {
    try {
        const currencies = await Currencies.find()
        return currencies
    } catch (error) {
        throw error
    }
}

const fetchCurrencyByName = async (name) => {
    try{
        const currency = await Currencies.findOne({name})
        return currency
    } catch (error) {
        throw new Error(`Currency ${name} was not found`)
    }
}

module.exports = {
    fetchCurrencies,
    fetchCurrencyByName
}