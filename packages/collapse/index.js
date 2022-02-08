import RpCollapse from './src/collapse'

/* istanbul ignore next */
RpCollapse.install = function(Vue) {
    Vue.component(RpCollapse.name, RpCollapse)
}

export default RpCollapse
