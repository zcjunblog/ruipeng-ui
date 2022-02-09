/*
 * @Date: 2022-01-27 17:12:59
 * @LastEditors: zhaozc
 * @LastEditTime: 2022-02-09 09:54:21
 * @FilePath: \ruipeng-ui\examples\entry.js
 */
// 官网项目的入口，就是一个普通的 vue 项目
import Vue from 'vue'
import entry from './app'
import VueRouter from 'vue-router'

// 引入组件库，main 是别名，在 /build/config.js 中有配置
import Ruipeng from 'main/index.js'
import hljs from 'highlight.js'

// 路由配置
import routes from './route.config'

// 官网项目的一些组件
import demoBlock from './components/demo-block'
import MainFooter from './components/footer'
import MainHeader from './components/header'
import SideNav from './components/side-nav'
import FooterNav from './components/footer-nav'
import title from './i18n/title'

// 组件库样式
import 'packages/theme-chalk/src/index.scss'
import './demo-styles/index.scss'
import './assets/styles/common.css'
import './assets/styles/fonts/style.css'

// 将 icon 信息挂载到 Vue 原型链上，在 markdown 文档中被使用，在官网的 icon 图标 页面展示出所有的 icon 图标
import icon from './icon.json'

Vue.use(Ruipeng)
Vue.use(VueRouter)
Vue.component('demo-block', demoBlock)
Vue.component('main-footer', MainFooter)
Vue.component('main-header', MainHeader)
Vue.component('side-nav', SideNav)
Vue.component('footer-nav', FooterNav)

const globalEle = new Vue({
    data: { $isEle: false } // 是否 ele 用户
})

Vue.mixin({
    computed: {
        $isEle: {
            get: () => globalEle.$data.$isEle,
            set: data => {
                globalEle.$data.$isEle = data
            }
        }
    }
})

Vue.prototype.$icon = icon // Icon 列表页用

const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes
})

router.afterEach(route => {
    // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
    Vue.nextTick(() => {
        const blocks = document.querySelectorAll('pre code:not(.hljs)')
        Array.prototype.forEach.call(blocks, hljs.highlightBlock)
    })
    const data = title[route.meta.lang]
    for (let val in data) {
        if (new RegExp('^' + val, 'g').test(route.name)) {
            document.title = data[val]
            return
        }
    }
    document.title = 'Ruipeng Ui'
})

new Vue({
    // eslint-disable-line
    ...entry,
    router
}).$mount('#app')
