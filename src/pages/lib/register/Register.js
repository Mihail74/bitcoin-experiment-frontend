import { authService } from '@/services'

export default {
  data () {
    return {
      email: null,
      password: null,
      name: {
        first: null,
        last: null
      }
    }
  },

  methods: {
    register () {
      authService.register({
        firstName: this.name.first,
        lastName: this.name.last,
        email: this.email,
        password: this.password })
      .then(data => {
        this.$router.push({ name: 'login' })
      })
    }
  }
}
