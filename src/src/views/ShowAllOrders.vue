<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
    	<div class="row justify-content-center">
        	<div class="col-md-12">
            	<div class="card">
                	<h1 class="card-header">Orders</h1>
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
    		orders:{

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
	          console.log(response.data.orders)
	        })
	        .catch((e)=>{
	          console.log('error' + e);
	        })
  		}
	}
}
</script>