<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-card class="filter-card">
        <v-toolbar color="primary">
            <v-toolbar-title>Book your adventure</v-toolbar-title>
        </v-toolbar>
        <v-card-title/>
        <v-card-text>
            <v-card :class="{active: selectedIndex === index, 'mb-5': true, 'text-center': true}" v-for="(index, availableDate) in availableDates"
                    :key="index" @click="selectDate(index)">
                <v-card-text>
                    {{availableDates[availableDate].startDate | formatDate}} - {{availableDates[availableDate].endDate | formatDate}}
                </v-card-text>
            </v-card>
        </v-card-text>
        <v-divider/>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="cancelCallback">
                Cancel
            </v-btn>
            <v-btn text @click="beforeSubmit" :disabled="selectedIndex === -1">
                Book
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import {randomDateRange} from "../main";

    export default {
        name: "BookItem",
        props: {
            submitCallback: Function,
            cancelCallback: Function,
            duration: Number,
            opened: Boolean
        },
        data: () => ({
            date: null,
            selectedIndex: -1,
            availableDates: []
        }),
        watch: {
            "opened": function (newValue) {
                if (newValue) {
                    this.setupDialog();
                }
            },
        },
        filters: {
            formatDate: function (date) {
                return `${date.getDay() + 1}.${date.getMonth() + 1}.${date.getFullYear()}`
            }
        },
        methods: {
            beforeSubmit: function () {
                this.submitCallback();
            },
            setupDialog: function () {
                this.availableDates = [
                    randomDateRange(this.duration),
                    randomDateRange(this.duration),
                    randomDateRange(this.duration),
                    randomDateRange(this.duration),
                    randomDateRange(this.duration),
                    randomDateRange(this.duration)
                ];
            },
            selectDate: function (index) {
                this.selectedIndex = index;
            }
        },
        mounted: function () {
            this.setupDialog();
        }
    }
</script>

<style scoped>
    .active {
        background: #2b5876;
        background: -webkit-linear-gradient(to right, #4e4376, #2b5876);
        background: linear-gradient(to right, #4e4376, #2b5876);
    }
</style>
