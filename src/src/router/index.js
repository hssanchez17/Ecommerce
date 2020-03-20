import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import( '../views/Home.vue')
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
    beforeEnter: ensureAuthenticated
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
    component:()=>import('../views/CartShow.vue'),
    beforeEnter: ensureAuthenticated
  },


  //Orders

  {
    path:'/orders',
    name:'showAllOrders',
     component:()=>import('../views/ShowAllOrders.vue'),
     beforeEnter: ensureAuthenticated

  },


  //PROFILE
  {
    path:'/profile',
    name:'showProfile',
    component:()=>import('../views/ProfileShow.vue'),
    beforeEnter: ensureAuthenticated

  },

  //TYPE OF PRODUCT

  {
    path:'/type-of-product',
    name:'TypeOfProdyct',
    component:()=>import('../views/TypeOfProductShowAll.vue'),
    beforeEnter: ensureAuthenticated
  },

  {
    path:'/type-of-product/create',
    name:'createTypeOfProdyct',
    component:()=>import('../views/TypeOfProductCreate.vue'),
    beforeEnter: ensureAuthenticated
  },

  {
    path:'/type-of-product/show/:id',
    name:'type-of-productShow',
    component:()=>import('../views/TypeOfProductShow.vue')
  },
  
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })


function ensureAuthenticated (to, from, next) {
  if(Vue.cookie.get('token'))next()
  else{
    alert('Login first')
    next('/')
  }
}

function forwardAuthenticated (to, from, next) {
  if(Vue.cookie.get('token')) next('/home')
  else next()
}





export default router
