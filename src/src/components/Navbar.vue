<template>
	<div class="hello">
	<b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="/">Dela Cream</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
          <b-nav-form>
      
      <div>
      	
      </div>
      <b-navbar-brand href="/type-of-product/create" v-if="userLogedPermission">Type Of Product</b-navbar-brand>
              <b-navbar-brand href="/cart" v-if="userLogedPermission">My cart</b-navbar-brand> 
              <b-navbar-brand href="/orders" v-if="userLogedPermission"> Orders</b-navbar-brand>
              <b-navbar-brand href="/product/create" v-if="userLogedPermission"> Product</b-navbar-brand>
              <b-navbar-brand href="/profile" v-if="userLogedPermission"> Profile</b-navbar-brand>
              <b-navbar-brand href="/register" v-if="!userLogedPermission">Register</b-navbar-brand>
              <b-navbar-brand href="/login" v-if="!userLogedPermission">Log In</b-navbar-brand>
              <b-navbar-brand @click="logOut()" v-else>Log Out</b-navbar-brand>

          </b-nav-form>
        </b-navbar-nav>



  </b-navbar>
   	</div>

</template>

<script>
  import axios from 'axios'
export default {
  data(){
    return{
      userLogedPermission:false

    }
  },

  created(){
      this.userLogedPermissionFunction();
    },

    
  methods:{
    logIng(){
        this.$router.push({ path: `/login` })
    },



    logOut(){
       this.axios.post('logout')
       .then(res => {
          alert('Your session was closed')
          this.$cookie.delete('token', {domain: 'localhost'});
          this.$router.push({ path: `/` }).catch(err => {})
          this.userLogedPermission=false
        })
        .catch( e => {
          console.log(e.response.data.error)
        })
    },

    userLogedPermissionFunction(){
      if(this.$cookie.get('token')==null)this.userLogedPermission=false
      if(this.$cookie.get('token')!=null)this.userLogedPermission=true
    }
  }
}
</script>
