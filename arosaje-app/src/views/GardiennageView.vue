<template>
  <div>
    <v-card style="background-color: greenyellow">
      <!-- commented out code not needed -->

      <v-toolbar style="background- color=">
        <v-toolbar-title>Mes Entretiens Effectués</v-toolbar-title>
      </v-toolbar>
      <div class="d-flex flex-row">
        <v-tabs v-model="tab" direction="vertical" color="primary">
          <v-tab v-for="item in gardiennageData" :key="item.i" :value="item.i">
            <v-icon start color="green"> mdi-account </v-icon>

            <p color="white">{{ item.description.substr(1, 10) }}</p>

            <v-icon color="white" @click="DeleteData(item.idAnnonce)"></v-icon>
          </v-tab>
        </v-tabs>
        <v-window v-model="tab" bac>
          <v-window-item
            v-for="(item, index) in gardiennageData"
            :key="index"
            :value="index"
          >
            <v-card flat>
              <v-card-text style="background-color: white">
                <h1>A propos:</h1>
                <br />
                <p>{{ item.description }}</p>
                <br />
                <!-- <h3>Proprietaire : </h3><p>{{ item.nom_proprietaire }}</p><br/> -->
                <h3>Debut Entretien</h3>
                <br />
                <p>{{ item.date_debut }}</p>
                <br />
                <h3>Fin Entretien</h3>
                <br />
                <p>{{ item.date_fin }}</p>

                <v-row>
                  <v-col
                    v-for="(photo, i) in item.photo_gardiennage"
                    :key="i"
                    class="d-flex child-flex"
                    cols=" item.photo_gardiennage.length"
                  >
                    <v-img
                      :src="'http://localhost:3000' + photo.lien"
                      :lazy-src="photo.lien"
                      aspect-ratio="1"
                      cover
                      class="bg-grey-lighten-2"
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          text-align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey-lighten-5"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
      </div>
    </v-card>
  </div>
</template>

<script>
import liste from "../data.json";
import { mdiDelete } from "@mdi/js";
import axios from "axios";

export default {
  name: "liSte",

  data: () => ({
    tab: 0,
    items: liste["liste"],
    icon: mdiDelete,
    gardiennageData: [],
    idUser: 4,
  }),
  mounted() {
    this.fetchData();
  },
  methods: {
    deleteItem(index) {
      this.items.splice(index, 1);
    },
    fetchData() {
      console.log("test start");
      axios
        .get("http://localhost:3000/gardiennage/user/" + this.idUser)
        .then((response) => {
          this.gardiennageData = response.data.gardiennages;
          console.log("ok get");
          console.log(response.data);
          response.data.gardiennages.forEach((element) => {
            element["date_fin"] = new Date(
              element["date_fin"]
            ).toLocaleDateString();
            element["date_debut"] = new Date(
              element["date_fin"]
            ).toLocaleDateString();
          });
        })
        .catch((error) => {
          console.log(error);
        });
      console.log("test fin");
    },
    DeleteData(itemId) {
      axios
        .delete(`http://localhost:3000/gardiennage/${this.idUser}/${itemId}`)
        .then((response) => {
          console.log("Item deleted successfully");
          // Update the gardiennageData array with the updated data from the server
          this.gardiennageData = response.data.gardiennages;
          alert("Item deleted successfully!");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>