<template>
  <div class="home">
    <Navbar></Navbar>
        <div class="container">
     <div class="row" id="listOfProducts">
        <div class="col-md-4"  v-for="product in listOfProducts">
          
          <div class="card">
            <a :href="'/product/show/'+ product.id">
              <img :src="product.imageurl"  id="profilePicture">
            </a>
              <div class="card-body">
                <h5 class="card-title"> {{product.title}}</h5>
                <strong> {{product.price}} Bs</strong>
                <p>{{product.description}}</p>
              </div>
          </div>
        </div>
      </div> 
  </div>  
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'

export default {
  components: {Navbar},
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

