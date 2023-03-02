<template>
  <v-app>
    <myToolbar />
    <v-main>
      <v-slide-y-transition mode="out-in">
        <router-view />
      </v-slide-y-transition>
    </v-main>
  </v-app>
</template>

<script>
import myToolbar from "@/components/MyToolbar";
export default {
  name: "app",
  components: { myToolbar },
};
</script>