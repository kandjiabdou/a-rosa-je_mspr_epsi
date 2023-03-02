<template>
  <v-container class="bg-surface-variant">
    <v-row no-gutters>
      <v-col>

        <div class="d-flex justify-space-around align-center flex-column flex-md-row fill-height">
          <v-img class="img" lazy-src="https://picsum.photos/id/11/10/6" max-height="150" max-width="250"
            src="https://picsum.photos/id/11/500/300"></v-img>
        </div>

      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2"> ''
          <form>
            <v-text-field v-model="name" :error-messages="nameErrors" :counter="10" label="Nom" required
              @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
            <v-text-field v-model="prenom" :error-messages="prenomErrors" label="Prenom" required
              @input="$v.prenom.$touch()" @blur="$v.prenom.$touch()"></v-text-field>
            <v-text-field v-model="adress" :error-messages="adressErrors" :counter="10" label="Adresse" required
              @input="$v.adress.$touch()" @blur="$v.adress.$touch()"></v-text-field>
            <v-text-field v-model="tel" :error-messages="telErrors" label="Telephone" required @input="$v.tel.$touch()"
              @blur="$v.tel.$touch()"></v-text-field>
          </form>
        </v-sheet>
      </v-col>

    </v-row>
  </v-container>
  <v-col>
    <v-sheet class="pa-2 ma-2">
      <div class="d-flex justify-space-around align-center flex-column flex-md-row fill-height">
        <form class="info">
          <v-text-field v-model="oldpassword" :error-messages="oldpasswordErrors" :counter="10"
            label="Ancien mot de passe" required @input="$v.oldpassword.$touch()"
            @blur="$v.oldpassword.$touch()"></v-text-field>
          <v-text-field v-model="newpassword" :error-messages="newpasswordErrors" label="Nouveau mot de passe" required
            @input="$v.newpassword.$touch()" @blur="$v.newpassword.$touch()"></v-text-field>
          <v-text-field v-model="confirmpassword" :error-messages="confirmpasswordErrors" label="Confirmer  mot de passe"
            required @input="$v.confirmpassword.$touch()" @blur="$v.confirmassword.$touch()"></v-text-field>
          <div class="d-flex justify-space-around align-center flex-column flex-md-row fill-height">
            <v-btn color="success" size="large">
              Modifier mot de passe
            </v-btn>
          </div>
        </form>
      </div>
    </v-sheet>
  </v-col>
</template>

<style scoped>
.info {
  width: 50em;


}
</style>


<script>
import { reactive, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'

export default {
  setup() {
    const initialState = {
      name: '',
      email: '',
      select: null,
      checkbox: null,
    }

    const state = reactive({
      ...initialState,
    })

    const items = ref([
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ])

    const rules = {
      name: { required },
      email: { required, email },
      select: { required },
      items: { required },
      checkbox: { required },
    }

    const v$ = useVuelidate(rules, state)

    function clear() {
      v$.value.$reset()

      for (const [key, value] of Object.entries(initialState)) {
        state[key] = value
      }
    }

    return { state, items, clear, v$ }
  },
}
</script>