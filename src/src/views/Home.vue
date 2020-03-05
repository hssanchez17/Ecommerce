<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="padre">
        <p>The best place to eat the best ice cream</p>
        
      </div>
  </div>

    <div class="container" id="container">
        <h1>New merchandise</h1>

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
body{
  margin:0;
  padding: 0;
  font-family: sans-serif;  
}
#profilePicture{
  width: 100%; 
  height: 300px;
}

.padre{
  background: #ccc;
  display: table;
  height: 600px;
  margin: 2rem auto;
  text-align: center;
  width: 100%;
  background-image: url('https://previews.123rf.com/images/andreadonetti/andreadonetti1603/andreadonetti160300055/54336392-display-of-assorted-ice-creams-in-metal-tubs-in-a-shop-or-ice-cream-parlour.jpg');
}

.padre p{
  background-size: 100% 100%;
  background-color: rgba(0,0,0,0.5);
  display: table-cell;
  font-size: 1.4rem;
  margin: 0;
  padding: 0 1rem;
  vertical-align: middle;
  color:white;
}



</style>

