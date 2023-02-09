<template>
  <v-app>
    <NavigationBar />
    <Loader />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
import Loader from './components/auxiliary/Loader.vue';
import NavigationBar from './components/auxiliary/NavigationBar.vue';

export default {
  name: "App",
  components: {
    Loader,
    NavigationBar,
  },
  data() {
    return {

    };
  },
  methods: {
    endLoading() {
      setTimeout(() => {
        this.$store.dispatch("endLoading")
        .then(() => {
        });
      }, 1500);

      return true;
    },
  },
  mounted() {
    this.endLoading();
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
