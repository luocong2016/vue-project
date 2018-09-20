import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: '/apis',
  timeout: 5000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

// http request
service.interceptors.request.use(
  config => {
    if (store) {
      config.headers['x-access-token'] = getToken()
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response
service.interceptors.response.use(
  response => {
    const res = response.data
    if (response.status === 200 || response.status === 304) { // success
      return res
    } else if (res.code == 401 || response.status === 401) {
      MessageBox.confirm('Token 验证失败请重新登陆', '提示', {
        type: 'warning',
        confirmButtonText: '重新登录'
      }).then(() => {
        // store
        console.log('token')
      })
      console.log(!200)
    }
  },
  error => {
    console.log('err: ', error);
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  },
)

export default service
