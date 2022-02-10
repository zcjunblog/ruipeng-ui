<script>
import Emitter from 'ruipeng-ui/src/mixins/emitter'

export default {
    name: 'RpCheckboxGroup',

    componentName: 'RpCheckboxGroup',

    mixins: [Emitter],

    inject: {
        rpFormItem: {
            default: ''
        }
    },

    props: {
        value: {},
        disabled: Boolean,
        min: Number,
        max: Number,
        size: String,
        fill: String,
        textColor: String
    },

    computed: {
        _rpFormItemSize() {
            return (this.rpFormItem || {}).rpFormItemSize
        },
        checkboxGroupSize() {
            return this.size || this._rpFormItemSize || (this.$RP || {}).size
        }
    },

    watch: {
        value(value) {
            this.dispatch('RpFormItem', 'el.form.change', [value])
        }
    }
}
</script>

<template>
    <div class="rp-checkbox-group" role="group" aria-label="checkbox-group">
        <slot></slot>
    </div>
</template>
