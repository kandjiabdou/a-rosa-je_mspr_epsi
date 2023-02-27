<template>
    <form>
      <v-text-field
        v-model="oldpassword"
        :error-messages="oldpasswordErrors"
        :counter="10"
        label="Ancien mot de passe"
        required
        @input="$v.oldpassword.$touch()"
        @blur="$v.oldpassword.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="newpassword"
        :error-messages="newpasswordErrors"
        label="Nouveau mot de passe"
        required
        @input="$v.newpassword.$touch()"
        @blur="$v.newpassword.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="confirmpassword"
        :error-messages="confirmpasswordErrors"
        label="Confirmer  mot de passe"
        required
        @input="$v.confirmpassword.$touch()"
        @blur="$v.confirmassword.$touch()"
      ></v-text-field>
    <v-btn
      class="mr-4"
      @click="submit"
    >
    Modifier mot de passe
    </v-btn>
    </form>
  </template>
  
  <style scoped>
  form{
   width: 50em;
  margin: auto;
  }
  v-btn{
    margin: auto;
  }
</style>