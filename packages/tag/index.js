import RpTag from './src/tag'

/* istanbul ignore next */
RpTag.install = function(Vue) {
    Vue.component(RpTag.name, RpTag)
}

export default RpTag
