<template>
  <v-container class="content_user">
    <v-container class="contenu" v-if="isMobile">
      <DrawerMobile />
    </v-container>
    <v-container v-else class="contenu" >
      <myContentDrawer />
    </v-container>

    <v-container  :style="{background: $vuetify.theme.themes.dark}" class="post">
      <v-container :key="index" v-for="(item, index) in posts" fluid >
        <v-row>
          <v-col cols="12" sm="12" md="12" id="actu">


              <v-row  class="post">
                <v-list>

                  <v-avatar class="avatar" size="60">
                    <v-img :src="item.avatar" alt="profile" />

                  </v-avatar>
                  <div class="texte">
                    <h3>{{item.name}} </h3>
                    <p class="grey--text">{{item.description }}</p>
                    <h5 class="grey--text">Overview</h5>
                  </div>

                  <v-card
                      class="mx-auto"
                      max-width="400"
                  >
                    <v-img
                        :src="item.image"
                        height="300px"
                        cover
                    ></v-img>

                  <CommentCom/>
                  </v-card>
                </v-list>
              </v-row>


          </v-col>

        </v-row>
      </v-container>
    </v-container>
    <MesMessage/>
  </v-container>


</template>


<script>
import CommentCom from '@/components/CommentCom.vue'
import MesMessage from '@/views/MesMessages'
import myContentDrawer from "@/components/DrawerComponent.vue"
import DrawerMobile from "@/components/DrawerMobile.vue"
import axios from 'axios';


export default {

  components: {MesMessage,CommentCom,myContentDrawer,DrawerMobile},

  name:"MyDataApi",
  props: ['post'],

  data() {

    return {
      posts: {},
      show: false,
      isMobile: false,
    };
  },

  created() {
    axios.get('https://63f34dfbde3a0b242b3f57c3.mockapi.io/post')
        .then(response => {
          this.posts = response.data;
          console.log(this.posts);
        })
        .catch(error => {
          console.log(error);
        });
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    this.isMobile = mediaQuery.matches;
    mediaQuery.addEventListener('change', (event) => {
      this.isMobile = event.matches;
      if (this.isMobile) {
        // La taille de l'écran est inférieure à 768px
        this.mobileScreenFunction();
      } else {
        // La taille de l'écran est supérieure ou égale à 768px
        this.desktopScreenFunction();
      }
    });
  },

  methods: {
    mobileScreenFunction() {
      // Fonction à exécuter lorsque la taille de l'écran est inférieure à 768px
      console.log("La taille de l'écran est inférieure à 768px");
    },
    desktopScreenFunction() {
      // Fonction à exécuter lorsque la taille de l'écran est supérieure ou égale à 768px
      console.log("La taille de l'écran est supérieure ou égale à 768px");
    },
  },


}
</script>
<style scoped>
.contenu{
  width:300px
}

#actu{
 width:600px;
}
.texte{
  margin-left: 30px;
}
.content_user{
  display: flex;
  justify-content: space-around;
}
.avatar{
  margin-left: 20px;
  margin-top: 20px;
}
</style>