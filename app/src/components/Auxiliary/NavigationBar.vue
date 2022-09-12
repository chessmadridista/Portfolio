<template>
    <v-container>
        <v-app-bar
        color="primary"
        app
        >
            <v-app-bar-nav-icon @click="showMenu()" />
            <v-toolbar-title>{{ getPageTitle }}</v-toolbar-title>
        </v-app-bar>
        <v-navigation-drawer
        absolute
        temporary
        v-model="drawer">
            <v-list>
                <v-list-item
                v-for="item of menuItems"
                :key="item.itemID"
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-container>
</template>
<script>
export default {
    name: "NavigationBar",
    data() {
        return {
            drawer: false,
            menuItems: [
                {
                    itemID: 0,
                    title: "Home",
                    icon: "mdi-view-dashboard",
                },
                {
                    itemID: 1,
                    title: "Blog",
                    icon: "mdi-view-dashboard",
                },
                {
                    itemID: 2,
                    title: "Projects",
                    icon: "mdi-view-dashboard",
                },
                {
                    itemID: 3,
                    title: "CV",
                    icon: "mdi-view-dashboard",
                },
                {
                    itemID: 4,
                    title: "About me",
                    icon: "mdi-view-dashboard",
                },
            ],
        };
    },
    methods: {
        showMenu() {
            this.drawer = true;
        },
    },
    computed: {
        getPageTitle() {
            return this.$store.state.pageTitle;
        },
    },
}
</script>