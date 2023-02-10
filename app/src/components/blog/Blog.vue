<template>
    <v-container>
        <v-card tile class="elevation-0 px-md-12 pb-2">
            <v-card-title class="blue--text justify-center">
                Blog
            </v-card-title>
            <v-card-subtitle class="text-center">
                Here are some of my blog posts
            </v-card-subtitle>
            <v-card-text>
                <v-row>
                    <v-col cols="12" sm="6" v-for="article of articles" :key="article.id">
                        <v-card link :href="article.link" target="_blank">
                            <v-img height="200" :src="article.backgroundImg"></v-img>
                            <v-card-title class="blue--text justify-center">
                                {{ article.title }}
                            </v-card-title>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>

export default {
    name: "Blog",
    data() {
        return {
            pageTitle: "Blog",
            articles: [
                {
                    id: 0,
                    backgroundImg: "https://miro.medium.com/max/640/1*YrDjozYKntNmosbP8mQxdg.webp",
                    title: "6 reasons to start playing chess",
                    link: "https://medium.com/@lavanyamishra1996/why-should-you-play-chess-163873b8305b",
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
</style>