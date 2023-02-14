<template>
    <div>
      <v-toolbar class="deep-purple" />
      <v-list dense>
        <template v-for="(item, i) in Liste" :key="i">
          <v-divider dark v-if="item.divider" ></v-divider>
          <v-list-item ripple :to="item.action" :key="i" v-else>
            <v-list-item-action>
                <!-- <v-icon>{{ item.icon }}</v-icon> -->
                <v-icon  icon="mdi-home"/>

            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="body-2">{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </div>
  </template>
  
  <script>
  export default {
    name: 'draweR',
    // data: function () {
    //   return {
    //     items: [
    //       { icon: 'home', text: this.$t('drawer.home'), action: '/', },
    //       { icon: '', text: this.$t('drawer.history'), action: '/history' },
    //       { icon: '', text: this.$t('drawer.about'), action: '/about' },
    //     ]
    //   }
    // }
  }
  </script>