<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
    	<div class="row justify-content-center">
        	<div class="col-md-12">
            	<div class="card">
                	<h1 class="card-header">Orders</h1>
                	<div class="card-body">
                		<div class="table-responsive">
                			<table class='table table-striped'>
                				<thead>

                				<tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Quantity</th>
                                </tr>
                            </thead>

                            <tr v-for="(product,index) in listOfOrders" :key="index"> 
                            		<td>
                            			<img :src="product.imageurl"  id="productPicture">
                            		</td>
                            		<td>{{product.quantity}}</td>
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
	import { required,integer} from 'vuelidate/lib/validators'

	import Navbar from '@/components/Navbar.vue'
export default{
    components: {Navbar},
    data() {
    	return {   
    		listOfOrders:{
    			title:'',
    		description:'',
    		quantity:'',
    		price:''

    		}
    	};
    },

    mounted(){
  		this.getOrders()
  	},

  	methods:{
  	getOrders(){
	  		this.axios.get(`/order/getAll`)
	  		.then((response) => {
	  			this.listOfOrders=response.data.orders
	          console.log(response.data.orders)
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

