<template>
    <v-container class="pb-6">
        <v-card class="rounded-xl mx-auto px-4 pb-6">
            <v-card-title class="blue--text justify-center">Projects</v-card-title>
            <v-card-subtitle class="text-center">Here are some of my creations</v-card-subtitle>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="4" v-for="project of projects"
                        :key="project.id">
                            <v-card class="page-card rounded-lg" :href="project.app_url" target="_blank">
                                <v-img height="200"
                                :src="project.background_image_url">
                                </v-img>
                                <v-tooltip top
                                max-width="400px">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-card-title class="blue--text justify-center"
                                        v-bind="attrs"
                                        v-on="on">{{ project.title }}</v-card-title>
                                    </template>
                                    <v-card-subtitle>{{ project.summary }}</v-card-subtitle>
                                </v-tooltip>
                                <v-card-text class="text-center">
                                    <v-chip small outlined color="orange" v-if="project.is_under_development">Prototype</v-chip>
                                    <v-chip small outlined color="success" v-else>MVP</v-chip>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
export default {
    name: "Projects",
    data() {
        return {
            pageTitle: "Projects",
            projects: [],
        };
    },
    methods: {
        setPageTitle() {
            this.$store.dispatch("changePageTitle", this.pageTitle);
        },
        getProjects() {
            const url = "https://portfolio-project-manager-api.nostalgician.in/get-projects"
            this.axios.get(url)
            .then((response) => {
                this.projects = response.data.projects
            })
        }
    },
    mounted() {
        this.setPageTitle();
        this.getProjects();
    },
}
</script>
<style scoped>
.v-image {
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100%);
}
.page-card {
    transition: 1s;
    background: rgb(244, 244, 255);
}
.page-card:hover {
    background: rgb(224, 226, 255);
}
</style>