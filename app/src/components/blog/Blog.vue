<template>
    <v-container>
        <v-card class="rounded-xl px-md-12 pb-12">
            <v-card-title class="blue--text justify-center">
                Blog
            </v-card-title>
            <v-card-subtitle class="text-center">
                Here are some of my blog posts
            </v-card-subtitle>
            <v-card-text>
                <v-row>
                    <v-col cols="12" sm="6" v-for="article of articles" :key="article.id">
                        <v-card class="page-card rounded-lg" link :href="article.link" target="_blank">
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
                {
                    id: 1,
                    backgroundImg: "data:image/jpeg;base64,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",
                    title: "3 things to do when you cannot think of a topic to write about",
                    link: "https://medium.com/@lavanyamishra1996/what-to-do-when-you-cannot-think-of-a-topic-to-write-about-eb1854d5af00",
                },
                {
                    id: 2,
                    backgroundImg: "https://cdn.pixabay.com/photo/2024/04/11/08/59/ai-generated-8689516_640.jpg",
                    title: "Who and why is God?",
                    link: "https://medium.com/@lavanyamishra1996/who-and-why-is-god-b8f21e0a720d",
                },
                {
                    id: 3,
                    backgroundImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2x-1K9wyijXvcozljnoZvFAND-tWqKTllFA&s",
                    title: "3 lessons we can learn from the butterfly effect in our lives",
                    link: "https://medium.com/@lavanyamishra1996/3-lessons-we-can-learn-from-the-butterfly-effect-in-our-lives-1247749701d1",
                },
                {
                    id: 4,
                    backgroundImg: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*8xGnqne0r3kUo6yD",
                    title: "The dire need for focused tunnel vision in your life",
                    link: "https://medium.com/@lavanyamishra1996/the-dire-need-for-focused-tunnel-vision-in-your-life-51321498aa4b",
                },
                {
                    id: 5,
                    backgroundImg: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*M9HsLxbgnBkRTTQ7",
                    title: "My bucket list",
                    link: "https://medium.com/@lavanyamishra1996/my-bucket-list-50fa47da4950",
                },
                {
                    id: 6,
                    backgroundImg: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*SPv0hqwdvK_c8B7I",
                    title: "5 Simple Ways To Cultivate A Lifelong Love For Reading",
                    link: "https://medium.com/@lavanyamishra1996/5-simple-ways-to-cultivate-a-lifelong-love-for-reading-d66b04c247dc",
                },
                {
                    id: 7,
                    backgroundImg: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*IWG0w_Un59AaPnkA",
                    title: "3 pros and 2 cons of ghostwriting",
                    link: "https://medium.com/@lavanyamishra1996/3-pros-and-2-cons-of-ghostwriting-befc8d1e3f84",
                },
                {
                    id: 8,
                    backgroundImg: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*llCD654EQmTNzLzQ",
                    title: "Audience First: Crafting Stories That Matter to Your Readers",
                    link: "https://medium.com/@lavanyamishra1996/audience-first-crafting-stories-that-matter-to-your-readers-7599f636b1e3",
                },
                {
                    id: 9,
                    backgroundImg: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*VWs6xW4lhuMRbtuZ",
                    title: "Unlocking Python’s Potential: The Magic of Virtual Environments",
                    link: "https://medium.com/@lavanyamishra1996/unlocking-pythons-potential-the-magic-of-virtual-environments-35afb5329b1c",
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