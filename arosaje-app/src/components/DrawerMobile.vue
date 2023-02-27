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

            <v-btn
                variant="text"
                icon="mdi-chevron-left"
                @click.stop="rail = !rail"
            ></v-btn>

        </v-list-item>

        <v-divider></v-divider>

        <v-list-item v-for="(item, i) in items" :to="item.action" :key="i">

          <v-list-item-content class="menu">
            <v-list-item-icon class="menu_icon">
              <v-icon>mdi-{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="item.text" class="menu_item"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-navigation-drawer>

    </v-layout>
  </v-card>
</template>


<script>
  export default {
  data () {
  return {
  drawer: true,
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

  rail: true,
}
},
}
</script>
