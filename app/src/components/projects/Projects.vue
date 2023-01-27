<template>
    <UnderConstruction />
</template>
<script>
import UnderConstruction from '../auxiliary/UnderConstruction.vue';

export default {
    name: "Projects",
    components: {
        UnderConstruction,
    },
    data() {
        return {
            pageTitle: "Projects",
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