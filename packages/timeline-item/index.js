/*
 * @Date: 2022-01-27 17:13:01
 * @LastEditors: zhaozc
 * @LastEditTime: 2022-02-08 16:56:53
 * @FilePath: \ruipeng-ui\packages\timeline-item\index.js
 */
import RpTimelineItem from '../timeline/src/item'

/* istanbul ignore next */
RpTimelineItem.install = function(Vue) {
    Vue.component(RpTimelineItem.name, RpTimelineItem)
}

export default RpTimelineItem
