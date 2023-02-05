<template>
    <v-container>
        <v-card class="pa-6">
            <v-card-title class="blue--text justify-center">About Me</v-card-title>
            <v-card-text>
                <p>Hi, I am Lavanya and my main passion is music but I also like to work on software development projects and I also write articles on the side as well. Feel free to send me a note using the textbox below :&#41;.</p>
                <v-form>
                    <v-textarea 
                    outlined 
                    label="Message"
                    placeholder="Hello, I would like to collaborate on the background music theme for my play..."
                    ></v-textarea>
                    <v-row>
                        <v-col>
                            <v-btn text color="error">Reset</v-btn>
                        </v-col>
                        <v-col class="text-right">
                            <v-btn color="primary" class="text-right">Send</v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
export default {
    name: "About",
    data() {
        return {
            pageTitle: "About me",
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