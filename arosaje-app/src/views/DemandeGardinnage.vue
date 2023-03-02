<template>

  <v-col cols="12" sm="12" md="9" xs="12" class="demande">
  <v-card class="mx-auto" >
    <v-card-text style="text-align:center;">
      <span class="titre">Demande de gardinnage</span>

    </v-card-text>
        <v-sheet class="cardform">
          <v-form @submit.prevent="onSubmit" enctype="multipart/form-data">
            <v-card-text>
              <v-container class="check">
                <v-checkbox label="Botaniste" v-model="botaniste"></v-checkbox>
                <v-checkbox label="Utilisateur" v-model="users"></v-checkbox>
              </v-container>
            </v-card-text >
            <v-container class="form">
              <v-col
                  cols="12"
                  md="10"
              >
                <v-text-field label="Adresse" v-model="adresse" prepend-icon="mdi-map-marker"></v-text-field>
                <v-file-input
                    v-model="files"
                    label="Sélectionner des photos"
                    accept="image/*"
                    multiple
                    @change="onFilesSelected"
                ></v-file-input>
                <v-text-field label="Disponiblité" prepend-icon="mdi-calendar"></v-text-field>

              </v-col>

                <div class="photos">
                  <v-card v-for="(file, index) in files" :key="index" height="70px">
                    <img :src="file.url" alt="Photo" />
                  </v-card>
                  </div>

          </v-container>
            <v-textarea label="Description" variant="solo" class="text"></v-textarea>
            <v-btn @click="handleReset" class="enregistrer">
              Enregistrer
            </v-btn>
          </v-form>
        </v-sheet>

  </v-card>
  </v-col>
</template>

<script>
import axios from 'axios';

export default {
  name:"DemandeGardinnage",
  components: {},

  data() {
    return {
      files: []
    };
  },
  methods: {

    onSubmit() {
      const formData = {
        adresse: this.$refs.adresse.value,
        photos: this.files,
        description: this.$refs.description.value,
            roles: {
              botaniste: this.$refs.botaniste.checked,
              users: this.$refs.utilisateur.checked,
            }
      };

      axios.post('http://localhost:3000/annonce/:id', formData)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    },
    onFilesSelected(event) {
      this.files = event.target.files;
    }


  }

};
</script>
<style>

  .photos {
    margin-top: 70px;
    display: flex;
    flex-wrap: wrap;
  }

  .photos v-card {
    width: 100px;
    margin: 16px;

  }

  .photos img {
    width: 100px;
    height: 70px;


  }

  .demande {
    background-color: forestgreen;
    margin: auto;
    color: black;
  }

  .titre {
    font-size: 30px;
    color: black;

  }

  .mx-auto {
    color: white;
  }

  .cardform {
    min-height: 450px;
  }

  .check {
    display: flex;
    justify-content: space-evenly;

  }

  .text {
    width: 600px;
    margin-left: 70px;
  }

  .form {
    margin-top: -60px;
    display: flex;
    justify-content: space-between;
  }

  .enregistrer {
    color: white;
    background-color: forestgreen;
    width: 200px;
    margin-bottom: 20px;
    margin-left: 70px;

  }

  .photos v-card {
    width: 200px;
    height: 100px;
    margin: 16px;
  }

@media (max-width: 	600px){

  .text{
    margin-left: 30px;
    width:250px;
  }
  .enregistrer{
    margin-left: 60px;
  }
}
</style>