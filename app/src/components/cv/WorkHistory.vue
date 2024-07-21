<template>
        <iframe
            src="/Lavanya Mishra Latest Resume.pdf"
            type="application/pdf"
            height="100%"
            width="100%"
            frameborder="0"
        />
</template>
<script>
import pastExperience from '../../assets/data/pastExperience.json';

export default {
    name: "WorkHistory",
    data() {
        return {
            pageTitle: "CV",
            pastExperience: pastExperience,
            cardElevationLevel: "elevation-2",
        };
    },
    methods: {
        isTechStackUsed(techStack) {
            return techStack.length > 0;
        },
        elevateCard(isProjectActive) {
            let elevationClass;

            if (isProjectActive) {
                elevationClass = "elevation-8";
            } else {
                elevationClass = "elevation-2";
            }

            return elevationClass;
        },
        setPageTitle() {
            this.$store.dispatch("changePageTitle", this.pageTitle);

            return true;
        },
    },
    computed: {
        isTimelineDense() {
            let isDense;
            
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': 
                    isDense = true; 
                    break;
                case 'sm': 
                    isDense = true; 
                    break;
                case 'md': 
                    isDense = false;
                    break;
                case 'lg': 
                    isDense = false;
                    break;
                case 'xl': 
                    isDense = false;
                    break;
            }

            return isDense;
        },
    },
    mounted() {
        this.setPageTitle();
    },
};
</script>
<style lang="scss" scoped>
.v-card {
    transition: box-shadow 1s, background 1s;
}
.project-name {
    color: #006087;
}
.role-container h3, 
.role-container p {
    color: #fff;
}
.elevation-8 {
    background: rgb(214, 255, 214);
}
</style>