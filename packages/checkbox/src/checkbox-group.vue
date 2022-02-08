<script>
import Emitter from 'ruipeng-ui/src/mixins/emitter'

export default {
    name: 'RpCheckboxGroup',

    componentName: 'RpCheckboxGroup',

    mixins: [Emitter],

    inject: {
        elFormItem: {
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
        _elFormItemSize() {
            return (this.elFormItem || {}).elFormItemSize
        },
        checkboxGroupSize() {
            return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size
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
