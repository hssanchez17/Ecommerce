<template>
<div class="container">
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

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
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

  
    <Slider></Slider>


  <h1><a href='#'>Last Products</a></h1>

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
      listOfProducts:{},
      product1:'',
      product2:'',
      product3:''
    }
  },

  mounted(){
    this.getAllProducts()
  },

  methods:{
    getAllProducts(){
      this.axios.get(`product/show/all`)
        .then((response) => {
          this.listOfProducts=response.data.products
          this.product1=response.data.products[0]
          this.product2=response.data.products[1]
          this.product3=response.data.products[2]
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
  height: 300px;
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

.container h1{
  margin-top: 2%;
  margin-bottom: 1%;
  text-align: left;
}

.container h1 a{
  color:#797979;
   text-decoration:none; 
}

.container h1 a:hover{
  color: black;
}


</style>

