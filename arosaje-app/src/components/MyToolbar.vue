<template>
  <div>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <myContentDrawer />
    </v-navigation-drawer>
    <v-app-bar dark color="green" clipped-left app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-avatar size="40">
        <v-img src="../assets/logo.png"></v-img>
      </v-avatar>
      <v-toolbar-title @click="goHome" class="white--text">{{$t("title")}}</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
import myContentDrawer from "@/components/Drawer"
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