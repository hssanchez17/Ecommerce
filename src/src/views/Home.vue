<template>
  <div class="home">
    <h1>{{message}}</h1>
  </div>
</template>

<script>

export default {
  name: 'Home',


  data() {
    return {
    	message:''
    }
  },

  created(){
    this.getMessage();
  },

  methods:{
    getMessage(){

      this.axios.get('/')
      .then((response) => {
      	this.message=response.data
      })
      .catch((e)=>{
        console.log('error' + e);
      })
    }
  }
}
</script>
