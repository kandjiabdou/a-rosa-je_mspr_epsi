<template>
  <div>
    rdfghjklm:
  </div>
</template>

<script>
import myContentDrawer from "@/components/Drawer"
export default {
  name: 'moncompte',
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