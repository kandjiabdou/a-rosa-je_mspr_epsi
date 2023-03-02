<template>
  <v-app>
    <v-container class="bg-surface-variant">
      <v-row no-gutters>
        <v-col>

          <div class="d-flex justify-space-around align-center flex-column flex-md-row fill-height">
            <v-img class="img" lazy-src="https://picsum.photos/id/11/10/6" max-height="150" max-width="250"
              src="https://picsum.photos/id/11/500/300"></v-img>
          </div>

        </v-col>
        <v-col>
          <v-sheet class="pa-2 ma-2"> ''
            <form>
              <v-text-field v-model="user.nom" :error-messages="nameErrors" :counter="10" label="Nom" required
                @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
              <v-text-field v-model="user.prenom" :error-messages="prenomErrors" label="Prenom" required
                @input="$v.prenom.$touch()" @blur="$v.prenom.$touch()"></v-text-field>
              <v-text-field v-model="adresse" :error-messages="adressErrors" :counter="10" label="Adresse" required
                @input="$v.adress.$touch()" @blur="$v.adress.$touch()"></v-text-field>
              <v-text-field v-model="user.telephone" :error-messages="telErrors" label="Telephone" required
                @input="$v.tel.$touch()" @blur="$v.tel.$touch()"></v-text-field>
            </form>
          </v-sheet>
        </v-col>

      </v-row>
    </v-container>
    <v-col>
      <v-sheet class="pa-2 ma-2">
        <div class="d-flex justify-space-around align-center flex-column flex-md-row fill-height">
          <form class="info">
            <v-text-field v-model="oldpassword" :error-messages="oldpasswordErrors" :counter="10"
              label="Ancien mot de passe" required @input="$v.oldpassword.$touch()"
              @blur="$v.oldpassword.$touch()"></v-text-field>
            <v-text-field v-model="newpassword" :error-messages="newpasswordErrors" label="Nouveau mot de passe" required
              @input="$v.newpassword.$touch()" @blur="$v.newpassword.$touch()"></v-text-field>
            <v-text-field v-model="confirmpassword" :error-messages="confirmpasswordErrors"
              label="Confirmer  mot de passe" required @input="$v.confirmpassword.$touch()"
              @blur="$v.confirmassword.$touch()"></v-text-field>
            <div class="d-flex justify-space-around align-center flex-column flex-md-row fill-height">
              <v-btn v-on:click="updateMdp" color="success" size="large">
                Modifier mot de passe
              </v-btn>
            </div>
          </form>
        </div>
      </v-sheet>
    </v-col>

  </v-app>
</template>

<script>
import axios from "axios";


export default {
  name: "monCompte",
  data: () => ({
    idUser: 4,
    user: "",
    adresse: "",
    newMdp: "",
    confirmMdp: "",
    mdp: "",
  }),
  mounted() {
    console.log("Mounted");
    this.fetchData();
  },
  methods: {
    fetchData() {
      console.log("test start");
      axios
        .get("http://localhost:3000/user/" + this.idUser)
        .then((response) => {

          this.user = response.data.user
          this.adresse = this.user.Numero_rue + ' ' + this.user.Nom_rue + ' ' + this.user.code_postale + ', ' + this.user.ville
          console.log(this.user)
        })
        .catch((error) => {
          console.log(error);
        });
      console.log("test fin");
    },
    updateMdp() {
      axios
        .post("http://localhost:3000/user/" + this.idUser)
        .then((response) => {

          this.user = response.data.user
          this.adresse = this.user.Numero_rue + ' ' + this.user.Nom_rue + ' ' + this.user.code_postale + ', ' + this.user.ville
          console.log(this.user)
        })
        .catch((error) => {
          console.log(error);
        });
      console.log("test fin");
      axios.post('http://localhost:3000/user/', {
        newMdp: this.newMdp,
        confirmMdp: this.confirmMdp,
        mdp: this.mdp,
        idUser: this.idUser,
      })
        .then((response) => {
          console.log(response);
        }, (error) => {
          console.log(error);
        });
    },
  },
};
</script>

