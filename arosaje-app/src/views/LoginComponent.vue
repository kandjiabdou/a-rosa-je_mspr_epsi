<template>
  <div class="containnerform">
    <div class="bloc">

      <div class="form">
        <img src="https://media.istockphoto.com/id/536037199/fr/vectoriel/main-tenant-plante-logo-concept-de-croissance-vector-illustration.jpg?s=612x612&w=0&k=20&c=4H35vhMOuQ90StwU-d7WXmFhrqKfQH5AfKTjrJHlaXo=" alt="logo"/>

      <form  @submit.prevent="onSubmit" :validation-schema="schema" >
        <div class="form-group" >
          <h3 class="titre"> Connectez-vous !</h3><br>
          <label for="username">Email</label>
          <Field  type="email"  v-model="email"  name="email" class="form-control" />
          <ErrorMessage name="email" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="password">Mot de passe</label><br>
          <Field type="password" id="password" v-model="password" name="password"  class="form-control" />
          <ErrorMessage name="password" class="error-feedback" />
        </div>


        <div class="form-group">
          <button class="btnc  btn-block" type="submit"  onclick="window.location.href = '/auth2';" >

            <span>Connexion</span>
          </button>
         <br><a class="text1" href="#"> Mot de passe oublié ?</a>
        </div>

        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
      </form>
    </div>
      <div class="text">

          <div class="bloci">

            <p>Vous n'avez pas de compte inscrivez-vous pour accéder à nos services</p>
            <div class="mybtn">
              <button  onclick="window.location.href = '/register';" class="btn  btn-block">
            <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
            ></span>

                <span>Inscription</span>

              </button>

            </div>

          </div>


      </div>
    </div>
  </div>

</template>

<script>
import {  Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import axios from 'axios';

export default {
  name: "LoginComponent",
  components: {
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      email: yup.string().required("Veiller entrer votre identifiant"),
      password: yup.string().required("Veiller entrer votre mot de passe"),
    });

    return {
      loading: false,
      message: "",
      schema,
      email: '',
      password: ''
    };
  },
  methods: {
    async onSubmit(){
      try {
        // Envoyer la requête d'authentification à l'API
        const response = await axios.post('http://localhost:3000/login', {
          email: this.email,
          mdp: this.password
        });
        // Traiter la réponse de l'API

        const data = response.data
        console.log(data)
        if (data['status'] != 400 || data['success']){
          // Enregistrer le jeton d'authentification dans le stockage local ou dans un cookie
          localStorage.setItem('authToken', data.token);
          console.log(data.token)

          // Rediriger l'utilisateur vers la page suivante
          //this.$router.push('/profil');
          // Rediriger l'utilisateur vers la page suivante
          this.$router.push('/profil');
        } else{
          // Afficher un message d'erreur à l'utilisateur
          alert(data.message);
        }
      } catch (error) {
        alert(error.message)
      }
    }
  }



};
</script>

<style>



.containnerform{
  margin:auto;
  width: 50%;
  height: 80%;
}
.bloc{
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  box-shadow: 10px 5px 5px gray ;
  height: 500px;
  width: 700px;
}
.form{
  margin-right: 70px !important;
  width: 500px;
  margin-top: 20px;
}
.text{
  width:80%;
  height:100%;
  background-color: forestgreen;
}
.bloci{
  margin-top: 150px;
  text-align:center ;
  font-size: 18px;
  padding: 20px;

}

.mybtn button{
  width:30vh;
  margin:auto;
  background-color: white;

}
.form img{
  width: 100px;
  height: 100px;
  margin-left:80px;
}
.text p{

  color:white;
}
.titre{
margin-left:50px;

}
.btnc{
  background-color: forestgreen;
  height: 40px;
  color: white;
}
@media screen and (max-width: 756px){
  .containnerform{
    height: 100vh;
    width:40vh;
  }
  .bloc{
    width:300px;
    height:800px;
    display:flex;
    flex-direction:column ;
    margin-left: 10px;
    margin-top: 20px;
  }
  .form{
    margin-right: 100px !important;
    width: 280px;
    margin-top: 20px;
  }

  .text{
    width:100%;
    height:50%;
    background-color: forestgreen;
  }
.text1 a{
  color:white;

}

  img {
    width: 100px;
    height: 100px;
    margin-left: 150px;
  }
}


</style>