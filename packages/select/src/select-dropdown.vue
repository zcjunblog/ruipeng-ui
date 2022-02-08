<template>
    <div class="rp-select-dropdown rp-popper" :class="[{ 'is-multiple': $parent.multiple }, popperClass]" :style="{ minWidth: minWidth }">
        <slot></slot>
    </div>
</template>

<script type="text/babel">
import Popper from 'ruipeng-ui/src/utils/vue-popper'

export default {
    name: 'RpSelectDropdown',

    componentName: 'RpSelectDropdown',

    mixins: [Popper],

    props: {
        placement: {
            default: 'bottom-start'
        },

        boundariesPadding: {
            default: 0
        },

        popperOptions: {
            default() {
                return {
                    gpuAcceleration: false
                }
            }
        },

        visibleArrow: {
            default: true
        },

        appendToBody: {
            type: Boolean,
            default: true
        }
    },

    data() {
        return {
            minWidth: ''
        }
    },

    computed: {
        popperClass() {
            return this.$parent.popperClass
        }
    },

    watch: {
        '$parent.inputWidth'() {
            this.minWidth = this.$parent.$el.getBoundingClientRect().width + 'px'
        }
    },

    mounted() {
        this.referenceRpm = this.$parent.$refs.reference.$el
        this.$parent.popperRpm = this.popperRpm = this.$el
        this.$on('updatePopper', () => {
            if (this.$parent.visible) this.updatePopper()
        })
        this.$on('destroyPopper', this.destroyPopper)
    }
}
</script>
