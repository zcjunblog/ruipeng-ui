/*
 * @Date: 2022-01-27 17:13:00
 * @LastEditors: zhaozc
 * @LastEditTime: 2022-02-09 15:10:03
 * @FilePath: \ruipeng-ui\examples\extension\src\app.js
 */
import Vue from 'vue'
import App from './editor/index'
import Ruipeng from 'main/index.js'
import 'packages/theme-chalk/src/index.scss'

export default () => {
    Vue.use(Ruipeng, { zIndex: 100000 })
    const root = document.createElement('div')
    document.body.appendChild(root)

    new Vue({
        // eslint-disable-line
        render: h => h(App)
    }).$mount(root)
}
