<template>
    <v-navigation-drawer app v-model="showDrawer">
        <v-list>
            <v-list-item>
                <v-list-item-avatar>
                    <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                </v-list-item-avatar>

                <v-spacer></v-spacer>

                <v-badge>
                    <template v-slot:badge>0</template>
                    <v-icon>mdi-email-outline</v-icon>
                </v-badge>

                <v-badge class="ml-8 mr-5">
                    <template v-slot:badge>0</template>
                    <v-icon>mdi-bell-outline</v-icon>
                </v-badge>
            </v-list-item>

            <v-menu offset-y transition="scroll-y-transition">
                <template #activator="{ on }">
                    <v-list-item v-on="on">
                        <v-list-item-content>
                            <v-list-item-title class="title">John Leider</v-list-item-title>
                            <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-icon>mdi-menu-down</v-icon>
                        </v-list-item-action>
                    </v-list-item>
                </template>

                <v-list>
                    <v-list-item v-for="(item, i) in dropdownMenu" :key="i" @click="item.action">
                        <v-list-item-title>
                            <v-container class="d-flex justify-space-between align-center">
                                <span>{{item.text}}</span>
                                <v-icon class="ml-5">{{item.icon}}</v-icon>
                            </v-container>
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-list>

        <v-divider></v-divider>

        <v-list nav dense class="text-capitalize">
            <v-list-item color="primary" nuxt :to="fullPath('')" exact>
                <v-list-item-icon>
                    <v-icon>mdi-view-dashboard</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title v-text="$t('dashboard.dashboard')"></v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>

        <v-list nav dense class="text-capitalize">
            <v-list-group
                v-for="(list, i) in navList"
                :key="list.locale_key"
                :prepend-icon="list.icon"
                :value="isCurrentPage(list.keyword)"
                no-action
                eager
            >
                <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title v-text="$t(list.locale_key)"></v-list-item-title>
                    </v-list-item-content>
                </template>

                <v-list-item
                    v-for="subList in list.children"
                    :key="subList.locale_key"
                    nuxt
                    :to="fullPath(subList.path)"
                    exact
                >
                    <v-list-item-content>
                        <v-list-item-title v-text="$t(subList.locale_key)"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex";
import navList from "@/assets/json/dashboard_nav_list.json";

export default {
    name: "TheNavigationDrawer",

    data() {
        return {
            showDrawer: null,

            dropdownMenu: [
                {
                    text: "Change avatar",
                    icon: "mdi-image",
                    action: this.changeAvatar
                },
                {
                    text: "Change password",
                    icon: "mdi-lock",
                    action: this.changeAvatar
                },
                {
                    text: "Log out",
                    icon: "mdi-exit-to-app",
                    action: this.logOut
                }
            ],

            currentPage: 0,
            navList: navList
        };
    },

    computed: {
        ...mapState(["locale"])
    },

    methods: {
        fullPath(path) {
            return `/${this.locale}/dashboard/${path}`;
        },

        toggleDrawer() {
            this.showDrawer = !this.showDrawer;
        },

        changeAvatar() {
            console.log("change ava");
        },

        changePassword() {
            console.log("change password");
        },

        logOut() {
            console.log("log out");
        },

        isCurrentPage(keyword) {
            const currentPath = this.$route.path.split("/").pop();
            return currentPath.includes(keyword);
        }
    },

    mounted() {
        this.$root.$on("toggleDrawer", this.toggleDrawer);
    }
};
</script>

<style>
</style>