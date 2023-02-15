<template>
    <form>
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="10"
        label="Nom"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="prenom"
        :error-messages="prenomErrors"
        label="Prenom"
        required
        @input="$v.prenom.$touch()"
        @blur="$v.prenom.$touch()"
      ></v-text-field>
      <v-text-field
      v-model="adress"
      :error-messages="adressErrors"
      :counter="10"
      label="Adresse"
      required
      @input="$v.adress.$touch()"
      @blur="$v.adress.$touch()"
    ></v-text-field>
      <v-text-field
      v-model="tel"
      :error-messages="telErrors"
      label="Telephone"
      required
      @input="$v.tel.$touch()"
      @blur="$v.tel.$touch()"
    ></v-text-field>
    </form>
  </template>
  
  <script>
  export default {
    name: 'moncompte_info',
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
  form{
   width: 50em;
   margin: 0em 6em 0em 20em;
  }
  v-btn{
    margin: auto;
  }
</style>