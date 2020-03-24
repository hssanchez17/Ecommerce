<template>
  <div>

    <div class="container">
    <div class="row" id="listOfProducts">
    <div class="col-md-4"  v-for="product in listOfProducts">    
      <div class="card">

        <div class="inner">
          <a :href="'/product/show/'+ product.id">
            <img :src="product.imageurl"  id="profilePicture">
          </a>
        </div>

        <div class="card-body">
          <h5 class="card-title"> {{product.title}}</h5>
          <strong> {{product.price}} Bs</strong>
          <p>{{product.description}}</p>
        </div>
      </div>
    </div>
  </div> 
      </div> 
  </div>  

  </div>
</template>