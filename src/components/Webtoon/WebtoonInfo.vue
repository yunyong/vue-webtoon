<template>
    <div class="webtoon_info" v-if="webtoon.id">
        <strong class="tit_webtoon">{{ webtoon.title }}</strong>
        <div class="info_webtoon">
            <div class="thumb_webtoon">
                <img :src="webtoon.thumbnailImage2.url" alt="" class="img_webtoon">
            </div>
            <div class="desc_webtoon">
                <span class="txt_artist">
                    <span>
                        {{ webtoon.cartoon.artists[0].name }}
                    </span>
                    <span v-if="webtoon.cartoon.artists[0].name != webtoon.cartoon.artists[1].name">
                        ,{{ webtoon.cartoon.artists[1].name }}
                    </span>
                </span>
                <div class="wrap_genre">
                    <span class="txt_genre" v-for="genre in webtoon.cartoon.genres">
                        #{{ genre.name }}
                    </span>
                    <span class="txt_genre">
                        #{{ webtoon.cartoon.categories[0].name }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'WebtoonInfo',
        props : ['nickname'],
        data : function(){
            return {
                webtoon : {},
            }
        },
        methods : {
            getWebtoon : function(){
                const url = `http://m.webtoon.daum.net/data/mobile/webtoon/view?nickname=${this.nickname}`;
                this.$http(url, {}, (err, data) => {
                    this.webtoon = data.data.webtoon;
                })
            }
        },
        created : function(){
            this.getWebtoon();
        }
    }
</script>

<style scoped>
    .webtoon_info .tit_webtoon {display:block;padding:10px;border-top:1px solid #ccc;border-bottom:1px solid #ccc;background-color:#eee}
    .webtoon_info .info_webtoon {overflow:hidden;padding:10px}
    .webtoon_info .thumb_webtoon {float:left;width:100px;border:1px solid #ccc}
    .webtoon_info .thumb_webtoon .img_webtoon {display:block;width:100px}
    .webtoon_info .desc_webtoon {overflow:hidden;padding:10px}
    .webtoon_info .desc_webtoon .txt_artist {display:block}
    .webtoon_info .wrap_genre {display:block;padding-top:10px}
    .webtoon_info .wrap_genre .txt_genre {display:inline-block;margin-right:4px;padding:2px 4px;font-size:12px;background-color:#eee}
</style>