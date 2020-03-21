<template>
  <div class="home">
    <Navbar></Navbar>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">

                    <div class="card-header">
                      <h1>List Of Products</h1>
                      <a class="btn btn-success" :href="`/product/create`" v-if="$cookie.get('token') && JSON.parse($cookie.get('user')).rol=='admin'">Create A Product</a>
                 </div> 

                    <div class="card-body">
                    <div class="table-responsive">
                        <table class='table table-striped'>
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Stock</th>
                                </tr>
                            </thead>
                                <tr v-for="(product,index) in listOfProducts" :key="index"> 
                                    <td>{{product.id}}</td>
                                    <td><img :src="product.imageurl"  id="productPicture"></td>
                                    <td>{{product.description}}</td>
                                    <td>{{product.price}} </td>
                                    <td>{{product.stock}}</td>

                                  
                                </tr>
                            
                        </table>
                    </div>  
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


#productPicture{
    width: 90px; 
    height: 90px;
}
</style>

