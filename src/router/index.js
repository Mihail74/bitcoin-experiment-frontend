import Vue from 'vue'
import Router from 'vue-router'
import * as pages from '@/pages'

Vue.use(Router)

export default ({ store }) => {
  const router = new Router({
    routes: [
      {
        path: '/register',
        name: 'register',
        component: pages.Register
      },

      {
        path: '/login',
        name: 'login',
        component: pages.Login
      },

      {
        path: '/',
        name: 'main',
        component: pages.Main,

        meta: {
          requiresAuth: true
        }
      }
      //
      // {
      //   path: '/pages',
      //
      //   // meta: {
      //   //   requiresAuth: true
      //   // },
      //
      //   children: [
      //     {
      //       path: 'main',
      //       name: 'main',
      //       component: pages.Main
      //     }
      //   ]
      // }
    ]
  })

  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
      if (store.state.auth.accessToken == null) {
        next({
          // path: '/login',
          name: 'login',
          query: {
            redirect: to.fullPath
          }
        })
      } else {
        next()
      }
    } else {
      next()
    }
  })

  return router
}
