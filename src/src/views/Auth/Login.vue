<template>
<div>
   <Navbar></Navbar>
	<div class="container">
    <div class="row row justify-content-md-center">
      <div class="col-md-8">
        <div class="card">

          <div class="card-header bg-primary">
            <h3 class="card-title text-white">Login</h3>
          </div>

          <div class="card-body text-center">




            <div class="form-group" id="EmailInput">
                <input   
                class="form-control"
                   placeholder="Ingrese su Email" 
                id="emailLogin"     
                v-model.trim="userLogin.email">
            </div>

            <div class="form-group" id="PasswordInput">
              <input 
              placeholder="Ingrese su Contraseña" 
                class="form-control"
                id="passwordLogin"  
                v-model.trim="userLogin.password" 
                type="password">
            
            </div>

            <button class="btn btn-success" @click="login()">Login</button>



      </div>


        </div>
      </div>
    </div>
  </div>
	</div>
</template>


<script>
  import Navbar from '@/components/Navbar.vue'
export default{
    components: {Navbar},
		data(){
			return {
				userLogin:{
          			email:'',
          			password:'',
        		}
			}
		},
		methods:{
			login(){
        		this.axios.post('login', this.userLogin)
        		.then(res => {
                this.$cookie.set('token',true, 1);
                this.$cookie.set('user',JSON.stringify(res.data.user),1)
                this.$router.push({ path: `/` })
        		})
        		.catch( e => {
                alert('Password and email do not match')
          			console.log(e.response.data.error)
        		})
      		},
		}
	}
</script>