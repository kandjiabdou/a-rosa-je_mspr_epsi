<template>
  <v-card style="background-color:gainsboro;">
    <!-- commented out code not needed -->

    <v-toolbar color="primary">
      <v-toolbar-title>Hist Gard</v-toolbar-title>
    </v-toolbar>
    <div class="d-flex flex-row">
      
      <v-tabs v-model="tab"
        direction="vertical"
        color="primary"
      >
        <v-tab v-for="(item, index) in items" :key="index" :value="index" >
          <v-icon start color="green">
            mdi-account
          </v-icon>
    
          {{ item.nom_proprietaire }}
          
          <v-icon color="black" @click="deleteItem">mdi-delete</v-icon>
                </v-tab>
      </v-tabs>
      <v-window v-model="tab" bac>
        <v-window-item v-for="(item, index) in items" :key="index" :value="index">
          <v-card flat>
            <v-card-text style="background-color:gainsboro;">
              
               <h1>A propos:</h1><br/>
               <p> {{ item.descriptif }}</p> <br/>
                <h3>Proprietaire : </h3><p>{{ item.nom_proprietaire }}</p><br/>
                <h3>Debut Entretien</h3><br/>
                <p>{{ item.date_debut }}</p><br/>
                <h3>Fin  Entretien</h3><br/>
                <p>{{ item.date_fin }}</p>
              
               <v-row>
    <v-col
      v-for="n in 9"
      :key="n"  
      class="d-flex child-flex"
      cols="4"
    >
      <v-img
        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
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
              
              
                
                <!-- Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. -->
<!--      
              <v-img :src="item.img"  aspect-ratio="1.5"/> -->
              
            </v-card-text>
          </v-card>
        </v-window-item>
        
      </v-window>
    </div>
  </v-card>
</template>

<script>
import liste from '../data.json';
import { mdiDelete } from '@mdi/js';

export default {
  name: "liSte",
  data: () => ({
    tab: 0,
    items: liste["liste"],
    icon: mdiDelete
  }),
  methods: {
    deleteItem(index) {
      this.items.splice(index, 1);
    }
  }
}
</script>

<style>
  /* Sets the height of the tabs to 100% of their parent element */
  .v-tabs__content {
    height: 100%;
  }

  /* Adds a border and margin to the tab items */
  .v-tab {
    border: 1px solid #ccc;
    margin-bottom: 10px;
  }

  /* Changes the font color and size of the tab items */
  .v-tab__wrapper {
    color: #333;
    font-size: 16px;
  }
  
  /* Add padding and background color to the tab items */
  .v-tab__item {
    padding: 10px;
    background-color: #f5f5f5;
  }

  /* Changes the font color and size of the toolbar title */
  .v-toolbar__title {
    color: #fff;
    font-size: 24px;
  }

  /* Adds some padding to the card text */
  .v-card-text {
    padding: 10px;
  }

  /* Centers the images within the card text */
  .v-card-text img {
    display: block;
    margin: 0 auto;
  }
</style>
