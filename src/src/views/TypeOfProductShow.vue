<template>
	<div>
		<Navbar></Navbar>
		<div class="container" id="profile-info">
    		<div class="row justify-content-md-center">
      			<div class="col-md-8" id="UserInformation">
      				<div class="card">
      					<div class="card-header bg-primary">
            				<h3 class="card-title text-white">{{typeOfProduct.title}}</h3>
          				</div>

          				<div class="card-body text-center" v-if="!permissionToUpdate">
          					<div class="form-group" id="NameInput">
				      			<input class="form-control" type="text" v-model="typeOfProduct.title" disabled>
				    		</div>

				    		<blockquote class="form-group" id="NameInput">
				      			<input class="form-control" type="text" v-model="typeOfProduct.description" disabled>  
				    		</blockquote>

				    		<button class="btn btn-success" @click="getPermissionsToUpdate()">Update</button>
          				</div>

          				
          			<div  class="card-body text-center"  v-if="permissionToUpdate">

          				<div class="card-body text-center">

          					<div class="form-group" id="TitleInput">
				      			<input  
              						class="form-control"
				            		type="text" 
				            		placeholder="Title" 
				            		v-model="$v.typeOfProductToUpdate.title.$model"  
				            		:class="{'is-invalid':$v.typeOfProductToUpdate.title.$error,'is-valid':!$v.typeOfProductToUpdate.title.$invalid}">

				              	<span class="invalid-feedback" v-if="!$v.typeOfProductToUpdate.title.required">
				              		This field cannot be empty.
				              	</span>
				  			</div>

				  			<div class="form-group" id="DescriptionInput">
					            <textarea 
					            	class="form-control"
					              	type="text" 
					              	placeholder="Enter the Description"
					              	v-model="$v.typeOfProductToUpdate.description.$model"  
						            :class="{'is-invalid':$v.typeOfProductToUpdate.description.$error,'is-valid':!$v.typeOfProductToUpdate.description.$invalid}">
					              ></textarea>

				              	<span class="invalid-feedback" v-if="!$v.typeOfProductToUpdate.description.required">
					              This field cannot be empty.
					        	  </span>
				    		</div>
				    		
</div>
						<button class="btn btn-warning" @click="update()">Update</button>
                    </div>
                    


										

						</div>
 					</div>          		
 				</div>	
      		</div>
    	</div>  
  	</div>

</template>

<script>
	import {required} from 'vuelidate/lib/validators'
	import Navbar from '@/components/Navbar.vue'
export default{
    components: {Navbar},
    data(){
    	return{
    		typeOfProduct:{
      			title:'',
      			description:'',
      		},

      		typeOfProductToUpdate:{
      			title:'',
      			description:'',
      		},
      		permissionToUpdate:false,
    		
    		id:this.$route.params.id
    	}
    },
    validations:{
    	typeOfProductToUpdate:{
    		title:{required},
    		description:{required}
    	}
    },
    mounted(){
  	this.getTypeOfProduct()
  	},

  	methods:{
      getTypeOfProduct(){
        this.axios.get(`/type-of-product/show/${this.id}`)
        .then((response) => {
          this.typeOfProduct= response.data;
          console.log(this.typeOfProduct)
        })
        .catch((e)=>{
          console.log('error' + e);
        })
      },


      getPermissionsToUpdate(){
      	this.typeOfProductToUpdate=this.typeOfProduct;
      	this.permissionToUpdate=true;

      },

      update(){
      	 this.axios.put(`/type-of-product/update/${this.id}`,this.typeOfProductToUpdate)
        .then((response) => {
          this.typeOfProduct.title=this.typeOfProductToUpdate.title
          this.typeOfProduct.description=this.typeOfProductToUpdate.description
           alert('typeOfProduct updated')
           this.permissionToUpdate=false
        })
        .catch((e)=>{
          console.log('error' + e);
        })
      }
   }
  }
</script>