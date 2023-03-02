<template>
  <div class="containnerform">
    <div class="bloc">

      <div class="form">
        <img src="https://e7.pngegg.com/pngimages/293/425/png-clipart-natural-environment-plant-%E4%B8%80%E5%80%8B%E6%96%B0%E4%B8%96%E7%95%8C-%E5%96%9A%E9%86%92%E5%85%A7%E5%9C%A8%E7%9A%84%E5%8A%9B%E9%87%8F-orchids-soil-natural-environment-leaf-logo.png" alt="logoaro"/>


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
          <button class="btnc  btn-block" type="submit">

            <span>Login</span>
          </button>
         <br><a href="#"> Mot de passe oublié ?</a>
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

            <p>Vous avez déja un compte connectez-vous pour accéder à votre profil</p>
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
    async onSubmit() {
      try {
        // Envoyer la requête d'authentification à l'API
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.email,
            mdp: this.password
          })
        });

        // Traiter la réponse de l'API
        const data = await response.json();

        if (response.ok) {
          // Enregistrer le jeton d'authentification dans le stockage local ou dans un cookie
          localStorage.setItem('authToken', data.token);

          // Rediriger l'utilisateur vers la page suivante
          this.$router.push('/profil');
        } else {
          // Afficher un message d'erreur à l'utilisateur
          alert(data.message);
        }
      } catch (error) {
        console.error(error);
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