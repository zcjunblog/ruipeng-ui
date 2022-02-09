/*
 * @Date: 2022-01-27 17:13:00
 * @LastEditors: zhaozc
 * @LastEditTime: 2022-02-08 18:47:06
 * @FilePath: \ruipeng-ui\packages\popover\index.js
 */
import Popover from './src/main'
import directive from './src/directive'
import Vue from 'vue'

Vue.directive('popover', directive)

/* istanbul ignore next */
Popover.install = function(Vue) {
    Vue.directive('popover', directive)
    Vue.component(Popover.name, Popover)
}
Popover.directive = directive

export default Popover
