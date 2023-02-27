<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
          v-model="drawer"
          :rail="rail"
          permanent
          @click="rail = false"
      >
        <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
            title="John Leider"
            nav
        >
          <template v-slot:append>
            <v-btn
                variant="text"
                icon="mdi-chevron-left"
                @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>
</template>

<script>
export default {
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