<template>
    <v-container>
        <!-- TODO: Add the project tech stack used by separating them using bullet points in the same line. -->
        <p
        v-for="experience of pastExperience"
        :key="experience.experienceID">ID: {{ experience.experienceID }}</p>
    </v-container>
</template>
<script>
import pastExperience from '../../assets/Professional Software Development/pastExperience.json';

export default {
    name: "WorkHistory",
    data() {
        return {
            pastExperience: pastExperience,
        };
    },
};
</script>