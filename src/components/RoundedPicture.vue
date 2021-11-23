<template>
    <div class="rounder-image-container">
        <img :src="source" alt="image"/>
    </div>
</template>

<script>
    export default {
        name: "RoundedPicture",
        props: {
            source: String
        }
    }
</script>

<style scoped>
    .rounder-image-container {
        overflow: hidden;
        width: 1em;
        height: 1em;
        border-radius: 0.5em;
        border: none;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
</style>
