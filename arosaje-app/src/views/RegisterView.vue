<template>

  <div class="containnerform">
    <div class="bloc">

      <div class="form">
        <img src="https://e7.pngegg.com/pngimages/293/425/png-clipart-natural-environment-plant-%E4%B8%80%E5%80%8B%E6%96%B0%E4%B8%96%E7%95%8C-%E5%96%9A%E9%86%92%E5%85%A7%E5%9C%A8%E7%9A%84%E5%8A%9B%E9%87%8F-orchids-soil-natural-environment-leaf-logo.png" alt="logoaro"/>
        <form @submit.prevent="submit" :validation-schema="schema">
        <div v-if="!successful">
          <div class="form-group">
            <label for="username">Nom</label>
            <Field name="name" type="text" v-model="nom" class="form-control" />
            <ErrorMessage name="name" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="username">Prenom</label>
            <Field name="prenom" type="text" v-model="prenom" class="form-control" />
            <ErrorMessage name="prenom" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <Field name="email" type="email" v-model="email" class="form-control" />
            <ErrorMessage name="email" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <Field name="password" type="password" class="form-control" v-model="mdp" />
            <ErrorMessage name="password" class="error-feedback" />
          </div>

          <div class="form-group">
            <button  type="submit" class="btn btn-primary btn-block">

              Sign Up
            </button>
          </div>
        </div>
      </form>
        </div>

      <div class="text">

        <div class="bloci">

          <p>Vous n'avez pas de compte inscrivez-vous pour accéder à nos services</p>
          <div class="mybtn">
            <button  onclick="window.location.href = '/login';" class="btn  btn-block" :disabled="loading">
            <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
            ></span>

              <span>Connexion</span>

            </button>

          </div>

        </div>

      <div
          v-if="message"
          class="alert"
          :class="successful ? 'alert-success' : 'alert-danger'"
      >
        {{ message }}
      </div>
    </div>
  </div>
  </div>

</template>

<style>

.containnerform{
  margin:auto;
  width: 50%;
  height: 80%;
}
.bloc{
  margin-top:5px;
  display: flex;
  justify-content: space-between;
  box-shadow: 10px 5px 5px gray ;
  height: 550px;
  
}
.form{
  margin-right: 70px !important;
  width: 550px;
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
a{
  color: white;
}
a :hover{
  color: forestgreen;
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
    height:800px;
    display:flex;
    flex-direction:column ;
  }
  .form{
    margin-right: 100px !important;
    width: 280px;
    margin-top: 20px;
  }

}

</style>

<script>
import {  Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import axios from 'axios';

export default {
  name: "RegisterLogin",
  components: {
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup
          .string()
          .required("Un identifiant est nécessaire!")
          .min(3, "Dois contenir plus de 3 caractéres !")
          .max(20, "Dois contenir au maximum 20 caractéres !"),
      email: yup
          .string()
          .required("Un mail est nécessaire!")
          .email("Email invalid!")
          .max(50, "Dois contenir au maximum 20 caractéres!"),
      password: yup
          .string()
          .required("Mot de passe nécessaire !")
          .min(8, "Dois contenir au moins 8 caractéres !")
          .max(40, "Dois contenir au maximum 20 caractéres!"),
    });

    return {
      successful: false,
      loading: false,
      message: "",
      schema,
      email: '',
      name:'',
      prenom:'',
      password: '',

    };
  },
  methods: {
    async submit() {
      try {
        const response = await axios.post('http://localhost:3000/signup', {
          nom: this.nom,
          prenom: this.prenom,
          email: this.email,
          mdp: this.mdp
        });
        console.log("response login",response)

        // La réponse doit contenir un jeton d'authentification si l'authentification réussit
        const token = response.data.token;

        // Stocker le jeton d'authentification dans le stockage local
        localStorage.setItem('token', token);
        console.log(token)

        // Rediriger l'utilisateur vers une page protégée
        //this.$router.push('/profil');
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>


