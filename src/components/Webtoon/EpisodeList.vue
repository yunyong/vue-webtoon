<template>
    <div class="webtoon_list">
        <div v-show="isLoading" class="img_loading"></div>
        <ul class="list_webtoon">
            <li v-for="webtoon in list">
                <div class="link_webtoon" v-if="webtoon.previewEndDate" @click="showMsg">
                    <episode-component :webtoon="webtoon"></episode-component>
                </div>
                <router-link :to="'/webtoon/viewer/'+webtoon.id" class="link_webtoon" v-else>
                    <episode-component :webtoon="webtoon"></episode-component>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    const EpisodeComponent = {
        name : 'EpisodeComponent',
        props : ['webtoon'],
        template : `
            <div>
                <div :class="webtoon.previewEndDate?'thumb_webtoon thumb_preview':'thumb_webtoon'">
                    <span v-if="webtoon.previewEndDate" class="ico_preview">P</span>
                    <img :src="webtoon.previewEndDate?webtoon.episodeImage.url:webtoon.thumbnailImage.url" class="img_webtoon" alt="" />
                </div>
                <div class="info_webtoon">
                    <span v-if="webtoon.previewEndDate">[미리보기]</span>
                    {{ webtoon.title }}
                </div>
            </div>
        `
    }

    export default {
        name : 'EpisodeList',
        props : ['nickname'],
        components : {
            EpisodeComponent
        },
        data : function(){
            return {
                list : [],
                page : 1,
                isLoading : false,
                totalItemCount : 0
            }
        },
        methods : {
            getWebtoon : function(){
                const url = `http://m.webtoon.daum.net/data/mobile/webtoon/list_episode_by_nickname?nickname=${this.nickname}&page_no=${this.page}&page_size=10&sort=desc`;
                this.$http(url, {}, (err, data) => {
                    if(this.page==1) {
                        this.list = data.data.webtoonEpisodes;

                        if(data.data.previewWebtoonEpisodes.length>0){
                            this.list = data.data.previewWebtoonEpisodes.concat(this.list);
                        };
                    } else if(data.data.webtoonEpisodes) {
                        this.list = this.list.concat(data.data.webtoonEpisodes);
                    };
                    this.totalItemCount = data.page.totalItemCount;
                    this.isLoading = false;
                })
            },
            getMore : function(){
                this.page++;
                this.getWebtoon();
            },
            scrollListener : function(){
                if(this.list.length < this.totalItemCount && document.body.scrollHeight<=(window.scrollY+window.innerHeight+100) && !this.isLoading) {
                    this.isLoading = true;
                    this.getMore();
                };
            },
            showMsg : function(e){
                e.preventDefault();
                alert('유료회차는 감상할 수 없습니다.');
            }
        },
        created : function(){
            this.getWebtoon()
            window.addEventListener('scroll', this.scrollListener)
        },
        activated : function(){
            window.addEventListener('scroll', this.scrollListener)
        },
        deactivated : function(){
            window.removeEventListener('scroll', this.scrollListener);
        }
    }
</script>

<style scoped>
    .list_webtoon .link_webtoon >>> .thumb_webtoon {position:relative;width:80px;height:48px}
    .list_webtoon .link_webtoon >>> .thumb_preview:after {position:absolute;top:0;left:0;width:80px;height:48px;background-color:rgba(0,0,0,0.2);content:''}
    .list_webtoon .link_webtoon >>> .ico_preview {position:absolute;top:0;left:0;z-index:10;width:20px;height:20px;background-color:tomato;color:#fff;text-align:center}
    .list_webtoon .link_webtoon >>> .img_webtoon {width:80px;height:48px}
</style>