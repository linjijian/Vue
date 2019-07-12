import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/login/login'
import Index from '../components/index/index'
import productInfo from '../components/product/productlist/index'
import productAttribute from '../components/product/productAttribute/index'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: [
    { path: '/login', component: Login },
    { path: '/',
      component: Index,
      children: [
        { path: '/product/productInfo', component: productInfo },
        { path: '/product/productAttribute', component: productAttribute }
      ]
    },
    ]

})

router.beforeEach((to, from, next) => {
  let path = to.path
  if (path === '/login') {
    next()
  }

  if (sessionStorage.getItem('token')) {
    // store.dispatch('changeCurrPath', to.path)
    // rootController.getInitialState().then((state) => {
    //   if (state == false) {
    //     router.push({ path: '/initialization' })
    //   } else {
    //     store.dispatch('changeCurrPath', to.path)
    //   }
    // })
    next()
  } else {
    router.push({ path: '/login' })
    next()
  }
})

export default router
