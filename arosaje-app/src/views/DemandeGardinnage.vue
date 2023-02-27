<template>

  <v-col cols="10" sm="10" md="8" xs="12" class="demande">
  <v-card class="mx-auto" >
    <v-card-text style="text-align:center;">
      <span class="titre">Demande de gardinnage</span>

    </v-card-text>
        <v-sheet class="cardform">
          <v-form @submit.prevent>
            <v-card-text>
              <v-container class="check">
                <v-checkbox label="Botaniste"></v-checkbox>
                <v-checkbox label="Utilisateur"></v-checkbox>
              </v-container>
            </v-card-text >
            <v-container class="form">
              <v-col
                  cols="12"
                  md="10"
              >
                <v-text-field label="Adresse" prepend-icon="mdi-map-marker"></v-text-field>
                <v-file-input
                    v-model="files"
                    label="Sélectionner des photos"
                    accept="image/*"
                    multiple
                    @change="onFilesSelected"
                ></v-file-input>
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

export default {
  name:"DemandeGardinnage",
  components: {},

  data() {
    return {
      files: []
    };
  },
  methods: {
    onFilesSelected() {
      // logique de traitement de la sélection de fichiers
      this.files = this.files.map(file => {
        file.url = URL.createObjectURL(file);
        return file;
      });
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
  .demande{
    margin-top:70px;

  }
  .text{
    margin-left: 30px;
    width:250px;
  }
  .enregistrer{
    margin-left: 60px;
  }
}
</style>