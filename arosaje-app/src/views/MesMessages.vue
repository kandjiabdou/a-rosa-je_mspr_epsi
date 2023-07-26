 <template>
   <v-container class="liste" style="width: 300px;">
     <v-card
         class="mx-auto"
         max-width="400"
     >
       <v-toolbar
           color="green-darken-4"
           dark
       >
         <v-app-bar-nav-icon></v-app-bar-nav-icon>

         <v-toolbar-title>Mes Message</v-toolbar-title>

         <v-btn icon>
           <v-icon>mdi-magnify</v-icon>
         </v-btn>
       </v-toolbar>

       <v-list >
         <template>

           <v-list-item >
             <v-avatar class="avatar" size="50">
               <v-img :src="item.avatar" alt="profile" />

             </v-avatar>

           <span>{{item.name}}</span>

             <p>Nancy — Do you see what time it is?</p><br>

           </v-list-item>
         </template>
       </v-list>
     </v-card>
   </v-container>
</template>


<script>
import axios from 'axios';

export default {
  name:"MyDataApi",


  data() {
    return {
      post: {}
    };
  },
  created() {
    axios.get('https://63f34dfbde3a0b242b3f57c3.mockapi.io/post')
        .then(response => {
          this.post = response.data;
          console.log(this.post);
        })
        .catch(error => {
          console.log(error);
        });
  },



}
</script>

 <style>

 </style>
