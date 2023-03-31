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
        throw new Error(`Expense category ${category} was not found`)
    }
}

const fetchSubCategoriesByName = async (category, subcategory) => {
    try {
        const subCategories = await ExpenseCategories.findOne(
            {'name': category},
            {subcategories: {$elemMatch: {name: subcategory}}})
        return subCategories;
    } catch (error) {
        throw new Error(`Expense category ${category} was not found`)
    }
}

module.exports = {
    fetchExpenseCategories,
    fetchExpenseCategoriesByName,
    fetchSubCategoriesByName
}