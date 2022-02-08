/*
 * @Date: 2022-01-27 17:13:00
 * @LastEditors: zhaozc
 * @LastEditTime: 2022-02-08 16:14:29
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

    // TODO: zhaoc? 这又是作甚
    window.ga = function() {
        console.log(arguments)
    }

    new Vue({
        // eslint-disable-line
        render: h => h(App)
    }).$mount(root)
}
