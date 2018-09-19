import axios from 'axios'

// axios setting
axios.defaults.baseURL = '/apis'
axios.defaults.timeout = 5000
axios.defaults.withCredentials = true // allow to carry Cross-domain cookie
axios.defaults.headers.common = {
  'Content-Type': 'application/x-www-form-urlencoded'
}
// http request
axios.interceptors.request.use(
  config => {
    // let token = Vue.localStorage.get('token')
    // if(token){
    //     config.headers.Token = token;
    // }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response
axios.interceptors.response.use(
  response => {
    if (response.status == 200 || response.status == 304) { // success
      return response.data
    }
  },
  error => {
    return Promise.reject(error)
  },
)

export default axios
