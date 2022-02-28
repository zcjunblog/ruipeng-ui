<template>
    <transition name="rp-zoom-in-top" @after-leave="doDestroy">
        <div
            v-show="showPopper"
            class="rp-autocomplete-suggestion rp-popper"
            :class="{ 'is-loading': !parent.hideLoading && parent.loading }"
            :style="{ width: dropdownWidth }"
            role="region"
        >
            <rp-scrollbar tag="ul" wrap-class="rp-autocomplete-suggestion__wrap" view-class="rp-autocomplete-suggestion__list">
                <li v-if="!parent.hideLoading && parent.loading"><i class="rp-icon-loading"></i></li>
                <slot v-else></slot>
            </rp-scrollbar>
        </div>
    </transition>
</template>
<script>
import Popper from 'ruipeng-ui/src/utils/vue-popper'
import Emitter from 'ruipeng-ui/src/mixins/emitter'
import RpScrollbar from 'ruipeng-ui/packages/scrollbar'

export default {
    components: { RpScrollbar },
    mixins: [Popper, Emitter],

    componentName: 'RpAutocompleteSuggestions',

    data() {
        return {
            parent: this.$parent,
            dropdownWidth: ''
        }
    },

    props: {
        options: {
            default() {
                return {
                    gpuAcceleration: false
                }
            }
        },
        id: String
    },

    methods: {
        select(item) {
            this.dispatch('RpAutocomplete', 'item-click', item)
        }
    },

    updated() {
        this.$nextTick(_ => {
            this.popperJS && this.updatePopper()
        })
    },

    mounted() {
        this.$parent.popperElm = this.popperElm = this.$el
        this.referenceElm = this.$parent.$refs.input.$refs.input || this.$parent.$refs.input.$refs.textarea
        this.referenceList = this.$el.querySelector('.rp-autocomplete-suggestion__list')
        this.referenceList.setAttribute('role', 'listbox')
        this.referenceList.setAttribute('id', this.id)
    },

    created() {
        this.$on('visible', (val, inputWidth) => {
            this.dropdownWidth = inputWidth + 'px'
            this.showPopper = val
        })
    }
}
</script>
