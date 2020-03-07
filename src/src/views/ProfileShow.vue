<template>
	<div>
		<Navbar></Navbar>

		<div class="container" id="profile-info">
    		<div class="row justify-content-md-center">
      			<div class="col-md-8" id="UserInformation">
      				<div class="card">

      					<div class="card-header bg-primary">
            				<h3 class="card-title text-white">Profile</h3>
          				</div>

          				<div class="card-body text-center">
          					<div class="form-group" id="NameInput">
				      			<input class="form-control" type="text" v-model="user.name+' '+user.lastName" disabled>
				    		</div>

				    		<div class="form-group" id="EmailInput">
				      			<input class="form-control" type="text" v-model="user.email" disabled>
				    		</div>

				    		<div class="form-group" id="PhoneInput">
				      			<input class="form-control" type="text" v-model="user.phone" disabled>
				    		</div>

				    		<div class="form-group" id="AddressInput">
				      			<input class="form-control" type="text" v-model="user.addres" disabled>
				    		</div>

          				</div>



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
    data() {
    return {
    	user:{
    		name:'Hermes',
    		lastName:'Sanchez',
    		email:'1@1.com',
    		phone:'04140179088',
    		addres:'La candelaria'
    	}
    }
	}
}


</script>