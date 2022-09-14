<template>
    <v-container>
        <div class="image__container">
            <img src="../../assets/images/Under Construction.jpg" alt="Under construction">
        </div>
        <div class="image__dimmer"></div>
        <v-card class="pa-10 elevation-0">
            <v-card-title class="justify-center">
                ERROR 503
            </v-card-title>
            <v-card-text class="text-center">
                Oops, it seems that this page is currently under development. Let's hope that
                it gets ready by the next time you check it out :&#41;!
            </v-card-text>
            <p></p>
        </v-card>
    </v-container>
</template>
<script>
export default {
    name: "UnderConstruction"
}
</script>
<style lang="scss" scoped>
.image__container {
    position: fixed;
    top: 0;
    left: 0;

    img {
        max-height: 100%;
        max-width: 100%;
    }
}
.image__dimmer {
    position:fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(rgba(255, 167, 167, 0.3), rgba(0, 0, 0, 0.8));
}
.v-card {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 220px;
    width: 600px;
    animation-name: card-animation;
    animation-duration: 10s;
    animation-iteration-count: infinite;

    .v-card__text {
        color: #000;
    }
}
@keyframes card-animation {
    0% {
        background: rgb(255, 218, 224);
    }
    20% {
        background: rgb(199, 255, 199);
    }
    40% {
        background: rgb(255, 249, 190);
    }
    60% {
        background: rgb(242, 199, 255);
    }
    80% {
        background: rgb(206, 255, 255);
    }
    100% {
        background: rgb(255, 218, 224);
    }
}
</style>