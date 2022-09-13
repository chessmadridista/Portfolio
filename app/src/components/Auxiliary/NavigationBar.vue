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
        fixed
        temporary
        v-model="drawer">
            <v-list nav>
                <v-list-item
                v-for="item of menuItems"
                :key="item.itemID"
                link
                :to="item.link"
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
                    link: "/"
                },
                {
                    itemID: 1,
                    title: "Blog",
                    icon: "mdi-typewriter",
                    link: "/blog"
                },
                {
                    itemID: 2,
                    title: "Projects",
                    icon: "mdi-notebook",
                    link: "/projects"
                },
                {
                    itemID: 3,
                    title: "CV",
                    icon: "mdi-note",
                    link: "/work-history"
                },
                {
                    itemID: 4,
                    title: "About me",
                    icon: "mdi-account",
                    link: "/about"
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