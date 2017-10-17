<template>
    <div class="webtoon_viewer" @click="toggleBar">
        <div class="viewer_head" v-if="info.webtoon" v-show="isShowBar">
            <router-link :to="`/webtoon/view/${info.webtoon.nickname}`" class="link_view">작품홈</router-link>
            <span class="tit_episode">{{ info.webtoonEpisode.title }}</span>
        </div>
        <div class="viewer_foot" v-if="info.webtoon" v-show="isShowBar">
            <router-link :to="`/webtoon/viewer/${info.prevEpisodeId}`" class="link_episode">&lt; 이전화</router-link>
            <router-link :to="`/webtoon/viewer/${info.nextEpisodeId}`" class="link_episode">다음화 &gt;</router-link>
        </div>
        <div v-show="imgLength==0" class="img_loading"></div>
        <div v-for="img in images">
            <img :src="img.url" alt="" class="img_viewer">
        </div>
    </div>
</template>

<script>
    export default {
        name : 'viewer',
        data : function(){
            return {
                info : {},
                episodeId : this.$route.params.id,
                images : [],
                isShowBar : true
            }
        },
        computed : {
            imgLength : function(){
                return this.images.length
            }
        },
        watch : {
            '$route' : function(to, from){
                this.info.webtoonEpisode.title = '';
                this.images = [];
                this.episodeId = this.$route.params.id;
                this.getEpisode();
            }
        },
        methods : {
            getEpisode : function(){
                const url = `http://webtoon.daum.net/data/mobile/webtoon/viewer?id=${this.episodeId}`;
                this.$http(url, {}, (err,data) => {
                    this.info = data.data;
                    this.images = data.data.webtoonImages;

                })
            },
            showBar : function(){
                this.isShowBar = true;
            },
            hideBar : function(){
                this.isShowBar = false;
            },
            toggleBar : function(){
                if(window.scrollY<10) {
                    this.showBar();
                } else if(document.body.scrollHeight<=(window.scrollY+window.innerHeight)){
                    this.showBar();
                } else {
                    this.isShowBar = !this.isShowBar;
                }
            },
            checkBar : function(){
                if(window.scrollY<10) {
                    this.showBar();
                } else if(document.body.scrollHeight<=(window.scrollY+window.innerHeight)){
                    this.showBar();
                } else if(window.scrollY>10){
                    this.hideBar();
                } else {
                    this.isShowBar = !this.isShowBar;
                }
            },
            scrollListener : function(){
                this.checkBar();
            }
        },
        created : function(){
            this.getEpisode();
            window.addEventListener('scroll', this.scrollListener)
        },
        destroyed : function(){
            window.removeEventListener('scroll', this.scrollListener)
        }
    }
</script>

<style>
.webtoon_viewer {overflow:hidden;width:100%;min-width:320px}
.webtoon_viewer .img_viewer {display:block;width:100%;height:auto}
.webtoon_viewer .viewer_head {position:fixed;top:0;left:0;width:100%;padding:10px;background-color:#555}
.webtoon_viewer .viewer_head .link_view {color:#fff}
.webtoon_viewer .viewer_head .tit_episode {padding-left:10px;color:#eee}
.webtoon_viewer .viewer_foot {overflow:hidden;position:fixed;bottom:0;left:0;width:100%;background-color:#555}
.webtoon_viewer .viewer_foot .link_episode {float:left;width:50%;padding:10px 0;color:#fff;text-align:center}
</style>