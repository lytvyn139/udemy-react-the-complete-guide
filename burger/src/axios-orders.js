import axios from 'axios'
const instance = axios.create({
  baseURL: 'https://burger-fc48d.firebaseio.com/'
})
export default instance
