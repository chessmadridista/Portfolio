<template>
    <v-container>
        <div 
        v-for="experience of pastExperience"
        :key="experience.experienceID"
        >
            <v-card 
            color="#707070"
            class="pt-5 pb-2 pl-8 role-container elevation-0">
                <h3>{{ experience.role }} at {{ experience.company }}</h3>
                <p>{{ experience.startDate }} - {{ experience.endDate }}</p>
            </v-card>
            <v-timeline>
                <v-timeline-item
                color="#8ac7db"    
                v-for="project of experience.projects"
                :key="project.projectID"
                >
                    <v-card 
                    class="pa-8"
                    :class="elevateCard(project.projectActive)"
                    @mouseover="project.projectActive = true"
                    @mouseleave="project.projectActive = false"
                    >
                    <h4>{{ project.projectName }}</h4>
                    <ul>
                        <li
                        v-for="responsibility of project.projectResponsibility"
                        :key="responsibility.projectRespID"
                        >
                            <p>{{ responsibility.projectRespDescription }}</p>
                        </li>
                    </ul>
                    <div v-if="isTechStackUsed(project.projectTechStack)">
                        <h5>Tech stack used:</h5>
                        <v-chip
                        v-for="techStack of project.projectTechStack"
                        class="mt-2 mx-1"
                        :key="techStack"
                        >
                        {{ techStack }}
                        </v-chip>
                    </div>
                    </v-card>
                </v-timeline-item>
            </v-timeline>       
        </div>
    </v-container>
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
    mounted() {
        this.setPageTitle();
    },
};
</script>
<style lang="scss" scoped>
.v-card {
    transition: box-shadow 1s, background 1s;

}
.role-container h3, 
.role-container p {
    color: #fff;
}
.elevation-8 {
    background: rgb(214, 255, 214);
}
</style>