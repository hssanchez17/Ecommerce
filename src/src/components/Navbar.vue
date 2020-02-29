<template>
	<div class="hello">
	<b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="/home">Dela Cream</b-navbar-brand>
      
      <div>
      	
      </div>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-navbar-brand href="/user/list">Search a profile</b-navbar-brand>
            <b-navbar-brand href="/user/profile">Profile</b-navbar-brand>
            <b-navbar-brand href="/post/add">Create a post</b-navbar-brand>
            <b-navbar-brand @click="logOut">Log out</b-navbar-brand>
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
      user:''

    }
  },
  methods:{
    logOut(){
       this.axios.post('logout')
       .then(res => {
          this.$cookie.delete('token', {domain: 'localhost'});
          this.$router.push({ path: `/` })
        })
        .catch( e => {
          console.log(e.response.data.error)
        })
    }
  }
}
</script>
