<template>

    <div class="container">

      <!--  Este es el navbar-->
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Dela Cream</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

  
    <Slider></Slider>
  <!--  Este es el navbar-->

  <div class="row" id="listOfProducts">
    <div class="col-md-4"  v-for="article in displayedArticles">    
      <div class="card">

        <div class="inner">
          <a :href="'/product/show/'+ article.id">
            <img :src="article.imageurl"  id="profilePicture">
          </a>
        </div>

        <div class="card-body">
          <h5 class="card-title"> {{article.title}}</h5>
          <strong> {{article.price}} Bs</strong>
          <p>{{article.description}}</p>
        </div>
      </div>
    </div>


          <div class="btn-group col-md-2 offset-md-5">
        <button
          type="button"
          class="btn btn-sm btn-outline-secondary"
          v-if="page != 1"
          @click="page--"
        ><<</button>
        <button
          type="button"
          class="btn btn-sm btn-outline-secondary"
          v-for="pageNumber in pages.slice(page-1, page+5)"
          @click="page = pageNumber"
          :key="pageNumber"
        >{{pageNumber}}</button>
        <button
          type="button"
          @click="page++"
          v-if="page < pages.length"
          class="btn btn-sm btn-outline-secondary"
        >>></button>
      </div>

      








    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      page: 1,
      perPage: 6,
      pages: []
    };
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts() {
       this.axios.get(`product/show/all`)
        .then((response) => {
           // console.log(response.data.products)
          this.articles=response.data.products
          console.log(this.listOfProducts)
        })
        .catch((e)=>{
          console.log('error' + e);
        })
    },
    setArticles() {
      let numberOfPages = Math.ceil(this.articles.length / this.perPage);
      for (let i = 1; i <= numberOfPages; i++) {
        this.pages.push(i);
      }
    },
    paginate(articles) {
      let page = this.page;
      let perPage = this.perPage;
      let from = (page * perPage) - perPage;
      let to = (page * perPage);
      return articles.slice(from, to);
    }
  },
  watch: {
    articles(){
      this.setArticles();
    }
  },
  computed: {
    displayedArticles: function () {
      return this.paginate(this.articles);
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

btn-group{
  display: flex;
  justify-content: center;
}
</style>