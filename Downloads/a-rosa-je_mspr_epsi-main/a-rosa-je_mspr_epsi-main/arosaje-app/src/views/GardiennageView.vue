<template>
  <div>
    <ul>
      <li  v-for="user in data.liste" :key="user.descriptif">
        <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
    
      <template v-slot:activator="{ on, attrs }">
      <ul>
        <li v-for="user in data.liste" :key="user.descriptif">
          <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
         {{ user.id }}
        </v-btn>
        </li>
      </ul>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="dialog = false"
            >
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list
          three-line
          subheader
        >
          <v-subheader>User </v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{ user.adresse.rue }}</v-list-item-title>
              <v-list-item-subtitle>{{ user.date_fin }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{ user.descriptif }}</v-list-item-title>
              <v-list-item-subtitle>{{ user.adresse.ville }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list
          three-line
          subheader
        >
          <v-subheader>{{ user.descriptif }}</v-subheader>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="notifications"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ user.date_debut }}</v-list-item-title>
              <v-list-item-subtitle>{{ user.date_fin }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        
         
            
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>

    </li></ul>
  </div>
  
</template>

<script>
  export default {
    
    data () {
      return {
        // dialog: false,
        // notifications: false,
        // sound: true,
        // widgets: false,
        data:{  
          "liste":[{
      'id':1,
      "descriptif": "Entretien de rose en l'absence su proprietaire pour une duree de 4 jours.",
      "nom_proprietaire":"Awa ly",
       "adresse":{
        "rue":" 3 Ruelle du Royaume",
        "code_postale":"91440",
        "ville":"Bures sur Yvettes"

       },
       "date_debut":"12-01-2020",
       "date_fin":"15-01-2020"
      
      
    },

    { 'id':2,
      "descriptif": "Entretien de rose en l'absence su proprietaire pour une duree de 4 jours.",
      "nom_proprietaire":"Awa ly",
       "adresse":{
        "rue":" 3 Ruelle du Royaume",
        "code_postale":"91440",
        "ville":"Bures sur Yvettes"

       },
       "date_debut":"12-01-2020",
       "date_fin":"15-01-2020"
      
      
    }]
  },
        }
      }
    }
  
</script>