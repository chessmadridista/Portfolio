<template>
    <v-overlay
    opacity="0.9"
    :value="this.$store.state.isLoading"
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
}
</script>