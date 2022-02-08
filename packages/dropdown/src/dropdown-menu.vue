<template>
    <transition name="rp-zoom-in-top" @after-leave="doDestroy">
        <ul class="rp-dropdown-menu rp-popper" :class="[size && `rp-dropdown-menu--${size}`]" v-show="showPopper">
            <slot></slot>
        </ul>
    </transition>
</template>
<script>
import Popper from 'ruipeng-ui/src/utils/vue-popper'

export default {
    name: 'RpDropdownMenu',

    componentName: 'RpDropdownMenu',

    mixins: [Popper],

    props: {
        visibleArrow: {
            type: Boolean,
            default: true
        },
        arrowOffset: {
            type: Number,
            default: 0
        }
    },

    data() {
        return {
            size: this.dropdown.dropdownSize
        }
    },

    inject: ['dropdown'],

    created() {
        this.$on('updatePopper', () => {
            if (this.showPopper) this.updatePopper()
        })
        this.$on('visible', val => {
            this.showPopper = val
        })
    },

    mounted() {
        this.dropdown.popperRpm = this.popperRpm = this.$el
        this.referenceRpm = this.dropdown.$el
        // compatible with 2.6 new v-slot syntax
        // issue link https://github.com/RpemeFE/element/issues/14345
        this.dropdown.initDomOperation()
    },

    watch: {
        'dropdown.placement': {
            immediate: true,
            handler(val) {
                this.currentPlacement = val
            }
        }
    }
}
</script>
