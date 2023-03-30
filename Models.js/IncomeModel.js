const IncomeCategories = require('../db/seeds/models.js/IncomeCategoriesModel')

const fetchIncomeCategories = async () => {
    try {
        const incomeCategories = await IncomeCategories.find()
        return incomeCategories
    } catch (error) {
        throw error
    }
}

const fetchIncomeCategoryByName = async (name) => {
    try{
        const incomeCategory = await IncomeCategories.findOne({name})
        return incomeCategory
    } catch (error) {
        throw new Error(`Income category ${name} was not found`)
    }
}

module.exports = {
    fetchIncomeCategories,
    fetchIncomeCategoryByName
}