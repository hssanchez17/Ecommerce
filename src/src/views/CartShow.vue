<template>
  <div class="home">
  	<div class="container">
    	<div class="row justify-content-center">
        	<div class="col-md-9">
            	<div class="card">
                	<h1 class="card-header">Cart</h1>

                	<div class="card-body">
                		<table class='table table-striped'>
                			<thead>
                            	<tr>
                            		<th scope="col">Id</th>
                                    <th scope="col">Product</th>
                             	    <th scope="col">Description</th>
                                    <th scope="col">Quantity</th>
                          	      	<th scope="col">Price</th>
                                </tr>
                            </thead>
                            	<tr v-for="product in listOfProducts">
                            		<td>{{product.id}}</td>
                            		<td>
                            			<img :src="product.imageurl"  id="productPicture">
                            		</td>
                            		<td>{{product.description}}</td>
                            		<td>{{product.quantity}}</td>
                            		<td>{{product.price}}</td>
                            	</tr>
                			
                		</table>
                		
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
},
* {
  box-sizing: border-box;
}
</style>

