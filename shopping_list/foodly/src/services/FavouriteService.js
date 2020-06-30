import axios from 'axios'

const path = 'http://localhost:8080/favourites'

export default {
  addFavourite(favourite, success) {
    axios.post(path, favourite).then(response => {
      success(response.data)
    })
  },
  updateFavourite(favourite, success) {
    axios.put(path + '/' + favourite.id, favourite).then(response => {
      success(response.data)
    })
  },
  getFavourites(success) {
    axios.get(path).then(response => {
      success(response.data)
    })
  },
  removeFavourite(favorite, success) {
    axios.delete(path + '/' + favorite.id).then(response => {
      success(response.data)
    })
   }
}