<template>
    <v-container>
        <!-- TODO: Add the project tech stack used by separating them using bullet points in the same line. -->
        <v-card v-for="experience of pastExperience"
        :key="experience.experienceID">
            <p>Check</p>
        </v-card>
        <v-timeline>
            <v-timeline-item color="#00acee">
                <p>Hello</p>
            </v-timeline-item>
            <v-timeline-item color="#00acee">
                <p>Para lol</p>
            </v-timeline-item>
            <v-timeline-item color="#00acee">
                <p>Para lol</p>
            </v-timeline-item>
        </v-timeline>
    </v-container>
</template>
<script>
import * as pastExperience from '../../assets/ProfessionalSoftwareDevelopment/pastExperience.json';

export default {
    name: "WorkHistory",
    data() {
        return {
            pastExperience: pastExperience,
        };
    },
}
</script>