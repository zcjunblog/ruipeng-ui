/*
 * @Date: 2022-01-27 17:13:00
 * @LastEditors: zhaozc
 * @LastEditTime: 2022-02-09 10:10:35
 * @FilePath: \ruipeng-ui\packages\input\index.js
 */
import RpInput from './src/input'

/* istanbul ignore next */
RpInput.install = function(Vue) {
    Vue.component(RpInput.name, RpInput)
}

export default RpInput
