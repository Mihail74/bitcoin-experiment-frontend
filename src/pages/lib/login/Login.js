import authService from '@/services/auth'
import { UPDATE_TOKENS } from '@/store/modules/lib/auth.js'

export default {
  data () {
    return {
      email: null,
      password: null
    }
  },

  methods: {
    doLogin () {
      authService.login({
        email: this.email,
        password: this.password })
      .then(data => {
        this.$store.dispatch(`auth/${UPDATE_TOKENS}`, data)
        this.$router.push({ name: 'main' })
      })
    }
  }
}
