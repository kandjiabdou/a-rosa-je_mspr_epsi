<template>

<v-carousel class="fullscreen">
<v-carousel-item
    src="https://images.pexels.com/photos/8512675/pexels-photo-8512675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    cover
></v-carousel-item>

<v-carousel-item
    src="https://images.pexels.com/photos/7728874/pexels-photo-7728874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    cover
></v-carousel-item>

<v-carousel-item
    src="https://images.pexels.com/photos/8514583/pexels-photo-8514583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    cover
></v-carousel-item>
</v-carousel>
<v-container class="desc">
  <v-card title="Card title" subtitle="Subtitle" text="{{ $vuetify.locale.t('$vuetify.home_text') }}"  height="200" color="green"  width="500" class="pa-6">
    <v-card-actions>
      <v-btn>Click me</v-btn>
    </v-card-actions>
  </v-card>

  <v-card title="Card title" subtitle="Subtitle" text="" color="green"  width="500" height="200" class="pa-6">
    <v-card-actions>
      <v-btn>Click me</v-btn>
    </v-card-actions>
  </v-card>
</v-container>

</template>
<script>
import { useLocale } from 'vuetify'

export default {
  name: "AboutComponent",
  setup () {
    const { t } = useLocale()

    return {
      t
    }
  }
};
</script>
<style>

.fullscreen {
  height: 100%;
  width: 100%;
}


.desc{
  color:white;
  display:flex;
  justify-content: space-between;
  padding-right: 50px;
}
.pa-6{
  margin-left: 40px;
}

</style>