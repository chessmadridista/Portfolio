<template>
  <v-app>
    <SnackBar />
    <NavigationBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
import SnackBar from './components/auxiliary/Snackbar.vue';
import NavigationBar from './components/auxiliary/NavigationBar.vue';

export default {
  name: "App",
  components: {
    SnackBar,
    NavigationBar,
  },
};
</script>

<style lang="scss">
html {
  overflow: hidden;
}
main {
    height: 1vh;
    overflow-y: scroll;
}
::-webkit-scrollbar {
    width: 10px;   
}
::-webkit-scrollbar-track {
    background: #256;
}
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgb(171, 171, 255);
    box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}
#app {
  background: #f0faff;
}
</style>
