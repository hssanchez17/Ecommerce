s<template>
<div>
	<div class="container">


  <!--  Este es el navbar-->
   <Navbar></Navbar>

  
  <!--  Este es el navbar-->


  		<div class="row">

  			<div id="leftColumn">
  				<div class="card">
              <img :src="product.imageurl" class="img-thumbnail" id="image">
  				</div>
  			</div>

        <div id="rightColumn">

            <div class="card" v-if="!permissionToUpdate">

              <div class="card-body">
                <h3 class="card-title"> {{product.title}}</h3> 
                <h1> Bs {{product.price}}</h1>
                <h3>Stock: {{product.stock}}</h3>

                <div>
                  <p>{{product.description}}</p>
                </div>

                <div class="form-group" id="buttons">
                  <button class="btn btn-outline-dark" v-if="product.stock>0">Buy</button>
                  <button class="btn btn-outline-dark" @click="addToCart()" v-if="permissionToAddToCart">Add to cart</button>
                </div>

                <button class="btn btn-success" @click="clickToUpdate()" v-if="$cookie.get('token') && JSON.parse($cookie.get('user')).rol=='admin'">Update</button>
               
              </div>            
            </div>

            <div class="card" v-if="permissionToUpdate">
              <div class="card-body">

                <div class="form-group" id="TitleInput">

                  <input 
                  class="form-control"
                  type="text" 
                  placeholder="New title for the product" 
                  v-model.trim="$v.productToUpdate.title.$model"  
                  :class="{'is-invalid':$v.productToUpdate.title.$error,'is-valid':!$v.productToUpdate.title.$invalid}"
                  >

                  <span class="invalid-feedback" v-if="!$v.productToUpdate.title.required">Este campo no puede ser vacio</span>
                  <span  class="invalid-feedback"  v-if="!$v.productToUpdate.title.maxLength">El titulo no puedde pasar de 35 caracteres</span> 
                </div>

                <div class="form-group" id="PriceInput">

                  <input 
                  class="form-control"
                  type="text" 
                  placeholder="New Price for the product" 
                  v-model.trim="$v.productToUpdate.price.$model"  
                  :class="{'is-invalid':$v.productToUpdate.price.$error,'is-valid':!$v.productToUpdate.price.$invalid}"
                  >
                  
                  <span class="invalid-feedback" v-if="!$v.productToUpdate.price.required">Este campo no puede ser vacio</span>

                  <span class="invalid-feedback" v-if="!$v.productToUpdate.price.integer">It should be integer</span>

                  <span class="invalid-feedback" v-if="!$v.productToUpdate.price.minValue">It must be greater than zero. </span>
                </div>

                <div class="form-group" id="StockInput">

                  <input 
                  class="form-control"
                  type="text" 
                  placeholder="New Stock for the product" 
                  v-model.trim="$v.productToUpdate.stock.$model"  
                  :class="{'is-invalid':$v.productToUpdate.stock.$error,'is-valid':!$v.productToUpdate.stock.$invalid}"
                  >
                  
                  <span class="invalid-feedback" v-if="!$v.productToUpdate.stock.required">Este campo no puede ser vacio</span>

                  <span class="invalid-feedback" v-if="!$v.productToUpdate.stock.integer">It should be integer</span>

                  <span class="invalid-feedback" v-if="!$v.productToUpdate.stock.minValue">It must be greater than zero. </span>
                

                </div class="form-group" id="DescriptionInput">
                  <textarea
                  class="form-control"
                  placeholder="New Description for the product" 
                  v-model.trim="$v.productToUpdate.description.$model" 
                  :class="{'is-invalid':$v.productToUpdate.description.$error,'is-valid':!$v.productToUpdate.description.$invalid}"
                  ></textarea> 

                 <span class="invalid-feedback" v-if="$v.productToUpdate.description.required">Este campo no puede ser vacio</span> 
                </div>

                <div class="form-group" id="Buttons">
                   <button class="btn btn-success" @click="updateProduct()">Update</button>
                   <button class="btn btn-danger" @click="cancelTheUpdate()">Cancel</button>
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
  import {required,maxLength,integer,minValue} from 'vuelidate/lib/validators'
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

      productToCart:{
        quantity:'',
        productId:this.$route.params.id
      },

      productToUpdate:{
        title:'',
        description:'',
        price:'',
        stock:''
      },

      permissionToAddProductToCart:false,
      permissionToBuyProduct:false,

      permissionToUpdate:false,

      id:this.$route.params.id,
      permissionToAddToCart:true
    }
  },

  validations:{
      productToUpdate:{
        title: {
            required,
            maxLength:maxLength(35)
          },

        price:{
          required,
          integer,
          minValue:minValue(0)
        },

        stock:{
          required,
          integer,
          minValue:minValue(0)
        },
        description:{
          required

        }
      }
     },

  mounted(){
  	this.getProduct(),
    this.getPermissionToAddToCart()
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

      getPermissionToAddToCart(){
        if(this.$cookie.get('token')){
          this.axios.get(`cart/permission-to-add-to-cart/${this.id}`)
          .then((response) => {
            this.permissionToAddToCart=response.data.permission
          })
          .catch((e)=>{
            console.log('error' + e);
          })
        }
      },

      addToCart(){
        if(this.$cookie.get('token')){
          this.axios.post(`cart/register-product/${this.id}`)
          .then((response) => {
            this.permissionToAddToCart=false
          })
          .catch((e)=>{
            console.log('error' + e);
          })
        }

        else alert('please login first')
      },

      cancelTheUpdate(){ 
        this.permissionToUpdate=false

      },

      clickToUpdate(){
        this.productToUpdate.title=this.product.title
        this.productToUpdate.description=this.product.description
        this.productToUpdate.price=this.product.price
        this.productToUpdate.stock=this.product.stock
        this.permissionToUpdate=true
      },

      updateProduct(){

        this.axios.put(`/product/update/${this.id}`,this.productToUpdate)
        .then((response) => {
          this.product.title=this.productToUpdate.title
          this.product.description=this.productToUpdate.description
          this.product.price=this.productToUpdate.price
          this.product.stock=this.productToUpdate.stock
           alert('Product updated')
           this.permissionToUpdate=false
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
  width:68%;  
  height: 500px;  
  background: black;
  margin-right: 2%;
}

#leftColumn .card img{
  width: 100%;
  height: 700px;
}


#rightColumn{
  width: 30%;
}

.ProductTitle{
  margin-bottom: 50px;
  background:black;
}


.row{
  display: flex;
  flex-direction:row; 
  width: 100%;
  margin: auto;
  margin-top:1%; 

}

@media screen and (max-width: 800px){
  #leftColumn{
  width:100%;  
  height: auto;
}

#leftColumn .card img{
  width: 100%;
  height: 350px;
}


#rightColumn{
  margin-top: 3%;
  width: 100%;
}

}



</style>