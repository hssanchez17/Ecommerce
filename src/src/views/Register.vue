<template>
  <div class="container">
    <div class="row row justify-content-md-center">
      <div class="col-md-8">
        <div class="card">

          <div class="card-header bg-primary">
            <h3 class="card-title text-white">Register</h3>
          </div>

          <div class="card-body text-center">

            <div class="form-group" id="NameInput">
                <input   
                  class="form-control"
                  type="text" 
                  placeholder="Enter your name" 
                  v-model="$v.userRegister.name.$model"  
                  :class="{'is-invalid':$v.userRegister.name.$error,'is-valid':!$v.userRegister.name.$invalid}">

                <span class="invalid-feedback" v-if="!$v.userRegister.name.required">
                  This field cannot be empty.
                </span>
            </div>

            <div class="form-group" id="LastNameInput">
                <input   
                  class="form-control"
                  type="text" 
                  placeholder="Enter your last name" 
                  v-model="$v.userRegister.lastName.$model"  
                  :class="{'is-invalid':$v.userRegister.lastName.$error,'is-valid':!$v.userRegister.lastName.$invalid}">

                <span class="invalid-feedback" v-if="!$v.userRegister.lastName.required">
                  This field cannot be empty.
                </span>
            </div>

            <div class="form-group" id="EmailInput">
                <input   
                  class="form-control"
                  placeholder="Ingrese su Email" 
                  id="emailRegister" 
                  v-model.trim="$v.userRegister.email.$model" 
                  :class="{'is-invalid':$v.userRegister.email.$error,'is-valid':!$v.userRegister.email.$invalid}" v-on:keyup="submitEmail=false">

                  <span class="invalid-feedback" v-if="$v.userRegister.email.required && !submitEmail ">
                    Ingrese un email valido
                  </span>   
            </div>

            <div class="form-group" id="PasswordInput">
              <input 
              class="form-control"
              type="password" 
              id="passwordRegister" 
              placeholder="Ingrese su Contraseña"  
              v-model.trim="$v.userRegister.password.$model" 
              :class="{'is-invalid':$v.userRegister.password.$error,'is-valid':!$v.userRegister.password.$invalid}">
            


              <span  class="valid-feedback">Su contraseña coinciden</span>
              <span  class="invalid-feedback"  
              v-if="!$v.userRegister.password.minLength">
                La contraseña debe de ser minimo de 6
              </span> 
              <span  
              class="invalid-feedback"  
              v-if="!$v.userRegister.password.required">
                La contraseña no puede ser vacio
              </span> 
              <span  class="invalid-feedback"  v-if="!$v.userRegister.password.sameAsPassword">La contraseñas deben de ser iguales</span> 
            </div>

            <div class="form-group" id="PasswordValidationInput">
              <input 
              class="form-control"
              type="password" 
              id="input-horizontal" 
              placeholder="Repita su contraseña" 
              v-model.trim="$v.userRegister.repeatPassword.$model" 
              :class="{'is-invalid':$v.userRegister.repeatPassword.$error,
              'is-valid':(userRegister.password!='') ? !$v.userRegister.repeatPassword.$invalid:''}">

              <span  class="valid-feedback" >Su contraseña coinciden</span>
              <span  class="invalid-feedback" v-if="!$v.userRegister.repeatPassword.sameAsPassword">
                La contraseñas deben de ser iguales
              </span> 
            </div>

            <div class="form-group" id="AddressInput">
                <input   
                  class="form-control"
                  type="text" 
                  placeholder="Enter your address" 
                  v-model="$v.userRegister.address.$model"  
                  :class="{'is-invalid':$v.userRegister.address.$error,'is-valid':!$v.userRegister.address.$invalid}">

                <span class="invalid-feedback" v-if="!$v.userRegister.address.required">
                  This field cannot be empty.
                </span>
            </div>


            <div class="form-group" id="PhoneInput">
                <input   
                  class="form-control"
                  type="text" 
                  placeholder="Enter your phone" 
                  v-model="$v.userRegister.phone.$model"  
                  :class="{'is-invalid':$v.userRegister.phone.$error,'is-valid':!$v.userRegister.phone.$invalid}">

                <span class="invalid-feedback" v-if="!$v.userRegister.phone.required">
                  This field cannot be empty.
                </span>

                <span class="invalid-feedback" v-if="!$v.userRegister.phone.integer">
                  This field should be integer.
                </span>
            </div>

            <button class="btn btn-success" @click="register()">Upload Post</button>



      </div>


        </div>
      </div>
    </div>
  </div>



</template>


<script>
  import { required, minLength, between, email,sameAs,integer} from 'vuelidate/lib/validators'
  export default{
    data(){
      return {
        userRegister:{
                name:'',
                lastName:'',
                email:'',
                phone:'',
                password:'',
                repeatPassword:'',
                address:''
            },
            submitEmail: false,
      }
    },

    validations:{
          userRegister:{
            name: {required},
            lastName: {required},
            address:{required},
            phone:{required,integer},

            email:{
                required,
                email,
                isUnique(){
                  if(this.submitEmail)return false
                  else return true
              }
            },

            password:{
              required,
              minLength:minLength(6),
              sameAsPassword:sameAs('repeatPassword')
            },

            repeatPassword:{
              required,
              minLength:minLength(6),
              sameAsPassword:sameAs('password')
            },


          }
      },

    methods:{
      register(){
            this.$v.$touch()
            if (!this.$v.$invalid) {
              console.log('hola')
              this.axios.post('register', this.userRegister)
              .then(res => {
                alert('Successful registration can login')
                this.userRegister.name=''
                this.userRegister.email=''
                this.userRegister.password=''
                this.userRegister.repeatPassword=''
                this.userRegister.address=''
              })
              .catch( e => {
                this.submitEmail=true   
                console.log(e)
              })
            }    
          }
    }
  }

</script>