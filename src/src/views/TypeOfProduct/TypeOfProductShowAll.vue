<template>
	<div>
		<Navbar></Navbar>
		<div class="container">
    	<div class="row justify-content-center">
        	<div class="col-md-12">
            	<div class="card">
                <div class="card-header">
                	<h1>List Of Types Of Products</h1>
                   <a class="btn btn-success" :href="`/type-of-product/create`" 
                    v-if="$cookie.get('token') && JSON.parse($cookie.get('user')).rol=='admin'">Create A Type Of Product</a>
                 </div>   
                	<div class="card-body">
                    <div class="table-responsive">
                		<table class='table table-striped'>
                			<thead>
                            	<tr>
                            		<th scope="col">Id</th>
                            		<th scope="col">title</th>
                             	    <th scope="col">Description</th>
                            	</tr>
                            </thead>

                            <tr v-for="(typeOfProduct,index) in listOfTypeOfProducts" :key="index"> 
                           		<td>{{typeOfProduct.id}}</td>
                           		<td>{{typeOfProduct.title}}</td>
                           		<td>{{typeOfProduct.description}}</td>
                           		<td>
                                   
                                <a class="btn btn-warning" :href="`/type-of-product/show/`+ typeOfProduct.id">Update</a>
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
	import Navbar from '@/components/Navbar.vue'
export default{
    components: {Navbar},
    data(){
    	return{
    		listOfTypeOfProducts:{	
    			title:'',
    			description:''
    		}
    	}
    },

    mounted(){
  		this.getAllTypeOfProducts()
	},
	methods:{
		getAllTypeOfProducts(){
			this.axios.get(`type-of-product/show/all`)
  			.then((response) => {
          		this.listOfTypeOfProducts= response.data.typeOfProducts;
        	})
        	.catch((e)=>{
          		console.log('error' + e);
        	})
		},

		update(id){

		}
	}

}
</script>