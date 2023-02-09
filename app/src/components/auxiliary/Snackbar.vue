<template>
    <v-snackbar
    v-model="$store.state.snackbar"
    :color="$store.state.snackbarColor"
    top
    right
    >
        {{ $store.state.snackbarMessage }}
        <template v-slot:action="{ attrs }">
            <v-icon
            v-bind="attrs"
            @click="closeSnackbar()">mdi-close</v-icon>
        </template>
    </v-snackbar>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    name: 'SnackBar',
    methods: {
        ...mapActions([
            'closeSnackbar',
        ]),
    },
}
</script>