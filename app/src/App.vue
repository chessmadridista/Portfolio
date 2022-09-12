<template>
  <v-app>
    <v-app-bar
    color="primary"
    >

    </v-app-bar>
    <Loader />
    <router-view />
  </v-app>
</template>
<script>
import Loader from './components/Auxiliary/Loader.vue';

export default {
  name: "App",
  components: {
    Loader,
  },
  data() {
    return {

    };
  },
  methods: {
    startLoading() {
      this.$store.dispatch("startLoading");

      return true;
    },
    endLoading() {
      setTimeout(() => {
        this.$store.dispatch("endLoading")
        .then(() => {
        });
      }, 1500);

      return true;
    },
    runLoadingCycle() {
      this.startLoading();
      this.endLoading();

      return true;
    },
  },
  watch: {
    $route() {
      this.runLoadingCycle();
    },
  },
  mounted() {
    this.endLoading();
  },
};
</script>

<style lang="scss">
</style>
