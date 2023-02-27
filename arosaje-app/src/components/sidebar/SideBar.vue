<script>
import SidebarLink from './SideBarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
  props: {},
  components: { SidebarLink},
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth, isMobile: false, }
  },

  created() {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    this.isMobile = mediaQuery.matches;
    mediaQuery.addEventListener('change', (event)  => {
      this.isMobile = event.matches;
      if (this.isMobile) {
        // La taille de l'écran est inférieure à 768px
        this.mobileScreenFunction();
      } else {
        // La taille de l'écran est supérieure ou égale à 768px
        this.desktopScreenFunction();
      }
    });
  },
  methods: {
    mobileScreenFunction() {
      // Fonction à exécuter lorsque la taille de l'écran est inférieure à 768px
      console.log("La taille de l'écran est inférieure à 768px");
    },
    desktopScreenFunction() {
      // Fonction à exécuter lorsque la taille de l'écran est supérieure ou égale à 768px
      console.log("La taille de l'écran est supérieure ou égale à 768px");
    },
  },


}
</script>

<template>
  <div class="sidebar" v-if="isMobile" >

    <span
        class="collapse-icon"
        :class="{ 'rotate-180': collapsed }"
        @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>

  </div>
    <div class="sidebar" v-else >

      <v-avatar size="200" tile class="mt-n15" id="logo">
        <v-img src="arologo.png"></v-img>
      </v-avatar>

    <SidebarLink to="/" icon="fas fa-home">Accueil</SidebarLink><br>
    <SidebarLink to="/demandegardinnage" icon="fas fa-columns">Demande de gardinnage</SidebarLink><br>
    <SidebarLink to="/Contact" icon="fas fa-chart-bar">Contacter un botaniste</SidebarLink><br>
    <SidebarLink to="/gerer-demande" icon="fas fa-users">Gérer mes demandes</SidebarLink><br>
    <SidebarLink to="/mes-gardinnage" icon="fas fa-image">Mes gardiennages</SidebarLink><br>
    <SidebarLink to="/mes-gardinnage" icon="fas fa-user">Mon compte</SidebarLink>

    <span
        class="collapse-icon"
        :class="{ 'rotate-180': collapsed }"
        @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>

</template>

<style>
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
</style>

<style scoped>
#logo{
  margin-left: -25px;
}


.sidebar {


  color: white;
  background-color:#228b22;
  font-size: 16px;
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}


.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>