<template>
    <ul class="rp-select-group__wrap" v-show="visible">
        <li class="rp-select-group__title">{{ label }}</li>
        <li>
            <ul class="rp-select-group">
                <slot></slot>
            </ul>
        </li>
    </ul>
</template>

<script type="text/babel">
import Emitter from 'ruipeng-ui/src/mixins/emitter'

export default {
    mixins: [Emitter],

    name: 'RpOptionGroup',

    componentName: 'RpOptionGroup',

    props: {
        label: String,
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            visible: true
        }
    },

    watch: {
        disabled(val) {
            this.broadcast('RpOption', 'handleGroupDisabled', val)
        }
    },

    methods: {
        queryChange() {
            this.visible = this.$children && Array.isArray(this.$children) && this.$children.some(option => option.visible === true)
        }
    },

    created() {
        this.$on('queryChange', this.queryChange)
    },

    mounted() {
        if (this.disabled) {
            this.broadcast('RpOption', 'handleGroupDisabled', this.disabled)
        }
    }
}
</script>
