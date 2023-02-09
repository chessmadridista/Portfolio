<template>
    <v-container>
        <v-card class="pa-2 pa-sm-4 pa-md-6 mb-8">
            <v-card-title class="blue--text justify-center">About Me</v-card-title>
            <v-card-text>
                <p>Hi, I am Lavanya and my main passion is music but I also like to work on software development projects and I also write articles on the side as well. Feel free to send me a note using the form below :&#41;.</p>
                <v-form ref="form" class="mt-10">
                    <v-row>
                        <v-col cols="12" md="6">
                            <v-text-field v-model="firstName" outlined label="First name" type="text" clearable></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field v-model="lastName" outlined label="Last name" type="text" clearable></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field v-model="email" outlined label="Email" type="email" clearable></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field v-model="phone" outlined label="Phone" type="number" clearable></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
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
import { mapActions } from 'vuex';

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
        ...mapActions([
            'startSnackbarTransition',
        ]),
        setPageTitle() {
            this.$store.dispatch("changePageTitle", this.pageTitle);
        },
        reset() {
            this.$refs.form.reset();
            const SNACKBAR_COLOR = "success";
            const SNACKBAR_MESSAGE = "Your form has been reset successfully!";
            this.startSnackbarTransition({ color: SNACKBAR_COLOR, message: SNACKBAR_MESSAGE });
        },
        appendField(field, formData) {
            if (this[field] !== "") {
                formData.append(field, this[field]);
            }
        },
        submitForm(formData) {
            const URL = "https://api.nostalgician.in/about";
            this.axios.post(URL, formData);
        },
        send() {
            let formData = new FormData();
            let snackbarColor;
            let snackbarMessage;

            if (this.message === "" || this.message === null) {
                snackbarColor = "error";
                snackbarMessage = "Please let the words flow out of your fingers (write something in the message).";
            } else {
                this.appendField("firstName", formData);
                this.appendField("lastName", formData);
                this.appendField("email", formData);
                this.appendField("phone", formData);
                this.appendField("message", formData);
                this.submitForm(formData);
                this.$refs.form.reset();
                snackbarColor = "success"
                snackbarMessage = "You form has been submitted successfully! :)";          
            }

            this.startSnackbarTransition({ color: snackbarColor, message: snackbarMessage });
        },
    },
    mounted() {
        this.setPageTitle();
    },
}
</script>