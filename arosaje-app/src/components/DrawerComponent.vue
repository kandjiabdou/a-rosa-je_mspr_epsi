<template>

    <v-layout width="200px">
      <v-navigation-drawer
          class="bg-deep-purple"
          theme="dark"
          permanent
          color:green
      >
        <v-list  class="drawer">

            <img src="https://media.istockphoto.com/id/536037199/fr/vectoriel/main-tenant-plante-logo-concept-de-croissance-vector-illustration.jpg?s=612x612&w=0&k=20&c=4H35vhMOuQ90StwU-d7WXmFhrqKfQH5AfKTjrJHlaXo=" alt="logo1"/>

            <v-list-item v-for="(item, i) in items" :to="item.action" :key="i">

              <v-list-item-content class="menu">
                <v-list-item-icon class="menu_icon">
                  <v-icon>mdi-{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title v-text="item.text" class="menu_item"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>

        </v-list>


        <template v-slot:append>
          <div class="pa-2">
            <v-btn block>
             Deconexion
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
      <v-main style="height: 400px"></v-main>
    </v-layout>

</template>
<script>

  export default {
    name: "myDrawer",

    data() {

      return {
        items: [
          { icon: "home", text: this.$t("drawer.home"), action: "/" },
          {
            icon: "leaf",
            text: this.$t("drawer.dgardiennage"),
            action: "/dgardiennage",
          },
          { icon: "tree", text: this.$t("drawer.gdemande"), action: "/gdemande" },
          {
            icon: "flower",
            text: this.$t("drawer.mesgardiennage"),
            action: "/gardiennage",
          },
          {
            icon: "message",
            text: this.$t("drawer.message"),
            action: "/message",
          },
          { icon: "account", text: this.$t("drawer.compte"), action: "/compte" },
          { icon: "logout", text: this.$t("drawer.logout"), action: "/logout" },

        ],

      };
    },


  }

</script>
<style>

.bg-deep-purple{
  background-color:green !important;
}
.menu{
  display:flex;
}
.menu_item{
  padding-left: 10px;
}
.drawer{
  margin-top: 60px;
}
.drawer img{
  margin-left:30%;
  width: 100px;
  height: 100px;

}
</style>
