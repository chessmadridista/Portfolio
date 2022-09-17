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
import Loader from './components/Auxiliary/Loader.vue';
import NavigationBar from './components/Auxiliary/NavigationBar.vue';

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
#app {
  background: #f0faff;
}
</style>
