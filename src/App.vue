<template>
    <div id="app">
        <keep-alive include="Webtoon,View">
            <router-view/>
        </keep-alive>
    </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  /* reset */
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,textarea,p,blockquote,th,td,input,select,textarea,button{margin:0;padding:0}
  fieldset,img{border:0 none}
  dl,ul,ol,menu,li {list-style:none}
  blockquote, q {quotes:none}
  blockquote:before, blockquote:after,q:before, q:after {content:'';content:none}
  input,select,textarea,button {font-size:100%;vertical-align:middle}
  button {border:0 none;background-color:transparent;cursor:pointer}
  table {border-collapse:collapse;border-spacing:0}
  body{-webkit-text-size-adjust:none} input[type='text'],input[type='password'],input[type='submit'],input[type='search'] {-webkit-appearance:none; border-radius:0}
  input:checked[type='checkbox'] {background-color:#666; -webkit-appearance:checkbox}
  button,input[type='button'],input[type='submit'],input[type='reset'],input[type='file'] {-webkit-appearance:button; border-radius:0}
  body {min-width:320px;background-color:#fff}

  a {color:#333;text-decoration:none} a:active, a:hover {text-decoration:none}
  address,caption,cite,code,dfn,em,var {font-style:normal;font-weight:normal}
  .show {display:block}
  .hide {display:none}

  body,th,td,input,select,textarea,button {font-size:14px;line-height:1.5;font-family:'Malgun Gothic', '맑은 고딕', sans-serif;color:#333}

  .img_loading {position:fixed;top:50%;left:50%;width:40px;height:40px;margin:-20px 0 0 -20px;background:url(http://i1.daumcdn.net/img-section/cartoon/webtoon2015/ico_loading.gif) no-repeat}
  .list_webtoon {border-bottom:1px solid #ccc}
  .list_webtoon li {padding:10px;border-top:1px solid #ccc}
  .list_webtoon .link_webtoon {display:block;overflow:hidden}
  .list_webtoon .link_webtoon .thumb_webtoon {float:left;width:50px;margin-right:10px}
  .list_webtoon .link_webtoon .info_webtoon {overflow:hidden}
  .list_webtoon .link_webtoon .img_webtoon {display:block;width:50px}
</style>
