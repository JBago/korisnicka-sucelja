<template>
    <layout>
        <v-row>
            <v-col cols="12">
                <image-grid :images="item.pictures"/>
            </v-col>
        </v-row>
        <v-card class="mb-5">
            <v-card-text>
                <v-row>
                    <v-col class="d-flex flex-column justify-space-between" cols="12" lg="5">
                        <div class="display-1 mb-5 white--text">{{item.title}}</div>
                        <span class="title white--text">${{item.price}}/PERSON</span>
                    </v-col>
                    <v-col cols="12" lg="7">
                        <v-chip-group class="mb-5">
                            <v-chip class="tag-chip" v-for="tag in item.tags" :key="tag"
                                    :disabled="loading">
                                {{ tag }}
                            </v-chip>
                        </v-chip-group>
                        <v-row justify="space-between" justify-lg="start">
                            <v-col cols="auto">
                                <v-card class="item-feature" outlined>
                                    <v-card-title>
                                        Duration
                                    </v-card-title>
                                    <v-card-text>
                                        {{item.duration}} Days
                                    </v-card-text>
                                </v-card>
                            </v-col>
                            <v-col cols="auto">
                                <v-card class="item-feature" outlined>
                                    <v-card-title>
                                        Capacity
                                    </v-card-title>
                                    <v-card-text>
                                        {{item.capacity}} People
                                    </v-card-text>
                                </v-card>
                            </v-col>
                            <v-col cols="auto">
                                <v-card class="item-feature" outlined>
                                    <v-card-title>
                                        Transport
                                    </v-card-title>
                                    <v-card-text>
                                        <span v-for="(transport, index) in item.transportation" :key="index">
                                            {{transport}}<span v-if="index < item.transportation.length - 1">, </span>
                                        </span>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <v-card class="mb-5">
            <v-card-text class="subtitle-1">
                <v-row>
                    <v-col cols="12" lg="3">
                        <div class="display-1 mb-5 white--text">Trip summary</div>
                    </v-col>
                    <v-col cols="12" lg="9">
                        {{item.description}}
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <v-card>
            <v-card-text class="subtitle-1">
                <v-row>
                    <v-col cols="12" lg="3">
                        <div class="display-1 mb-5 white--text">Reviews</div>
                    </v-col>
                    <v-col cols="12" lg="9">
                        <div class="d-flex flex-column align-stretch mb-5">
                            <v-textarea outlined no-resize placeholder="Leave your review"/>
                            <v-btn class="align-self-end" color="primary">Submit</v-btn>
                        </div>
                        <div class="comments">
                            <v-card class="mb-5" v-for="(review, index) in item.reviews" :key="index" outlined>
                                <v-card-title>
                                    <div>
                                        <div>
                                            {{review.user.name}}
                                        </div>
                                        <div class="subtitle-1">
                                            {{review.rating}}/5 Stars
                                        </div>
                                    </div>
                                </v-card-title>
                                <v-card-text>
                                    {{review.text}}
                                </v-card-text>
                            </v-card>
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <v-row>
            <v-col>

            </v-col>
        </v-row>
        <v-btn fab
               large
               fixed
               bottom
               right
               class="book-button"
               @click="bookDialog = true">
            <v-icon>mdi-star</v-icon>
        </v-btn>
        <v-dialog v-model="bookDialog" max-width="500px">
            <book-item :submit-callback="submitFilters"
                       :cancel-callback="cancelFilters"
                       :duration="item.duration"
                       :opened="bookDialog"/>
        </v-dialog>
    </layout>
</template>

<script>
    import {DATA} from "../../main";
    import Layout from "../Layout";
    import ImageGrid from "../../components/ImageGrid";
    import BookItem from "../../components/BookItem";

    export default {
        name: "ItemBooking",
        components: {BookItem, ImageGrid, Layout},
        data: () => ({
            item: {},
            bookDialog: false
        }),
        methods: {
            submitFilters: function () {
                this.bookDialog = false;
            },
            cancelFilters: function () {
                this.bookDialog = false;
            }
        },
        mounted: function () {
            if (this.$route.params && this.$route.params.id) {
                let index = DATA.items.findIndex((o) => {
                    return o.id === this.$route.params.id;
                });
                if (index >= 0) {
                    this.item = DATA.items[index];
                }
            } else {
                this.$router.push({name: "list"});
            }
        }
    }
</script>

<style scoped>
    .book-button {
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
