<template>
    <UnderConstruction />
</template>
<script>
import UnderConstruction from './Auxiliary/UnderConstruction.vue';

export default {
    name: "About",
    components: {
        UnderConstruction,
    },
    data() {
        return {
            pageTitle: "About me",
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