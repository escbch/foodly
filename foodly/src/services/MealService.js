import axios from 'axios'

const searchPath = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomPath = 'https://www.themealdb.com/api/json/v1/1/random.php'

export default {
  getMeals (name, success) {
    axios.get(searchPath + name).then(response => {
      const meals = this.listIngredients(response.data.meals)
      success(meals)
    })
  },
  getRandomMeal (success) {
    axios.get(randomPath).then(response => {
      const meals = this.listIngredients(response.data.meals)
      success(meals)
    })
  },

  listIngredients (meals) {
    if (!meals) {
      return null
    }
    for (var i = 0; i < meals.length; i++) {
      const ingredients = []
      for (var j = 1; j <= 20; j++) {
        const ingredientAttribute = 'strIngredient' + j.toString()
        const amountAttribute = 'strMeasure' + j.toString()
        const ingredient = meals[i][ingredientAttribute]
        const amount = meals[i][amountAttribute]
        if (ingredient) {
          ingredients.push({ name: ingredient, amount: amount })
        }
      }
      meals[i].ingredients = ingredients
    }
    return meals
  }
}
