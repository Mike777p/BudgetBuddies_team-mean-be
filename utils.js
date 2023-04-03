// Use this function when categories are added to repopulate the transaction function data

function getCategoryNamesById(categoryData) {
  const mapping = {};

  categoryData.forEach((category) => {
    category.subcategories.forEach((subcategory) => {
      mapping[subcategory.categoryId] = {
        categoryName: category.name,
        subcategoryName: subcategory.name,
      };
    });
  });

  return mapping;
}

//   const ExpencesCategoriesData = require("./assets/ExpenseCategories.js")
export default getCategoryNamesById;
