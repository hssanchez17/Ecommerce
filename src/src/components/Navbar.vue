<template>
	<!--<div class="hello">
	<b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="/">Dela Cream</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
          <b-nav-form>
      
      <div>
      	
      </div>
              <b-navbar-brand href="/products">List of Products</b-navbar-brand>
              <b-navbar-brand href="/type-of-product">List of Type Of Product</b-navbar-brand>

              <b-navbar-brand href="/cart" v-if="userLogedPermission">My cart</b-navbar-brand> 
              <b-navbar-brand href="/orders" v-if="userLogedPermission">My Orders</b-navbar-brand>
              <b-navbar-brand href="/profile" v-if="userLogedPermission"> Profile</b-navbar-brand>


             
              



              <b-navbar-brand href="/register" v-if="!userLogedPermission">Register</b-navbar-brand>
              <b-navbar-brand href="/login" v-if="!userLogedPermission">Log In</b-navbar-brand>
              <b-navbar-brand @click="logOut()" v-else>Log Out</b-navbar-brand>

          </b-nav-form>
        </b-navbar-nav>



  </b-navbar>
   	</div>-->


      <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/">Dela Cream</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <em>Info</em>
          </template>
            <!--You don't need to be connected -->
            <b-dropdown-item href="/register" v-if="!userLogedPermission">Register</b-dropdown-item>
            <b-dropdown-item href="/login" v-if="!userLogedPermission">Login</b-dropdown-item>
            <b-dropdown-item @click="logOut()" v-else>Log Out</b-dropdown-item>


            <!--You need to be connected -->
            <b-dropdown-item href="/cart" v-if="userLogedPermission">Cart</b-dropdown-item>
            <b-dropdown-item href="/orders" v-if="userLogedPermission">Orders</b-dropdown-item>
            <b-dropdown-item href="/type-of-product" v-if="userLogedPermission">Type Of Products</b-dropdown-item>

            <b-dropdown-item href="/products">Products</b-dropdown-item>
            <b-dropdown-item href="#">Info</b-dropdown-item>

            <!-- Admin -->
            <b-dropdown-item href="/product/create" v-if="adminLogedPermission">Create Product</b-dropdown-item>
            <b-dropdown-item href="/type-of-product/create" v-if="adminLogedPermission">Create Type of Product</b-dropdown-item>

        </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>


</template>

<script>
  import axios from 'axios'
export default {
  data(){
    return{
      userLogedPermission:false,
      adminLogedPermission:false

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
          this.$cookie.delete('user', {domain: 'localhost'});
          this.$router.push({ path: `/` }).catch(err => {})
          this.userLogedPermission=false
        })
        .catch( e => {
          console.log(e.response.data.error)
        })
    },

    userLogedPermissionFunction(){
      if(this.$cookie.get('token')==null)this.userLogedPermission=false
      if(this.$cookie.get('token')!=null){
        if(JSON.parse(this.$cookie.get('user')).rol=='admin') this.adminLogedPermission=true;
        this.userLogedPermission=true
      }
    }
  }
}
</script>
