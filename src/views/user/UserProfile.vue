<template>
    <layout>
        <v-card>
            <v-card-text>
                <v-form>
                    <v-text-field
                            v-model="$user.name"
                            label="Name"
                            name="name"
                            type="text"
                            readonly
                            outlined/>
                    <v-text-field
                            v-model="$user.email"
                            label="E-Mail"
                            name="email"
                            type="text"
                            readonly
                            outlined/>
                </v-form>
            </v-card-text>
        </v-card>
    </layout>
</template>

<script>
    import Layout from "../Layout";

    export default {
        name: "UserProfile",
        components: {Layout},
        data: () => ({
            email: "",
            name: ""
        }),
        mounted: function () {
            if (!this.$user) {
                this.$router.push({name: "auth"})
            }
        }
    }
</script>

<style scoped>

</style>
