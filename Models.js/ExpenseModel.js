const ExpenseCategories = require('../db/seeds/models.js/ExpenseCategoriesModel')

const fetchExpenseCategories = async () => {
    try {
        const expenseCategories = await ExpenseCategories.find()
        .select('name')
        .select('icon')
        return expenseCategories
    } catch (error) {
        throw error;
    }
}

const fetchExpenseCategoriesByName = async (category) => {
    try {
        const expenseCategory = await ExpenseCategories.findOne({'name': category})
        return expenseCategory
    } catch (error) {
        throw new Error(`Expence category ${category} was not found`)
    }
}

module.exports = {
    fetchExpenseCategories,
    fetchExpenseCategoriesByName
}