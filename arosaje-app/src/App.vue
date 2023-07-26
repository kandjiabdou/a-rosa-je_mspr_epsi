<template>
  <div id="app">
    <v-toolbar class="side fixed-bar" >

      <v-layout>
        <v-app-bar
            color="black"
            prominent
        >
          <v-img src="public/assets/logo.png" alt="logo"/>

        <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/admin" class="nav-link">Admin Board</router-link>
        </li>
        <li v-if="showModeratorBoard" class="nav-item">
          <router-link to="/mod" class="nav-link">Moderator Board</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="currentUser" to="/user" class="nav-link">User</router-link>
        </li>



      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <ul>
          <li  class="nav-item">
            <router-link to="/home" class="nav-link">
              <i class="fas fa-home"></i> Home
            </router-link>
          </li>
        <li class="nav-item" v-if="$route.path !== '/profil'">
          <router-link to="/login" class="nav-link">
            <i class="fas fa-user-alt"></i>   Connexion
          </router-link>
        </li>
        <li class="nav-item" v-if="$route.path !== '/profil'">
          <router-link to="/register" class="nav-link">
           <i class="fas fa-sign-in-alt"></i>  Inscription
          </router-link>
        </li>
        </ul>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <i class="fas fa-user"></i>
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" /> LogOut
          </a>
        </li>
      </div>
        </v-app-bar>
      </v-layout>
    </v-toolbar>


    <div class="container">
      <router-view />
    </div>

  </div>
</template>

<script>


import {defineComponent} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default defineComponent({
  components: {FontAwesomeIcon}
})
</script>

<style>
#app{
  margin:0;
  padding: 0;


}
.container{
  margin:0 !important;
  padding:0 !important;
}



ul{
  margin-top: 10px;
  display:flex;
  justify-content: space-evenly;

}
li{

  padding: 10px;
  list-style: none;
  text-decoration: none;
}

a{
  color:white !important;
  text-decoration: none;
}
a :hover{
  color: forestgreen;

}

</style>
