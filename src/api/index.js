import axios from 'axios'

class Api {
  constructor (config) {
    const BASE_URL = 'http://127.0.0.1:3000/api'
    this.axios = axios.create({
      baseURL: BASE_URL
    })
    this.store = null

    const self = this

    this.axios.interceptors.request.use(function (config) {
      if (self.store === null) {
        console.log('No store. [init] method must be invoke to initialize store')
        return Promise.reject(new Error('no store'))
      }
      config.headers.Authorization = self.store.state.auth.accessToken
      return config
    }, function (err) {
      return Promise.reject(err)
    })
  }

  init (store) {
    this.store = store
  }

  async post (url, body) {
    return new Promise((resolve, reject) => {
      this.axios.post(url, body)
        .then(function (response) {
          resolve(response.data)
        }).catch((error) => {
          reject(error)
        })
    })
  }

  async put (url, body) {
    return new Promise((resolve, reject) => {
      this.axios.put(url, body)
        .then(function (response) {
          resolve(response.data)
        }).catch((error) => {
          reject(error.response.data.errors)
        })
    })
  }

  async get (url, params) {
    return new Promise((resolve, reject) => {
      this.axios.get(url, { params: params })
        .then(function (response) {
          resolve(response.data)
        }).catch((error) => {
          reject(error.response.data.errors)
        })
    })
  }
}

export default new Api()
