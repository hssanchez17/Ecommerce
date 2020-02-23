<template>
<div>
	<div class="container">
  		<div class="row">

  			<div class="col-md-8" id="leftColumn">
  				<div class="card">
              <img :src="product.imageurl" class="img-thumbnail" id="image">
  				</div>
  			</div>

        <div class="col-md-4" id="rightColumn">

          <div class="card">

            <div class="card-body">
              <h3 class="card-title"> {{product.title}}</h3> 
              <h1> Bs {{product.price}}</h1>
              <h3>Stock: {{product.stock}}</h3>

              <div>
                <p>{{product.description}}</p>
              </div>

              <div id="buttons">
                <button class="btn btn-outline-dark">Buy</button>
                <button class="btn btn-outline-dark" @click="addToCart()" v-if="permissionToAddToCart">Add to cart</button>
              </div>
            </div>            
          </div>

          <input id="QuantityInput" v-if="permissionToAddProductToCart"    class="form-control" type="text" placeholder="Enter the quantity" v-model="productToCart.quantity">
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
      product:{
      	title:'',
      	description:'',
      	price:'',
      	stock:'',
      	imageUrl:''
      },

      productToCart:{
        quantity:'',
        productId:this.$route.params.id
      },

      permissionToAddProductToCart:false,
      permissionToBuyProduct:false,

      id:this.$route.params.id,
      permissionToAddToCart:true
    }
  },

  mounted(){
  	this.getProduct()
  },

  methods:{
      getProduct(){
        this.axios.get(`product/show/${this.id}`)
        .then((response) => {
          this.product= response.data;
        })
        .catch((e)=>{
          console.log('error' + e);
        })
      },

      addToCart(){
        console.log('hola')
        this.axios.post(`cart/register-product/${this.id}`)
        .then((response) => {
          this.permissionToAddToCart=false
        })
        .catch((e)=>{
          console.log('error' + e);
        })
      }
    }

}	


</script>	

<style>

#leftColumn{
  width:80%;  
  height: auto;
  padding: 20px;
}


#rightColumn{
  padding: 20px;
}

.ProductTitle{
  margin-bottom: 50px;
  background:black;
}


</style>