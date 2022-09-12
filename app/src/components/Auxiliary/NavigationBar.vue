<template>
    <v-app-bar
    color="primary"
    app
    >
        <v-toolbar-title>{{ getPageTitle }}</v-toolbar-title>
    </v-app-bar>
</template>
<script>
export default {
    name: "NavigationBar",
    computed: {
        getPageTitle() {
            return this.$store.state.pageTitle;
        },
    },
}
</script>