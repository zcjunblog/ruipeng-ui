import RpTableColumn from '../table/src/table-column'

/* istanbul ignore next */
RpTableColumn.install = function(Vue) {
    Vue.component(RpTableColumn.name, RpTableColumn)
}

export default RpTableColumn
