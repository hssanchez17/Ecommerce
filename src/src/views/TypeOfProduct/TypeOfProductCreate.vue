<template>
	<div>
		

		<div class="container">
			<Navbar></Navbar>
			<div class="row row justify-content-md-center">
				<div class="col-md-8">
					<div class="card">

						<div class="card-header bg-info">
            				<h3 class="card-title text-white">Manage Type Of Products</h3>
          				</div>

          				<div class="card-body text-center">

          					<div class="form-group" id="TitleInput">
				      			<input  
              						class="form-control"
				            		type="text" 
				            		placeholder="Title" 
				            		v-model="$v.typeOfProduct.title.$model"  
				            		:class="{'is-invalid':$v.typeOfProduct.title.$error,'is-valid':!$v.typeOfProduct.title.$invalid}">

				              	<span class="invalid-feedback" v-if="!$v.typeOfProduct.title.required">
				              		This field cannot be empty.
				              	</span>
				  			</div>

				  			<div class="form-group" id="DescriptionInput">
					            <textarea 
					            	class="form-control"
					              	type="text" 
					              	placeholder="Enter the Description"
					              	v-model="$v.typeOfProduct.description.$model"  
						            :class="{'is-invalid':$v.typeOfProduct.description.$error,'is-valid':!$v.typeOfProduct.description.$invalid}">
					              ></textarea>

				              	<span class="invalid-feedback" v-if="!$v.typeOfProduct.description.required">
					              This field cannot be empty.
					        	  </span>
				    		</div>
				    		<button class="btn btn-success" @click="createTypeOfProduct()">Create</button>
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
    			typeOfProduct:{
     		title:'',
     		description:''
     	}   

    		}
	},
	validations:{
	  	typeOfProduct:{
	  		title:{required},
	  		description:{required}
	  	}
  	},

  	methods:{
  		createTypeOfProduct(){
  			this.$v.$touch()
  			if (!this.$v.$invalid) {

  				this.axios.post('/type-of-product/create',this.typeOfProduct)
  				.then(res => {
            		alert('the type of product was created correctly')
           		})
          		.catch( e => {
            		console.log(e)  
          		})
  			}
  		}
  	}
  }


</script>