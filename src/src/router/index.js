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
    component:()=> import('../views/Auth/Register.vue')
  },

  {
    path:'/login',
    name:'Login',
    component:()=>import('../views/Auth/Login.vue')
  },



  //Products

  {
    path: '/product/create',
    name: 'productCreate',
    component: () => import( '../views/Product/ProductCreate.vue'),
    beforeEnter: ensureAuthenticated,
    beforeEnter: adminAuthenticated
  },

  {
    path:'/product/show/:id',
    name:'productShow',
    component:()=>import('../views/Product/ProductShow.vue')
  },

  {
    path:'/products',
    name:'productShowAll',
    component:()=>import('../views/Product/ProductShowAll.vue')
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
    component:()=>import('../views/TypeOfProduct/TypeOfProductShowAll.vue')
  },

  {
    path:'/type-of-product/create',
    name:'createTypeOfProdyct',
    component:()=>import('../views/TypeOfProduct/TypeOfProductCreate.vue'),
    beforeEnter: ensureAuthenticated,
    beforeEnter: adminAuthenticated
  },

  {
    path:'/type-of-product/show/:id',
    name:'type-of-productShow',
    component:()=>import('../views/TypeOfProduct/TypeOfProductShow.vue')
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

function adminAuthenticated(ro,from,next){
  if(JSON.parse(Vue.cookie.get('user')).rol=='admin')next()
  else{
    alert("You don't have enough permissions  to access")
      next('/')
  }
}





export default router
