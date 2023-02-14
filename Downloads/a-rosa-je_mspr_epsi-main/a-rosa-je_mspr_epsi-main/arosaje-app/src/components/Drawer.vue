<template>
  <div>

    <v-list dense>
      <v-subheader>MENU</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="primary">
        <v-list-item
          v-for="(item, i) in items" :to="item.action" :key="i">
          <v-list-item-icon>
            <v-icon>mdi-{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'myDrawer',
  data: function () {
    return {
      items: [
         { icon: 'home', text: this.$t('drawer.home'), action: '/' },
        { icon: 'leaf', text: this.$t('drawer.dgardiennage'), action: '/dgardiennage' },
        { icon: 'tree', text: this.$t('drawer.gdemande'), action: '/gdemande' },
        { icon: 'flower', text: this.$t('drawer.gardiennage'), action: '/GardiennageView' },
        { icon: 'message', text: this.$t('drawer.message'), action: '/message' },
        { icon: 'account', text: this.$t('drawer.compte'), action: '/compte' },
        { icon: 'logout', text: this.$t('drawer.logout'), action: '/logout' },
      ]
    }
  }
}
</script>