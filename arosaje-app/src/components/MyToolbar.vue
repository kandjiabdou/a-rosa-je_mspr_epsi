<template>
  <div>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <myContentDrawer />
    </v-navigation-drawer>
    <v-app-bar dark color="green" clipped-left app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-avatar size="40">
<<<<<<< HEAD
        <v-img src="public/assets/logo.png"></v-img>
=======
        <v-img src="assets/logo.png"></v-img>
>>>>>>> 8730f98f92183e4f9ac903f9052bc4dc77be6805
      </v-avatar>
      <v-toolbar-title @click="goHome" class="white--text">{{$t("title")}}</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
import myContentDrawer from "@/components/DrawerComponent.vue"
export default {
  name: 'myToolbar',
  components: {myContentDrawer},
  data: function () {
    return {
      drawer: false
    }
  },
  methods: {
    goHome () {
      this.$router.replace('/')
    }
  }
}
</script>