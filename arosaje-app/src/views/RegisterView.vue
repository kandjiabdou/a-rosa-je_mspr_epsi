<template>
  <div class="containnerform">
    <div class="bloc">
      <div class="form">
        <img
          src="https://media.istockphoto.com/id/536037199/fr/vectoriel/main-tenant-plante-logo-concept-de-croissance-vector-illustration.jpg?s=612x612&w=0&k=20&c=4H35vhMOuQ90StwU-d7WXmFhrqKfQH5AfKTjrJHlaXo="
          alt="logoaro" />
        <form @submit.prevent="submit" :validation-schema="schema">
          <div v-if="!successful">
            <div class="name">
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
            </div>
            <div class="name">
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
              </div>
            <div class="politic">

            <label class="text-grey-600 cursor-pointer text-xs text-justify">
              <input type="checkbox" name="terms" required="required" value="1" tabindex="5">
              J'ai lu et accepté les Conditions Générales d'Utilisation <br>ainsi que la Politique de confidentialité.<br>
            </label>
            </div>

            <div class="submit">
              <button type="submit" class="btn  btn-block">

                Inscription
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="text">
        <div class="bloci">
          <p>
            Vous n'avez pas de compte inscrivez-vous pour accéder à nos services
          </p>
          <div class="mybtn">
            <button onclick="window.location.href = '/login';" class="btn btn-block" :disabled="loading">
              <span v-show="loading" class="spinner-border spinner-border-sm"></span>

              <span>Connexion</span>
            </button>
          </div>
        </div>

        <div v-if="message" class="alert" :class="successful ? 'alert-success' : 'alert-danger'">
          {{ message }}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import axios from "axios";

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
      email: "",
      name: "",
      prenom: "",
      password: "",
    };
  },
  methods: {
    async submit() {
      try {
        let response = await axios.post("http://localhost:3000/signup", {
          nom: this.nom,
          prenom: this.prenom,
          email: this.email,
          mdp: this.mdp,
        });
        console.log("response login", response);
        const data = response.data;
        console.log(data);
        if (data["status"] != 400 || data["success"]) {
          response = await axios.post("http://localhost:3000/login", {
            email: this.email,
            mdp: this.mdp,
          });
          // Enregistrer le jeton d'authentification dans le stockage local ou dans un cookie
          localStorage.setItem('authToken', response.data.token);
          // Rediriger l'utilisateur vers la page suivante
          this.$router.push('/profil');
        } else {
          // Afficher un message d'erreur à l'utilisateur
          alert(data.message);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>


<style>

.containnerform {
  margin: auto;
  width: 70%;
  height: 50%;
}
.politic{
  margin-top:30px;
  margin-bottom: 20px;
}

.bloc {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  box-shadow: 10px 5px 5px gray;
  height: 500px;
}

.form {
  margin-right: 70px !important;
  width: 500px;
  margin-top: 20px;
}
.name{
  display:flex;
  justify-content: space-around;
}

.text {

  width: 35%;
  height: 100%;
  background-color: forestgreen;
}

.bloci {
  margin-top: 150px;
  text-align: center;
  font-size: 18px;
  padding: 20px;
}

.mybtn button {
  width: 30vh;
  margin: auto;
  background-color: white;
}

.form img {
  width: 100px;
  height: 100px;
  margin-left: 150px;
}

.text p {
  color: white;
}


.titre {
  margin-left: 50px;
}

a {
  color: white;
}

a :hover {
  color: forestgreen;
}
.btn{
  top:20px;
  width:200px;
  margin:auto;
  background-color: forestgreen;

}

.btnc {
  background-color: forestgreen;
  height: 40px;
  color: white;
}

@media screen and (max-width: 756px) {
  .containnerform {
    height: 100vh;
    width: 40vh;
  }

  .bloc {
    width: 300px;
    height: 800px;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-top: 20px;
  }

  .form {
    margin-right: 100px !important;
    width: 280px;
    margin-top: 20px;
  }

  .text {
    width: 100%;
    height: 30%;
    background-color: forestgreen;
  }

}
</style>


