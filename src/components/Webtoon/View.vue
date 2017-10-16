<template>
    <div>
        <head-component></head-component>
        <webtoon-info :nickname="nickname"></webtoon-info>
        <episode-list :nickname="nickname"></episode-list>
    </div>
</template>

<script>
    import HeadComponent from '../Head/Head.vue';
    import WebtoonInfo from './WebtoonInfo.vue';
    import EpisodeList from './EpisodeList.vue';

    export default {
        name: 'View',
        data : function(){
            return {
                nickname : this.$route.params.nickname
            }
        },
        components : {
            HeadComponent, WebtoonInfo, EpisodeList
        }
    }
</script>
