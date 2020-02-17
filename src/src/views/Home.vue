<template>
  <div class="home">

        <div class="container">
     <div class="row" id="listOfProducts">
        <div class="col-md-4"  v-for="product in listOfProducts">
          
          <div class="card">
            <!--<a :href="'/user/show/'+ user.id">-->
              <img :src="product.imageurl"  id="profilePicture">
              <div class="card-body">
                <h5 class="card-title"> {{product.title}}</h5>
              </div>
            <!--</a>-->
          </div>
        </div>
      </div> 
  </div>  
  </div>
</template>

<script>

export default {
  name: 'Home',


  data() {
    return {
      listOfProducts:{}
    }
  },

  mounted(){
    this.getAllProducts()
  },

  methods:{
    getAllProducts(){
      this.axios.get(`product/show/all`)
        .then((response) => {
          console.log(response.data)
          this.listOfProducts=response.data.products
        })
        .catch((e)=>{
          console.log('error' + e);
        })
    }
 
  }
}
</script>


<style>
      #profilePicture{
    width: 100%; 
    height: 300px;
},
* {
  box-sizing: border-box;
}
</style>

