<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-card class="filter-card">
        <v-toolbar color="primary">
            <v-toolbar-title>Filtering</v-toolbar-title>
        </v-toolbar>
        <v-card-title/>
        <v-card-text>
            <v-select :items="locations"
                      v-model="location"
                      label="Location"
                      clearable
                      outlined/>
            <v-select :items="tags"
                      v-model="selectedTags"
                      label="Tags"
                      chips
                      clearable
                      multiple
                      outlined/>
            <v-range-slider
                    label="Price range"
                    v-model="price"
                    step="10"
                    thumb-label
                    :max="priceMax"
                    :min="priceMin"/>
        </v-card-text>
        <v-divider/>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="cancelCallback">
                Cancel
            </v-btn>
            <v-btn text @click="beforeSubmit">
                Save
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import {DATA} from "../main";

    export default {
        name: "ItemFilters",
        props: {
            submitCallback: Function,
            cancelCallback: Function,
            filters: Array,
            opened: Boolean
        },
        data: () => ({
            price: [],
            priceLabels: [],
            priceMax: 0,
            priceMin: 0,
            locations: [],
            location: "",
            tags: [],
            selectedTags: []
        }),
        watch: {
            "opened": function (newValue) {
                if (newValue) {
                    this.setupDialog();
                }
            },
            "price": function () {
                this.priceLabels = [`$$${this.price[0]}`, `$$${this.price[1]}`]
            }
        },
        methods: {
            beforeSubmit: function () {
                let filters = [];
                this.selectedTags.forEach((o) => {
                    filters.push({
                        type: "Tag",
                        value: o
                    });
                });
                if (this.price[0] !== this.priceMin) {
                    filters.push({
                        type: "Price Min",
                        value: this.price[0]
                    });
                }
                if (this.price[1] !== this.priceMax) {
                    filters.push({
                        type: "Price Max",
                        value: this.price[1]
                    });
                }
                if (this.location) {
                    filters.push({
                        type: "Location",
                        value: this.location
                    });
                }
                this.submitCallback(filters);
            },
            setupDialog: function () {
                let max = 0;
                let min = 1000000;
                DATA.prices.forEach((o) => {
                    max = Math.max(max, o);
                    min = Math.min(min, o);
                });
                this.priceMax = max;
                this.priceMin = min;
                this.price = [min, max];
                this.selectedTags = [];
                this.location = "";
                this.filters.forEach((o) => {
                    switch (o.type) {
                        case "Tag":
                            this.tags.push(o.value);
                            break;
                        case "Location":
                            this.location = o.value;
                            break;
                        case "Price Max":
                            this.price = [this.price[0], o.value];
                            break;
                        case "Price Min":
                            this.price = [o.value, this.price[1]];
                            break;
                    }
                });
                this.locations = DATA.locations;
                this.tags = DATA.tags;
            }
        },
        mounted: function () {
            this.setupDialog();
        }
    }
</script>

<style scoped>
</style>
