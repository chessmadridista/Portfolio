<template>
    <v-overlay
    opacity="1"
    :value="showLoader"
    z-index="8"
    >  
      <v-progress-circular
      indeterminate
      color="primary"
      >
      </v-progress-circular>
    </v-overlay>
</template>
<script>
export default {
    name: 'Loader',
    computed: {
      showLoader() {
        return this.$store.state.isLoading;
      },
    },
}
</script>