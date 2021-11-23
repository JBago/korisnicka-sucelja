<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-app>
        <v-app-bar class="app-bar" app>
            <v-container>
                <v-row>
                    <v-col cols="auto">
                        <v-toolbar-title class="app-bar-title" @click="$router.push({name: 'list'})">
                            <img class="logo" src="./../assets/logo.svg" alt="Logo"/>
                            <span>Adventurer</span>
                        </v-toolbar-title>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="auto">
                        <v-menu v-if="loggedIn" offset-y>
                            <template v-slot:activator="{ on }">
                                <v-btn text rounded v-on="on">
                                    {{$user.name}}
                                    <v-icon class="down-icon" small>mdi-arrow-down-drop-circle-outline</v-icon>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item @click="profile">
                                    Profile
                                </v-list-item>
                                <v-list-item @click="logout">
                                    Log out
                                </v-list-item>
                            </v-list>
                        </v-menu>
                        <v-btn text rounded v-if="!loggedIn" @click="login">
                            Login
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>
        <v-content>
            <v-container>
                <slot></slot>
            </v-container>
        </v-content>

        <v-footer app>
        </v-footer>
    </v-app>
</template>

<script>
    import Vue from "vue";

    export default {
        name: "Layout",
        data: () => ({
            loggedIn: false
        }),
        methods: {
            login: function () {
                this.$router.push({name: "auth"});
            },
            logout: function () {
                localStorage.removeItem("user");
                Vue.prototype.$user = null;
                this.$router.push({name: "auth"});
            },
            profile: function () {
                this.$router.push({name: "profile"});
            }
        },
        mounted() {
            this.loggedIn = !!this.$user;
        }
    }
</script>

<style scoped>
    .app-bar {
        background: #2b5876;
        background: -webkit-linear-gradient(to right, #4e4376, #2b5876);
        background: linear-gradient(to right, #4e4376, #2b5876);
    }

    .app-bar-title {
        cursor: pointer;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .app-bar-title img {
        max-width: 100%;
        max-height: 32px;
        margin-right: 16px;
    }

    .profile-picture {
        font-size: 1.5em;
    }

    .down-icon {
        margin-left: 0.5em;
    }

    .button-separator {
        margin: 0 1em;
    }
</style>
