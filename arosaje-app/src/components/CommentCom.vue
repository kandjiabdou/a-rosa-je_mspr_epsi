<template>
  <v-card class="mx-auto" min-width="600">
    <v-spacer></v-spacer>

    <v-btn @click="toggleComments()" onclick="augmenterHauteur()" class="btn">Voir Conseils</v-btn>
    <div v-show="show">
      <!-- Contenu à afficher/masquer -->
      <v-card-actions>
        <v-card style="min-height: 550px;" id="monBloc">
          <v-list v-for="comment in comments" :key="comment.id">
            <v-list-item
                :prepend-avatar="comment.avatar"
                title="Brunch this weekend?"
            >
              <template v-slot:subtitle>
                <span class="font-weight-bold">{{comment.name}}</span>{{comment.description}}
              </template>
            </v-list-item>
            <v-divider inset></v-divider>
          </v-list>
        </v-card>
      </v-card-actions>
    </div>
  </v-card>
</template>
<script>


export default {
  data() {
    return {
      comments: [],
      show: false,
    };
  },
  methods: {

    toggleComments() {
      this.fetchComments();
      this.show = !this.show;
    },
    async fetchComments() {
      fetch(`https://63f34dfbde3a0b242b3f57c3.mockapi.io/post/1/Conseil`, {
        method: 'GET',
        headers: {'content-type':'application/json'},
      }).then(res => {
        if (res.ok) {
          return res.json();
        }
        // gérer l'erreur
      }).then(data => {
        this.comments = data;
        console.log(this.comments)
      }).catch(error => {
        console.log(error);
      });
    },
    augmenterHauteur() {
      let bloc = document.getElementById("monBloc");
      let hauteurActuelle = bloc.offsetHeight;
      let nouvelleHauteur = hauteurActuelle + 100;
      bloc.style.height = nouvelleHauteur + "px";
    },
  },

}

</script>
<style>
.btn{
  margin: 30px;
}

</style>