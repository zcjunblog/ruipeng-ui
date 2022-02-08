import RpProgress from './src/progress'

/* istanbul ignore next */
RpProgress.install = function(Vue) {
    Vue.component(RpProgress.name, RpProgress)
}

export default RpProgress
