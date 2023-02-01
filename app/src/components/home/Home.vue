<template>
    <v-card></v-card>
</template>
<script>
export default {
    name: "Home",
    data() {
        return {
            pageTitle: "Home",
        };
    },
    methods: {
        setPageTitle() {
            this.$store.dispatch("changePageTitle", this.pageTitle);
        },
    },
    mounted() {
        this.setPageTitle();
    },
}
</script>