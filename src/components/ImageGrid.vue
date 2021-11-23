<template>
    <div class="d-flex flex-row">
        <v-card class="image-grid-column">
            <div class="image-placeholder">
                <div class="image-container">
                    <img :src="images[0]" alt="Image"/>
                </div>
            </div>
        </v-card>
        <v-card class="image-grid-column">
            <div class="image-placeholder">
                <div class="image-container">
                    <img :src="images[1]" alt="Image"/>
                </div>
            </div>
        </v-card>
        <div class="image-grid-column-small">
            <v-card class="image-placeholder">
                <div class="image-container">
                    <img :src="images[2]" alt="Image"/>
                </div>
            </v-card>
            <div class="separator"></div>
            <v-card class="image-placeholder">
                <div class="image-container">
                    <img :src="images[3]" alt="Image"/>
                </div>
            </v-card>
        </div>
        <v-card class="image-grid-column">
            <div class="image-placeholder">
                <div class="image-container">
                    <img :src="images[4]" alt="Image"/>
                </div>
            </div>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "ImageGrid",
        props: {
            images: Array
        }
    }
</script>

<style scoped>
    .image-grid-column {
        flex: 2;
        margin-right: 8px;
    }

    .image-grid-column:last-child {
        margin-left: 8px;
        margin-right: 0;
    }

    .image-grid-column-small {
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .image-grid-column-small > .separator {
        margin-top: 8px;
    }

    .image-grid-column-small > *:first-child {
        flex: 0 0 calc(50% - 8px);
        padding-bottom: 8px;
        max-height: calc(50% - 8px);
    }

    .image-grid-column-small > *:last-child {
        height: calc(50% - 8px);
        max-height: calc(50% - 8px);
    }

    .image-placeholder {
        padding-bottom: 133.333%;
        position: relative;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        overflow: hidden;
    }

    .image-container {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .image-container img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        position: static;
    }
</style>
