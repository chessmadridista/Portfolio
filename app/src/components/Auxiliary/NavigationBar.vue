<template>
    <v-container>
        <v-app-bar
        color="#256"
        app
        >
            <v-app-bar-nav-icon color="#fff" @click="showMenu()" />
            <v-toolbar-title>{{ getPageTitle }}</v-toolbar-title>
        </v-app-bar>
        <v-navigation-drawer
        color="#000"
        fixed
        temporary
        src="../../assets/images/Side Nav Background.jpg"
        v-model="drawer">
            <v-list 
            nav>
                <v-list-item
                v-for="item of menuItems"
                :key="item.itemID"
                link
                :to="item.link"
                >
                    <v-list-item-icon>
                        <v-icon color="#2ff">{{ item.icon }}</v-icon>
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
<style lang="scss" scoped>
.v-toolbar__title {
    color: #fff;
}
.v-list {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    
    .v-list-item {
        color: #2ff !important;
        background: #222;
        transition: background 1s;
    }
    .v-list-item:hover {
        background: rgb(64, 92, 101);
    }
    
    .v-list-item--active {
        color: #fff;
        background: #256;
    }
}
</style>