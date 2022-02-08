import RpTable from './src/table'

/* istanbul ignore next */
RpTable.install = function(Vue) {
    Vue.component(RpTable.name, RpTable)
}

export default RpTable
