<template>
  <v-card>
    <!-- commented out code not needed -->

    <v-toolbar color="primary">
      <v-toolbar-title>Hist Gard</v-toolbar-title>
    </v-toolbar>
    <div class="d-flex flex-row">
      
      <v-tabs v-model="tab"
        direction="vertical"
        color="primary"
      >
        <v-tab v-for="(item, index) in items" :key="index" :value="index">
          <v-icon start>
            mdi-account
          </v-icon>
          {{ item.nom_proprietaire }}
          <v-btn color="red" text @click="deleteItem(index)">
                Delete
              </v-btn>
        </v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item v-for="(item, index) in items" :key="index" :value="index">
          <v-card flat>
            <v-card-text>
              <p>
                {{ item.descriptif }}<br />
                {{ item.img }}
                <v-img :src="item.img"  aspect-ratio="1.5"/>
                <!-- Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. -->
              </p>
              <v-img :src="item.img"  aspect-ratio="1.5"/>
              
            </v-card-text>
          </v-card>
        </v-window-item>
        
      </v-window>
    </div>
  </v-card>
</template>

<script>
import liste from '../data.json'
export default {
  name: "liSte",
  data: () => ({
    tab: 0,
    items: liste["liste"]
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
