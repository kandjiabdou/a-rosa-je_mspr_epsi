<template>
  <v-container>
    <h1>{{$t("home_title")}}</h1>
    <p>{{$t("home_text")}}</p>
    
  </v-container>
</template>

<script>
  export default {
    name: 'HomeView',
    data: () => ({
        prenom:"",
        nom:'', 
        email:0,
        mdp:'',
        telephone:''
    }),
    created(){ //une fois créé, on récupére les données
      fetch('http://localhost:3000/user')
        .then((res) => res.json())
        .then(next => {
            this.nextLaunch = next
            console.log(next)
        }).catch(err => console.log(err.message))
    }
  }
</script>