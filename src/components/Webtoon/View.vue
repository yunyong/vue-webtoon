<template>
    <div>
        <head-component></head-component>
        <webtoon-info :nickname="nickname" v-if="nickname"></webtoon-info>
        <episode-list :nickname="nickname" v-if="nickname"></episode-list>
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
                nickname : ''
            }
        },
        components : {
            HeadComponent, WebtoonInfo, EpisodeList
        },
        created : function(){
        },
        activated : function(){
//            if(this.nickname == this.$route.params.nickname){
//                console.log('nothing')
//            } else {
                this.nickname = this.$route.params.nickname;
//            }
        }
    }
</script>
