import Vue from 'vue'
import Router from 'vue-router'
import jsonp from 'jsonp'

import League from '@/components/League/League'
import My from '@/components/My/My'
import Webtoon from '@/components/Webtoon/Webtoon'
import View from '@/components/Webtoon/View'
import Viewer from '@/components/Webtoon/Viewer'

// Vue.prototype.$http = axios
Vue.prototype.$http = jsonp
Vue.use(Router)

export default new Router({
    mode : 'history',
    scrollBehavior: function (to, from, savedPosition) {
        return savedPosition || { x: 0, y: 0 }
    },
    routes: [
      {
        path: '/',
        name: 'webtoon',
        component: Webtoon
      },
      {
        path: '/league',
        name: 'league',
        component: League
      },
      {
        path: '/my',
        name: 'my',
        component: My
      },
      {
          path: '/webtoon/view/:nickname',
          name: 'view',
          component: View
      },
      {
          path: '/webtoon/viewer/:id',
          name: 'viewer',
          component: Viewer
      }
    ]
})
