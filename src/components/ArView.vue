<template>
    <scene-loader :scene="$route.params.scene"></scene-loader>
</template>

<script>
import SceneLoader from './models/SceneLoader.vue'
export default {
    name: 'ar-view',
    components: {
        SceneLoader
    },
    mounted(){

    },
    methods: {
    }
}
</script>

<style lang="postcss">

</style>