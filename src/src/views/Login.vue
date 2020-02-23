<template>
<div>
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

            <button class="btn btn-success" @click="login()">Upload Post</button>



      </div>


        </div>
      </div>
    </div>
  </div>
	</div>
</template>


<script>
export default{
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