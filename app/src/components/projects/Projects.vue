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
                            <v-card class="page-card rounded-lg" :href="project.link" target="_blank">
                                <v-img height="200"
                                :src="project.backgroundImg">
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
                                    <v-chip small outlined color="error" v-if="project.isUnderDevelopment">Prototype</v-chip>
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
            projects: [
                {
                    id: 0,
                    backgroundImg: "https://i.pinimg.com/736x/14/53/2d/14532daa32a704bf31adc1d8f93c935d.jpg",
                    title: "Memento Mori",
                    summary: "Embrace life's impermanence with our Memento Mori Calendar. Daily reminders of mortality inspire mindfulness, gratitude, and meaningful living. Track days with introspective quotes and reflections to cherish each moment.",
                    link: "https://mementomori.nostalgician.in",
                    isUnderDevelopment: false,
                },
                {
                    id: 1,
                    backgroundImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaQLeWL02pTqVLqlqFdFdYlx-pd5xJ9oTsEg&s",
                    title: "Negative Thoughts Dustbin",
                    summary: "Dispose of negative thoughts with our Dustbin App. Log and discard worries, anxieties, and fears. Gain clarity, positivity, and mental peace. Transform negativity into motivation with daily affirmations and reflections.",
                    link: "https://dustbin.nostalgician.in",
                    isUnderDevelopment: false,
                },
                {
                    id: 2,
                    backgroundImg: "https://steamuserimages-a.akamaihd.net/ugc/1884211780447608618/006383598D9BF7F19ECDB0AA97F98AB40DB889C5/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
                    title: "Sigma Goal Tracker",
                    summary: "Achieve excellence with Sigma Goal Tracker. Set, track, and conquer goals with precision. Boost productivity with personalized plans, progress analytics, and motivational tips. Stay focused, stay Sigma, and reach your peak.",
                    link: "https://sigma.nostalgician.in",
                    isUnderDevelopment: true,
                },
                {
                    id: 3,
                    backgroundImg: "https://t4.ftcdn.net/jpg/07/14/05/65/360_F_714056531_dFh9oTo4Dg18UJ11opVdC4FxIG9CyayE.jpg",
                    title: "Couples Journal",
                    summary: "Strengthen your bond with the Couples Journal App. Share thoughts, memories, and dreams. Daily prompts, reflections, and interactive features foster deeper connections and understanding. Celebrate your journey together.",
                    link: "https://coupjournal.nostalgician.in",
                    isUnderDevelopment: true,
                },
                {
                    id: 4,
                    backgroundImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCGJtBzxUq9pU-ImW8gIsZZSM81veVi5NWZQ&s",
                    title: "Wireframer",
                    summary: "Unleash your creative genius with our intuitive wireframing app. Design stunning prototypes effortlessly and bring your ideas to life in just a few clicks!",
                    link: "https://wireframer.nostalgician.in",
                    isUnderDevelopment: true,
                },
                {
                    id: 5,
                    backgroundImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOzlo4HEH8JNaz_AWqVWqS5Z6nXNHk6Hr9qg&s",
                    title: "Love or hate",
                    summary: "An exciting new form of social media where people can love and hate the posts, even in comments.",
                    link: "https://loveorhate.nostalgician.in",
                    isUnderDevelopment: true,
                },
                {
                    id: 6,
                    backgroundImg: "https://thumbs.dreamstime.com/b/admin-word-wooden-cube-admin-word-wooden-cube-business-concept-266905680.jpg",
                    title: "Geektrust Admin UI",
                    summary: "This app was made accordingly as per the rules set in the Geektrust Admin UI challenge.",
                    link: "https://geektrust-admin.nostalgician.in",
                    isUnderDevelopment: false,
                },
                {
                    id: 7,
                    backgroundImg: "https://images.unsplash.com/photo-1532202193792-e95ef22f1bce?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHNoaXJ0fGVufDB8fDB8fHww",
                    title: "Geektrust Teerex Store",
                    summary: "This app was made accordingly as per the rules set in the Geektrust Teerex challenge.",
                    link: "https://geektrust-teerex.nostalgician.in",
                    isUnderDevelopment: false,
                },
            ],
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