<template>
  <v-app>
    <!-- <moncompte_photo /> -->
     
    <!--<moncompte_info /> -->
    
    <moncompte_modif /> 
     
  </v-app>
</template>

<script>
// import moncompte_info from "@/components/Moncompte_info";
import moncompte_modif from "@/components/Moncompte_modif";
// import moncompte_photo from "@/components/Moncompte_photo";
export default {
  name: "monCompte",
  components: { 
  //  moncompte_photo,
   // moncompte_info,
    moncompte_modif,
  }
};
</script>

