<template>
  <div class="home">
  	<div class="container">
    	<div class="row justify-content-center">
        	<div class="col-md-12">
            	<div class="card">
                	<h1 class="card-header">Cart</h1>

                	<div class="card-body">
                    <div class="table-responsive">
                		<table class='table table-striped'>
                			<thead>
                            	<tr>
                            		<th scope="col">Id</th>
                                    <th scope="col">Product</th>
                             	      <th scope="col">Description</th>
                                    <th scope="col">Quantity</th>
                          	      	<th scope="col">Price</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            	<tr v-for="product in listOfProducts">
                            		<td>{{product.id}}</td>
                            		<td>
                            			<img :src="product.imageurl"  id="productPicture">
                            		</td>
                            		<td>{{product.description}}</td>
                            		<td>{{product.quantity}}</td>
                            		<td>{{product.price}} </td>
                                <td>
                                  {{totalPrice(product)}}
                                </td>
                                <td>{{product.stock}}</td>
                                <td>
                                  <div id="ButtonsLabel">
                                    <button class="btn btn-success" @click="increaseTheQuantityOfTheProduct(product)" :disabled="product.stock<=product.quantity">Increase</button>
                                
                                  </div>
                                </td>

                                <td>
                                   <button class="btn btn-danger" @click="decreaseTheQuantityOfTheProduct(product)" :disabled="product.quantity<2">Decrease</button>
                                </td>

                                <td>
                                   <button class="btn btn-warning" @click="removeAProductFromTheCart(product)">Remove</button>
                                </td>

                                <td>
                                   <button class="btn btn-info" @click="buyAProduct(product)">Buy</button>
                                </td>
                                  
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

export default {
  name: 'Home',


  data() {
    return {
    	listOfProducts:{	
    		title:'',
    		description:'',
    		quantity:'',
    		price:''
    	}
    }
  },

  mounted(){
  	this.getCart()
  },

  methods:{
  	getCart(){
  		this.axios.get(`cart/show`)
  		.then((response) => {
          this.listOfProducts= response.data.cart;
        })
        .catch((e)=>{
          console.log('error' + e);
        })
      
  	},

    increaseTheQuantityOfTheProduct(product){

      this.axios.post(`cart/increase-product/${product.id}`)
      .then((response) => {
          product.quantity++
        })
        .catch((e)=>{
          console.log('error' + e);
        })
    },

    decreaseTheQuantityOfTheProduct(product){
      this.axios.post(`cart/decrease-product/${product.id}`)
      .then((response) => {
          product.quantity--
        })
        .catch((e)=>{
          console.log('error' + e);
        })

    },

    removeAProductFromTheCart(product){
      this.axios.post(`cart/remove-product/${product.id}`)
      .then((response) => {
        alert('Your product has been removed')
      })
      .catch((e)=>{
        console.log('error' + e);
      })

    },

    totalPrice(product){
      return product.price*product.quantity
    },

    buyAProduct(product){
      this.axios.post(`order/buy/product/from-cart/${product.id}`,product)
      .then((response) => {

        alert('Your bought the product')
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

