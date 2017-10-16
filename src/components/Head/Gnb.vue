<template>
    <ul class="list_gnb">
        <li v-for="(value,key) in menu">
            <router-link :to="key=='webtoon'?'/':'/'+key" class="link_gnb">
                {{ value }}
            </router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name : 'Gnb',
        data : function(){
            return {
                menu : {
                    webtoon : '웹툰',
                    league : '리그',
                    my : 'MY'
                }
            }
        }
    }
</script>

<style scoped>
    .list_gnb {overflow:hidden}
    .list_gnb li {float:left;width:33.3%}
    .list_gnb li:last-of-type {width:33.4%}
    .list_gnb .link_gnb {display:block;padding:10px 0;text-align:center}
</style>