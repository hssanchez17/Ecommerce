<template>

    <div class="container">

       <Navbar></Navbar>

       <h1>Products</h1>
       <Pagination :articles="products"></Pagination>

    </div>  
</template>

<script>
   import Navbar from '@/components/Navbar.vue'
   import Pagination from '@/components/Pagination.vue'
export default {
   components: {Navbar,Pagination},
  data() {
    return {
      products: []
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
       this.axios.get(`product/show/all`)
        .then((response) => {
          this.products=response.data.products
        })
        .catch((e)=>{
          console.log('error' + e);
        })
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.inner{
  width: 100%; 
  height: 250px;
  overflow: hidden;
}
.inner #profilePicture{
  transition: all 1.5s ease;
}

#profilePicture{
  width: 100%;
  height: 100%;
}

#profilePicture:hover{
  transform: scale(1.5);
}

.container .container2{
  display:flex;
  flex-direction:row;
  justify-content:space-between;
}


.container h1{
  margin-top: 2%;
  margin-bottom: 1%;
}

.container h1 a,.container h4 a{
   color:#797979;
   text-decoration:none; 
   transition: all 1.5s ease;
}

.container h1 a:hover,.container h4 a:hover{
  color: black;
}

.container .container2 h4{  
  text-align: center;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
}







.pagination{
  display: flex;
  justify-content: center;
  align-items: center;

}

</style>