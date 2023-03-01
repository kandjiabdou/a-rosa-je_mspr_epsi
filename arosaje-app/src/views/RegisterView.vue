<template>

  <div class="containnerform">
    <div class="bloc">

      <div class="form">
        <img src="https://e7.pngegg.com/pngimages/293/425/png-clipart-natural-environment-plant-%E4%B8%80%E5%80%8B%E6%96%B0%E4%B8%96%E7%95%8C-%E5%96%9A%E9%86%92%E5%85%A7%E5%9C%A8%E7%9A%84%E5%8A%9B%E9%87%8F-orchids-soil-natural-environment-leaf-logo.png" alt="logoaro"/>
        <Form @submit="handleRegister" :validation-schema="schema">
        <div v-if="!successful">
          <div class="form-group">
            <label for="username">Username</label>
            <Field name="username" type="text" class="form-control" />
            <ErrorMessage name="username" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <Field name="email" type="email" class="form-control" />
            <ErrorMessage name="email" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <Field name="password" type="password" class="form-control" />
            <ErrorMessage name="password" class="error-feedback" />
          </div>

          <div class="form-group">
            <button class="btn btn-primary btn-block" :disabled="loading">
              <span
                  v-show="loading"
                  class="spinner-border spinner-border-sm"
              ></span>
              Sign Up
            </button>
          </div>
        </div>
      </Form>
        </div>

      <div class="text">

        <div class="bloci">

          <p>Vous n'avez pas de compte inscrivez-vous pour accéder à nos services</p>
          <div class="mybtn">
            <button  onclick="window.location.href = '/register';" class="btn  btn-block" :disabled="loading">
            <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
            ></span>

              <span>Inscription</span>

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
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  box-shadow: 10px 5px 5px gray ;
  height: 500px;
}
.form{
  margin-right: 70px !important;
  width: 500px;
  margin-top: 20px;
}
.text{
  width:100%;
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

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "RegisterLogin",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup
          .string()
          .required("Username is required!")
          .min(3, "Must be at least 3 characters!")
          .max(20, "Must be maximum 20 characters!"),
      email: yup
          .string()
          .required("Email is required!")
          .email("Email is invalid!")
          .max(50, "Must be maximum 50 characters!"),
      password: yup
          .string()
          .required("Password is required!")
          .min(6, "Must be at least 6 characters!")
          .max(40, "Must be maximum 40 characters!"),
    });

    return {
      successful: false,
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;

      this.$store.dispatch("auth/register", user).then(
          (data) => {
            this.message = data.message;
            this.successful = true;
            this.loading = false;
          },
          (error) => {
            this.message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            this.successful = false;
            this.loading = false;
          }
      );
    },
  },
};
</script>