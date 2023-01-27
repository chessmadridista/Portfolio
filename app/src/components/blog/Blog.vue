<template>
    <UnderConstruction />
</template>
<script>
import UnderConstruction from '../auxiliary/UnderConstruction.vue';

export default {
    name: "Blog",
    components: {
        UnderConstruction,
    },
    data() {
        return {
            pageTitle: "Blog",
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