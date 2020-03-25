<template>
<div class="container">

  <!--  Este es el navbar-->
  <Navbar></Navbar>
  <!--  Este es el navbar-->

  <Slider></Slider>

  
  <div class="container2">
    <h1><a href='#'>Last Products</a></h1>
    <h4><a href="/products">All Products</a></h4>
  </div>

  <!-- products list-->  
  <div class="row" id="listOfProducts">
    <div class="col-md-4"  v-for="product in listOfProducts">    
      <div class="card">

        <div class="inner">
          <a :href="'/product/show/'+ product.id">
            <img :src="product.imageurl"  id="profilePicture">
          </a>
        </div>

        <div class="card-body">
          <h5 class="card-title"> {{product.title}}</h5>
          <strong> {{product.price}} Bs</strong>
          <p>{{product.description}}</p>
        </div>
      </div>
    </div>
  </div> 

  <!-- products list--> 



  

</div>
</template>


<script>
  import Navbar from '@/components/Navbar.vue'
  import Slider from '@/components/Slider.vue'

export default {
  components: {Navbar,Slider},
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
      this.axios.get(`product/show/3`)
        .then((response) => {
          this.listOfProducts=response.data.products
        })
        .catch((e)=>{
          console.log('error' + e);
        })
    },
 
  }
}
</script>


<style>
* {
  margin: 0;
  padding: 0;
}

.inner{
  width: 100%; 
  height: 250px;
  overflow: hidden;
}
.inner #profilePicture{
  transition: all 1.5s ease;
}

#profilePicture{
  width: 100%;
  height: 100%;
}

#profilePicture:hover{
  transform: scale(1.5);
}

.container .container2{
  display:flex;
  flex-direction:row;
  justify-content:space-between;
}


.container h1{
  margin-top: 2%;
  margin-bottom: 1%;
}

.container h1 a,.container h4 a{
   color:#797979;
   text-decoration:none; 
   transition: all 1.5s ease;
}

.container h1 a:hover,.container h4 a:hover{
  color: black;
}

.container .container2 h4{  
  text-align: center;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
}




</style>

