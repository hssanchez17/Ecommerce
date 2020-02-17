<template>
  <div>

    <div class="container">
     <div class="row" id="listOfUsers">
        <div class="col-md-4"  v-for="product in listOfProducts">
          
          <div class="card">
            <!--<a :href="'/user/show/'+ user.id">-->
              <img :src="product.imageUrl"  id="profilePicture">
              <div class="card-body">
                <h5 class="card-title"> {{product.title}}</h5>
              </div>
            <!--</a>-->
          </div>
        </div>
      </div> 
  </div>  

  </div>
</template>