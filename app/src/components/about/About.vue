<template>
    <v-container>
        <v-card class="pa-6 mb-8">
            <v-card-title class="blue--text justify-center">About Me</v-card-title>
            <v-card-text>
                <p>Hi, I am Lavanya and my main passion is music but I also like to work on software development projects and I also write articles on the side as well. Feel free to send me a note using the form below :&#41;.</p>
                <v-form ref="form" class="mt-10">
                    <v-row>
                        <v-col md="6">
                            <v-text-field v-model="firstName" outlined label="First name" type="text" clearable></v-text-field>
                        </v-col>
                        <v-col md="6">
                            <v-text-field v-model="lastName" outlined label="Last name" type="text" clearable></v-text-field>
                        </v-col>
                        <v-col md="6">
                            <v-text-field v-model="email" outlined label="Email" type="email" clearable></v-text-field>
                        </v-col>
                        <v-col md="6">
                            <v-text-field v-model="phone" outlined label="Phone" type="number" clearable></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-textarea 
                            v-model="message"
                            counter="500"
                            outlined 
                            label="Message*"
                            placeholder="Hello, I would like to collaborate on the background music theme for my play..."
                            max="20"
                            required
                            clearable
                            ></v-textarea>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-btn text color="error" @click=reset()>Reset</v-btn>
                        </v-col>
                        <v-col class="text-right">
                            <v-btn color="primary" class="text-right" @click="send()">Send</v-btn>
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
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
        };
    },
    methods: {
        setPageTitle() {
            this.$store.dispatch("changePageTitle", this.pageTitle);
        },
        reset() {
            this.$refs.form.reset();
        },
    },
    mounted() {
        this.setPageTitle();
    },
}
</script>