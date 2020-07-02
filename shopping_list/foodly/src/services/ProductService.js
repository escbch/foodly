import axios from 'axios'

const path = 'http://localhost:8080/products'

export default {
  getProducts (success) {
    axios.get(path).then(response => {
      success(response.data)
    })
  },
  updateProduct (product, success) {
    axios.put(path + '/' + product.id, product).then(response => {
      success(response.data)
    })
  },
  addProduct (product, success) {
    axios.post(path, product).then(response => {
      success(response.data)
    })
  },
  removeProduct (product, success) {
    axios.delete(path + '/' + product.id).then(response => {
      success(response.data)
    })
  },
  removeProducts (success) {
    axios.delete(path + '/').then(response => {
      success(response.data)
    })
  }
}
