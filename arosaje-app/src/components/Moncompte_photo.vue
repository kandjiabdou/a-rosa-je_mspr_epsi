<template>
  <div class="image">
    <v-img
    lazy-src="https://picsum.photos/id/11/10/6"
    max-height="150"
    max-width="250"
    src="https://picsum.photos/id/11/500/300"
  ></v-img>
</div>

  </template>
  
  <script>
  export default {
    name: 'moncompte_photo',
    components: {},
    data: function () {
      return {
        drawer: false
      }
    },
    methods: {
    }
  }
  </script>

<style scoped>
.image{
 
font-size: 5em;


}
</style>