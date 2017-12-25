// import axios from 'axios'
//
// import { JOBS_LOAD } from './ople'
//
// export const PRINCIPAL_SWITCH = 'principal/switch'
//
// const api = axios.create({
//   baseURL: window.__APP_CONFIG__.api.host
// })
//
// export default {
//   namespaced: true,
//   state: {
//     principal: null
//   },
//   mutations: {
//     [PRINCIPAL_SWITCH]: (state, principal) => {
//       state.principal = principal
//     }
//   },
//   actions: {
//     async signup ({ state, commit }, { email, password }) {
//       await api.post('api/v1/security/signup', {
//         email,
//         password
//       })
//     },
//     async forgot ({ state, commit }, { email }) {
//       await api.post('api/v1/security/forgot', {
//         email
//       })
//     },
//     async login ({ state, commit }, { email, password }) {
//       const { data } = await api.post('api/v1/security/login', {
//         email,
//         password
//       })
//       commit(PRINCIPAL_SWITCH, data)
//     },
//     async passwd ({ state, commit }, { check, password }) {
//       await api.post('api/v1/security/passwd', {
//         check,
//         password
//       })
//     },
//     async confirm ({ state, commit }, { check }) {
//       const { data } = await api.get(`api/v1/security/confirm/${check}`)
//       commit(PRINCIPAL_SWITCH, data)
//     },
//     async recover ({ state, commit }, { check }) {
//       const { data } = await api.get(`api/v1/security/recover/${check}`)
//       commit(PRINCIPAL_SWITCH, {
//         token: data.token,
//         user: data.user
//       })
//       return {
//         check: data.check,
//         user: data.user
//       }
//     },
//     async logout ({ state, commit }) {
//       await api.post('api/v1/security/logout', null, {
//         headers: {
//           Authorization: `Bearer ${state.principal.token}`
//         }
//       })
//       commit(PRINCIPAL_SWITCH, null)
//       commit(`ople/${JOBS_LOAD}`, [], { root: true })
//     }
//   }
// }
