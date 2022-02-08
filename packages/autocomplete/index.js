import RpAutocomplete from './src/autocomplete'

/* istanbul ignore next */
RpAutocomplete.install = function(Vue) {
    Vue.component(RpAutocomplete.name, RpAutocomplete)
}

export default RpAutocomplete
