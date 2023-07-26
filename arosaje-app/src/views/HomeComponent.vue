<template>
  <div class="full-screen">



    <v-container class="top">
      <v-row>



        <v-col cols="6">

          <h1 class="white--text">
            A'rosa-je</h1>
          <p class="grey--text">
            Votre partenaire botanique depuis 1984. Garde de plantes et conseils personnalisés pour leur entretien. Nouvelle application pour répondre à la demande croissante. Confiez-nous vos plantes, elles seront entre de bonnes mains.
            Chez A'rosa-je, nous croyons que chaque plante mérite une attention exceptionnelle. Confiez-nous vos trésors verts et découvrez l'expertise de nos passionnés de botanique. Bienvenue dans notre univers, où vos plantes seront choyées comme jamais auparavant !
          </p>
          <v-btn tile color="#00000" dark> A propos </v-btn>
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script>


export default {
  name: "HomeComponent",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),

};
</script>
<style scoped>

.full-screen{
  margin: 0;
  Padding:0;
  background-image: url('https://images.pexels.com/photos/8512668/pexels-photo-8512668.jpeg?auto=compress&cs=tinysrgb&w=600');
  width: 1920px; /* La largeur de l'image est égale à la largeur du conteneur */
  height: 600px; /* La hauteur de l'image est égale à la hauteur du conteneur */
  background-size: cover; /* L'image de fond s'ajuste pour remplir le conteneur sans se répéter */
  background-repeat: no-repeat;
  overflow: hidden;
}
.top {
  margin-top: 180px;
}
.grey--text{
  color:white;
}
.white--text{  color:white;}
</style>
