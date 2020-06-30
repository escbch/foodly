import axios from 'axios'

const search_path = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const random_path = 'https://www.themealdb.com/api/json/v1/1/random.php'

export default {
  getMeals(name, success) {
    axios.get(search_path + name).then(response => {
      //list ingrediants and amounts
        let meals = this.listIngrediants(response.data)
        success(meals)
    })
  },
  getRandomMeal(success) {
    axios.get(random_path).then(response => {
        let meals = this.listIngrediants(response.data)
        success(meals)
    })
  },

  listIngrediants(meals) {
    for (var i = 0; i < meals.length; i++) {
      const ingrediants = []
        for (var j = 1; j <= 20; i++) {
          const str_ingrediant = 'strIngredient' + j.toString()
          const str_amount = 'strMeasure' + j.toString()
          const ingrediant = meals[i][str_ingrediant]
          const amount = meals[i][str_amount]
          if (ingrediant) {
            ingrediants.push({ product: ingrediant, amount: amount })
          }
        }
      meals.ingrediants = ingrediants
    }
    return meals
  }
}