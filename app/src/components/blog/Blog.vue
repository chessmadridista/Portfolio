<template>
    <v-container>
        <v-card class="px-12">
            <v-card-title class="justify-center blue--text">Why should you play chess?</v-card-title>
            <v-card-subtitle>
                <p>February 3, 2023</p>
                <p class="text-center">A master looks at every move he would like to make, especially the impossible ones. -Garry Kasparov</p>
            </v-card-subtitle>
            <v-card-text class="text-body-1 black--text">
                <p>
                    Chess is one of the most beautiful games ever invented. 
                    We wouldn't have been graced by the presence of legendary thinkers like Garry Kasparov, Anatoly Karpov and even Magnus Carlsen had the inventor thought about what other people will think of him.
                </p>
                <p>
                    Here are a few lesser known reasons why you should start playing it:
                    <ol>
                        <li>
                            It makes you think consciously. According to research, because of the proliferation of social media and high speed internet in our lives, the average attention span has decreased from 12 seconds in year 2000 to 8.25 seconds in 2015. What's even more alarming is that the average attention span of a goldfish is 9 seconds. The brain does not need to think to consume social media. And when the brain does not need the resources, it prunes away excess neurons and this is the main reason behind the decrease in attention span over the last couple of years.
                        </li>
                        <li>
                            You learn to make tradeoffs. Beginners tend to think that after the king, queen is the most important piece in this game. It is a bit more complicated than that. There are occasions where even the pawn can be deadlier than the queen. This is a very important life skill and it's equally useful in making decisions in your workplace as well.
                        </li>
                        <li>
                            You start seeing the beauty in life. This is a bit complicated to understand. When I first started chess, I had no knowledge of the openings, middle game and end game. As I became more interested in these areas, I started to notice parallels between life and chess. One such example could be that I started appreciating even structural buildings and inventions light mobiles, laptops, and even automobiles because they might seem simple and mainstream in today's world but prior to their invention, anyone who said that these inventions are very much possible was laughed upon and thought of as crazy. It is better the crazy ones were the thinkers, because otherwise we wouldn't have gone out of the box and we could probably have stagnated as a civilization.
                        </li>
                        <li>
                            You start to understand that everyone is different. Unlike checkers, there are several pieces which have different powers in chess. If every piece had the same power, this game would have lost its sheen centuries ago. Similarly, if everyone in this world becomes the same, then we would vibe with everyone, and if we could vibe with everyone, there would be nobody left to help us grow as a person.
                        </li>
                        <li>
                            At the end of the day, it is just a game. When people win in chess, most of them think subconsciously that they are better than their opponent mentally, but the fact of the matter is everyone living at the point of writing this article would be gone from this planet in a couple of decades. On your death bed, you won't remember the materialistic things that you acquired or if you were better or worse than someone. What will really matter is the relationships you hadand how you treated everyone, especially the ones you don't know. 
                        </li>
                        <li>
                            Small decisions matter and compound in the long run. Darren Hardy has written a beautiful book titled "The Compound Effect" on this topic. If you move a piece even a square away from its ideal position from where it can threaten the opponent. Similarly, you are just a step away from taking the right decision.
                        </li>
                    </ol>
                </p>
                <p>Let me know if this article inspires you to take up this beautiful game. Be awesome :&#41;!</p>
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