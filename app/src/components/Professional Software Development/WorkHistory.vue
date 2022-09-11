<template>
    <v-container>
        <!-- TODO: Add the project tech stack used by separating them using bullet points in the same line. -->
        <div 
        v-for="experience of pastExperience"
        :key="experience.experienceID"
        >
            <h3>{{ experience.role }} at {{ experience.company }}</h3>
            <p>{{ experience.startDate }} - {{ experience.endDate }}</p>
            <v-timeline>
                <v-timeline-item
                color="primary"    
                v-for="project of experience.projects"
                :key="project.projectID"
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
                        :key="techStack"
                        >
                        {{ techStack }}
                        </v-chip>
                    </div>
                </v-timeline-item>
            </v-timeline>       
        </div>
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
    methods: {
        isTechStackUsed(techStack) {
            return techStack.length > 0;
        },
    },
};
</script>