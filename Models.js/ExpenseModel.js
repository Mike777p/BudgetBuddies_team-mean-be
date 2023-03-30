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

module.exports = {
    fetchExpenseCategories
}