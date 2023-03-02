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
<v-container>
  <v-card title="Arosaje" subtitle="Subtitle" height="200" color="green"  width="500" class="pa-6">
    L’entreprise “A’rosa-je” aide les particuliers à prendre soin de leurs plantes.
Fondée en 1984 elle a tout d’abord été composée d’une petite équipe de botanistes dans une seule ville et est maintenant composée de plus de 1500 botanistes répartis sur toute la France qui rendent service aux propriétaires de plantes de deux façons :
- En allant garder leurs plantes lorsque les propriétaires sont absents
- En prodiguant des conseils d’entretien afin que les propriétaires s’occupent de mieux en mieux de leurs plantes

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