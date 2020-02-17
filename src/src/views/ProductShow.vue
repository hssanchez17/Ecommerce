<template>
<div>
	<div class="container">
  		<div class="row row justify-content-md-center">
  			<div class="col-md-8">
  				<div class="card">

  					<div class="card-header d-flex justify-content-between align-items-center">
  						<h2>{{product.title}}-{{product.price}} BS</h2>

			          <div id="buttons">
			            <button class="btn btn-info" id="btn-buy">Buy</button>
			            <button class="btn btn-success" id="btn-car">Add to Car</button>
			          </div>  


  						
  					</div>

  					<div class="card-body">
  						<div class="text-center">
                			<img :src="product.imageurl" class="img-thumbnail" id="image">
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
      product:{
      	title:'',
      	description:'',
      	price:'',
      	stock:'',
      	imageUrl:''
      },
      id:this.$route.params.id,
    }
  },

  mounted(){
  	this.getProduct()
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
      }
    }

}	


</script>	