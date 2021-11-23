<template>
    <layout>
        <v-row v-if="filters.length > 0">
            <v-col>
                <v-chip-group max="0" columns="false">
                    <v-chip v-for="filter in filters" :key="(filter.type + filter.value)"
                            close :disabled="loading"
                            @click:close="removeFilter(filter)">
                        {{ filter.type }}: {{filter.value}}
                    </v-chip>
                </v-chip-group>
                <v-divider></v-divider>
            </v-col>
        </v-row>
        <v-row :class="{'items-loading': loading}">
            <v-col
                    class="d-flex"
                    v-for="item in items"
                    :key="item.id"
                    cols="12"
                    xl="3"
                    md="4"
                    sm="6"
                    xs="12">
                <v-card v-ripple="false">
                    <v-img
                            class="white--text align-end"
                            aspect-ratio="1.5"
                            gradient="rgba(0,0,0,.3), rgba(0,0,0,.3)"
                            :src="item.thumbnail">
                        <v-card-title class="item-title">{{item.title}}</v-card-title>
                    </v-img>
                    <v-card-text>
                        <v-chip-group>
                            <v-chip class="tag-chip" v-for="tag in item.tags" :key="tag" @click="selectTag(tag)"
                                    :disabled="loading">
                                {{ tag }}
                            </v-chip>
                        </v-chip-group>
                        <div v-clamp class="item-description mb-5">
                            {{item.description}}
                        </div>
                        <div class="d-flex">
                            <v-btn class="ml-auto right" color="primary" rounded @click="openItem(item.id)"
                                   :disabled="loading">
                                ${{item.price}}/Person
                            </v-btn>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-progress-circular
                class="loading-progress"
                v-if="loading"
                indeterminate
                color="primary"
        ></v-progress-circular>
        <v-btn fab
               large
               fixed
               bottom
               right
               class="filter-button"
               :disabled="loading"
               @click="filtersDialog = true">
            <v-icon>mdi-filter</v-icon>
        </v-btn>
        <v-dialog v-model="filtersDialog" max-width="500px">
            <item-filters :submit-callback="submitFilters"
                          :cancel-callback="cancelFilters"
                          :filters="filters"
                          :opened="filtersDialog"/>
        </v-dialog>
    </layout>
</template>

<script>
    import Layout from "../Layout";
    import {DATA} from "../../main";
    import ItemFilters from "../../components/ItemFilters";

    export default {
        name: "ItemsList",
        components: {ItemFilters, Layout},
        data: () => ({
            items: [],
            filters: [],
            tags: [],
            filtersDialog: false,
            loading: false
        }),
        watch: {
            "filters": function () {
                this.loading = true;
                setTimeout(() => {
                    if (this.filters.length > 0) {
                        this.items = DATA.items.filter((o) => {
                            return this.applyFilters(o);
                        })
                    } else {
                        this.items = DATA.items;
                    }
                    this.loading = false;
                }, 1000);
            }
        },
        methods: {
            openItem: function (id) {
                this.$router.push(({name: "booking", params: {id: id}}))
            },
            selectTag: function (tag) {
                let index = this.filters.findIndex(function (o) {
                    return o.type === "Tag" && o.value === tag;
                });
                if (index === -1) {
                    this.filters.push({
                        type: "Tag",
                        value: tag
                    });
                }
            },
            applyFilters: function (item) {
                let result = true;
                this.filters.forEach((o) => {
                    switch (o.type) {
                        case "Tag":
                            result &= item.tags.indexOf(o.value) !== -1;
                            break;
                    }
                });
                return result;
            },
            submitFilters: function (filters) {
                this.filtersDialog = false;
                this.filters = filters;
            },
            cancelFilters: function () {
                this.filtersDialog = false;
            },
            removeFilter: function (filter) {
                let index = this.filters.findIndex(function (o) {
                    return o.type === filter.type && o.value === filter.value;
                });
                if (index !== -1) {
                    this.filters.splice(index, 1);
                }
            }
        },
        filters: {
            formatDate: function (date) {
                return `${date.getDay() + 1}.${date.getMonth() + 1}.${date.getFullYear()}`
            }
        },
        mounted() {
            this.items = DATA.items;
        }
    }
</script>

<style scoped>
    .items-loading {
        opacity: 0.6;
    }

    .loading-progress {
        position: fixed;
        top: 50%;
        left: 50%;
    }

    .item-title {
        word-break: keep-all;
    }

    .item-subtitle {
        padding-bottom: 0;
    }

    .item-description {
        line-height: 1.2em;
        max-height: 6em;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .filter-button {
        background: #2b5876;
        background: -webkit-linear-gradient(to right, #4e4376, #2b5876);
        background: linear-gradient(to right, #4e4376, #2b5876);
    }

    .tag-chip {
        background: #555;
        color: #fff !important;
    }

    .tag-chip::before {
        opacity: 0 !important;
    }
</style>
