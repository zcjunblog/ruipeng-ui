/*
 * @Date: 2022-01-27 17:12:59
 * @LastEditors: zhaozc
 * @LastEditTime: 2022-02-08 16:31:11
 * @FilePath: \ruipeng-ui\examples\play.js
 */
import Vue from 'vue'
import Ruipeng from 'main/index.js'
import App from './play/index.vue'
import 'packages/theme-chalk/src/index.scss'

Vue.use(Ruipeng)

new Vue({
    // eslint-disable-line
    render: h => h(App)
}).$mount('#app')
