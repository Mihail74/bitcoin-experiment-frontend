import api from '@/api'

class AuthService {
  constructor () {
    this.PREFIX = '/auth'
  }

  async register ({ firstName, lastName, email, password }) {
    return api.post(`${this.PREFIX}/register`, { firstName, lastName, email, password })
  }

  async login ({ email, password }) {
    return api.post(`${this.PREFIX}/login`, { email, password })
  }
}

export default new AuthService()
