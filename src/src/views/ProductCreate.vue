<template>
	<div class="container">
		<div class="row row justify-content-md-center">
			<div class="col-md-8">
				<div class="card">
					<div class="card-header bg-primary">
              			<h3 class="card-title text-white">Manage Products</h3>
          			</div>

          			<div class="card-body text-center">

          				<div class="form-group" id="TitleInput">
				            <input 
				            class="form-control"
				            type="text" 
				            placeholder="Title for the image" 
				            v-model="$v.product.title.$model"  
				            :class="{'is-invalid':$v.product.title.$error,'is-valid':!$v.product.title.$invalid}">

				              <span class="invalid-feedback" v-if="!$v.product.title.required">
				              	This field cannot be empty.
				              </span>
				        </div>

            			<div class="form-group" id="DescriptionInput">
			              <textarea
			              class="form-control"
			              type="text" 
			              placeholder="Enter the Description"
			              v-model="$v.product.description.$model"  
				          :class="{'is-invalid':$v.product.description.$error,'is-valid':!$v.product.description.$invalid}">
			              ></textarea>

			              	<span class="invalid-feedback" v-if="!$v.product.description.required">
				              	This field cannot be empty.
				        	</span>
				        </div>

            			<div class="form-group" id="PriceInput">
			              <input 
			              class="form-control"
			              type="text" 
			              placeholder="Enter the price" 
			              v-model="$v.product.price.$model"  
				          :class="{'is-invalid':$v.product.price.$error,'is-valid':!$v.product.price.$invalid}">

				          <span class="invalid-feedback" v-if="!$v.product.price.required">
				              	This field cannot be empty.
				        	</span>

				        	<span class="invalid-feedback" v-if="!$v.product.price.integer">
				              	This field should be integer.
				        	</span>
            			</div>

            			<div class="form-group" id="StockInput">
			              <input 
			              class="form-control"
			              type="text" 
			              placeholder="Enter the stock"
			              v-model="$v.product.stock.$model"  
				          :class="{'is-invalid':$v.product.stock.$error,'is-valid':!$v.product.stock.$invalid}">

				          <span class="invalid-feedback" v-if="!$v.product.stock.required">
				              	This field cannot be empty.
				        	</span>

				        	<span class="invalid-feedback" v-if="!$v.product.stock.integer">
				              	This field should be integer.
				        	</span>
            			</div>

            			<div class="form-group" id="ImageInput">
              				<div class="input-group">
			                  	<input 
			                  	type="file"
			                  	class="custom-file-input">

                  				<label class="custom-file-label" for="inputGroupFile" >Choose file</label>
              				</div>
            			</div>


            			<button  type="button"  class="btn btn-success">Upload</button>
          			</div>

          		</div>


				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	import { required,integer} from 'vuelidate/lib/validators'

	export default {
  data() {
    return {
     	product:{
     		title:'',
     		description:'',
     		price:'',
     		stock:'',
     		imageUrl:''
     	}   
    };
  },

  validations:{
  	product:{
  		title:{required},
  		description:{required},
  		price:{required,integer},
  		stock:{required,integer}
  	}
  }
};

</script>