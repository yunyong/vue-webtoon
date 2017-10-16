<template>
    <div>
        <head-component></head-component>
        <webtoon-list></webtoon-list>
    </div>
</template>

<script>
    import HeadComponent from '../Head/Head.vue';
    import WebtoonList from './WebtoonList.vue';

    export default {
        name: 'Webtoon',
        components : {
            HeadComponent, WebtoonList
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
