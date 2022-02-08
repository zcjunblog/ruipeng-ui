import RpMenu from './src/menu'

/* istanbul ignore next */
RpMenu.install = function(Vue) {
    Vue.component(RpMenu.name, RpMenu)
}

export default RpMenu
