<template>
    <img :src="'./assets/icones/' + filename" alt="" srcset="">
</template>

<script>
export default {
    props: {
        filename: {
            type: String,
            default: ''
        }
    },
    methods: {}
}
</script>

<style>

</style>