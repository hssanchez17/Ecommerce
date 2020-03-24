<template>
  <div class="container">
    <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Dela Cream</b-navbar-brand>

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
    <div class="container">


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

  </div>
</template>

<script>

  import Navbar from '@/components/Navbar.vue'
export default{
    components: {Navbar},


  data() {
    return {
        listOfProducts:{    
            title:'',
            description:'',
            price:'',
            stock:''
        }
    }
  },

  mounted(){
    this.getAllProducts()
  },

  methods:{
    getAllProducts(){
      this.axios.get(`product/show/all`)
        .then((response) => {
           // console.log(response.data.products)
          this.listOfProducts=response.data.products
          console.log(this.listOfProducts)
        })
        .catch((e)=>{
          console.log('error' + e);
        })
    }



 
  }
}
</script>


<style>

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

#productPicture{
    width: 90px; 
    height: 90px;
}
</style>

