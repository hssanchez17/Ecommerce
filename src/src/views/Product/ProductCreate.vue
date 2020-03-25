<template>
  <div>
	<div class="container">
    <Navbar></Navbar>

		<div class="row row justify-content-md-center">
			<div class="col-md-8">
				<div class="card">

					<div class="card-header bg-info">
            <h3 class="card-title text-white">Manage Products</h3>
          </div>

          <div class="card-body text-center">

            <div class="form-group" id="TitleInput">
				      <input   
                class="form-control"
				        type="text" 
				        placeholder="Title for the product" 
				        v-model="$v.product.title.$model"  
				        :class="{'is-invalid':$v.product.title.$error,'is-valid':!$v.product.title.$invalid}">

				      <span class="invalid-feedback" v-if="!$v.product.title.required">This field cannot be empty.</span>
				    </div>

            <div class="form-group" id="DescriptionInput">
			        <textarea
			           class="form-control"
			           type="text" 
			           placeholder="Enter the Description"
			           v-model="$v.product.description.$model"  
				        :class="{'is-invalid':$v.product.description.$error,'is-valid':!$v.product.description.$invalid}"></textarea>

			       <span class="invalid-feedback" v-if="!$v.product.description.required">This field cannot be empty.</span>
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
                        @change="onFileSelected" 
                        class="custom-file-input"
                        :class="{'is-invalid':$v.product.imageUrl.$error,'is-valid':!$v.product.imageUrl.$invalid}"
                        >


                        <label class="custom-file-label" for="inputGroupFile" >Choose file</label>
                        <span class="invalid-feedback" v-if="!$v.product.imageUrl.required">This field cannot be empty.</span>
                    </div>
                  </div>

                  <div>
                    <div class="form-check form-check-inline">
                      <div v-for="(typeOfProduct,index) in listOfTypeOfProducts" :key="index">
                        <div id="prueba">
                          <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="checkedNames" :value="typeOfProduct.id" >
                          <label class="form-check-label">{{typeOfProduct.title}}</label>
                        </div>
                      </div>
                    </div>
                  </div>


            			 <button class="btn btn-success" @click="createProduct()">Upload Post</button>
          			</div>

          		</div>
              <span>Checked names: {{ checkedNames }}</span>


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
     	product:{
     		title:'',
     		description:'',
     		price:'',
     		stock:'',
     		imageUrl:''
     	},

      listOfTypeOfProducts:{  
          id:'',
          title:'',
          description:''
      },
      checkedNames: []
    };
  },

  mounted(){
      this.getAllTypeOfProducts()
  },

  validations:{
  	product:{
  		title:{required},
  		description:{required},
  		price:{required,integer},
  		stock:{required,integer},
  		imageUrl:{required}
  	}
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

       onFileSelected(event){
        this.product.imageUrl=event.target.files[0]
      },
      createProduct(){
        this.$v.$touch()
        if (!this.$v.$invalid) {
        	const fd=new FormData();
        	fd.append('title',this.product.title)
        	fd.append('description',this.product.description)
        	fd.append('price',this.product.price)
        	fd.append('stock',this.product.stock)
        	fd.append('imageUrl',this.product.imageUrl)
          fd.append('listOfTypeOfProducts',this.checkedNames)

        	this.axios.post('product/create',fd)
          	.then(res => {
            	alert('the product was created correctly')
           	})
          	.catch( e => {
            	console.log(e)  
          	})

         }    
      },
    }
};

</script>

<style>
  
  #prueba{
    margin: 10px;
  }
</style>