<template>
    <v-app>
        <v-content>
            <v-container class="fill-height">
                <v-row align="stretch" justify="space-between">
                    <v-col cols="12" sm="8" offset-sm="2" md="5" offset-md="0">
                        <v-card>
                            <v-card-text>
                                <v-form v-model="loginValid" ref="loginForm">
                                    <v-text-field
                                            v-model="email"
                                            label="E-Mail"
                                            name="email"
                                            type="text"
                                            required
                                            outlined/>
                                    <v-text-field
                                            v-model="password"
                                            label="Password"
                                            name="password"
                                            type="password"
                                            required
                                            outlined/>
                                    <a class="d-block mb-5">Forgot password?</a>
                                    <v-btn class="login-button" color="primary" block @click="login">Login</v-btn>
                                </v-form>
                            </v-card-text>
                        </v-card>
                        <div class="login-with text-center">
                            ...or login with
                        </div>
                        <v-row>
                            <v-col>
                                <v-btn color="#DB4437" block>
                                    <v-icon class="mr-1" small>mdi-google</v-icon>
                                    Google
                                </v-btn>
                            </v-col>
                            <v-col>
                                <v-btn color="#3C5898" block>
                                    <v-icon class="mr-1" small>mdi-facebook</v-icon>
                                    Facebook
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" sm="8" offset-sm="2" md="1" offset-md="0" class="text-center">
                        <v-divider class="hidden-xs-only hidden-sm-only" vertical/>
                        <v-divider class="hidden-md-only hidden-lg-only hidden-xl-only"/>
                    </v-col>
                    <v-col cols="12" sm="8" offset-sm="2" md="5" offset-md="0">
                        <v-card>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                            label="E-Mail"
                                            name="email"
                                            type="text"
                                            outlined/>
                                    <v-text-field
                                            label="Password"
                                            name="password"
                                            type="password"
                                            outlined/>
                                    <v-text-field
                                            label="Confirm Password"
                                            name="confirmPassword"
                                            type="password"
                                            outlined/>
                                    <v-select
                                            :items="types"
                                            label="Type"
                                            name="confirmPassword"
                                            type="password"
                                            outlined/>
                                    <v-btn class="login-button" color="primary" block>Register</v-btn>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import {DATA} from "../main";
    import Vue from 'vue'

    export default {
        name: "Auth",
        data: () => ({
            types: [],
            email: "",
            password: "",
            loginValid: true,
        }),
        methods: {
            login: function () {
                if (this.$refs.loginForm.validate()) {
                    let index = DATA.users.findIndex((o) => {
                        return o.email === this.email && o.password === this.password
                    });
                    if (index !== -1) {
                        Vue.prototype.$user = DATA.users[index];
                        localStorage.setItem("user", JSON.stringify(DATA.users[index]));
                        this.$router.push({name: "list"})
                    }
                }
            }
        },
        mounted: function () {
            this.types = DATA.roles;
        }
    }
</script>

<style scoped>
    .login-with {
        margin: 20px 0;
    }

    .login-button {
        background: #2b5876;
        background: -webkit-linear-gradient(to right, #4e4376, #2b5876);
        background: linear-gradient(to right, #4e4376, #2b5876);
    }

    .v-content {

    }
</style>
