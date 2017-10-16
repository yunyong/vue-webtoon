<template>
    <div class="webtoon_list">
        <div v-show="isLoading" class="img_loading"></div>
        <ul class="list_webtoon">
            <li v-for="webtoon in list">
                <router-link :to="'/webtoon/view/'+webtoon.nickname" class="link_webtoon">
                    <div class="thumb_webtoon">
                        <img :src="webtoon.thumbnailImage2.url" class="img_webtoon" alt="" />
                    </div>
                    <div class="info_webtoon">
                        {{ webtoon.title }}
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name : 'WebtoonList',
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
                const url = 'http://m.webtoon.daum.net/data/mobile/webtoon?sort=view&page_size=20&page_no=' + this.page;
                this.$http(url, {}, (err, data) => {
                    if(this.page==1) {
                        this.list = data.data.webtoons;
                    } else if(data.data.webtoons) {
                        this.list = this.list.concat(data.data.webtoons);
                    }
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