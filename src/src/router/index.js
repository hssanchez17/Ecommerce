import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import( '../views/Home.vue'),
  },

  //AUTH


  {
    path:'/register',
    name:'Register',
    component:()=> import('../views/Register.vue')
  },

  {
    path:'/login',
    name:'Login',
    component:()=>import('../views/Login.vue')
  },



  //Products

  {
    path: '/product/create',
    name: 'productCreate',
    component: () => import( '../views/ProductCreate.vue'),
  },

  {
    path:'/product/show/:id',
    name:'productShow',
    component:()=>import('../views/ProductShow.vue')
  },

  //CART

  {
    path:'/cart',
    name:'cartShow',
    component:()=>import('../views/CartShow.vue')
  }
  
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

export default router
