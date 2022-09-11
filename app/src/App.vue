<template>
  <v-app>
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
    endLoading() {
      setTimeout(() => {
        this.$store.dispatch("endLoading")
        .then(() => {
        });
      }, 1500);

      return true;
    },
  },
  watch: {
    $route() {
      this.$store.dispatch("startLoading");
      this.endLoading();
    },
  },
  mounted() {
    this.endLoading();
  },
};
</script>

<style lang="scss">
</style>
