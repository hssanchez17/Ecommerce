<template>
  <div class="home">
    <h1>{{message}}</h1>
    <button class="btn btn-danger" id="btn-toggle-comment" @click="sendMessage()">  Cancelar</button>
  </div>
</template>

<script>

export default {
  name: 'Home',


  data() {
    return {
    	message:'',
      test:{
        testMessage:'testing'
      }
    }
  },

  created(){
    this.getMessage();
  },

  methods:{
    getMessage(){

      this.axios.get('/')
      .then((response) => {
      	this.message=response.data.message
        console.log(response.data)
      })
      .catch((e)=>{
        console.log('error' + e);
      })
    },

    sendMessage(){
      this.axios.post('/',this.test)
      .then((response) => {
        console.log(response.data)
      })
      .catch((e)=>{
        console.log('error' + e);
      })
    }
  }
}
</script>
