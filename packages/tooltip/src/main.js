import Popper from 'ruipeng-ui/src/utils/vue-popper'
import debounce from 'throttle-debounce/debounce'
import { addClass, removeClass, on, off } from 'ruipeng-ui/src/utils/dom'
import { generateId } from 'ruipeng-ui/src/utils/util'
import Vue from 'vue'

export default {
    name: 'RpTooltip',

    mixins: [Popper],

    props: {
        openDelay: {
            type: Number,
            default: 0
        },
        disabled: Boolean,
        manual: Boolean,
        effect: {
            type: String,
            default: 'dark'
        },
        arrowOffset: {
            type: Number,
            default: 0
        },
        popperClass: String,
        content: String,
        visibleArrow: {
            default: true
        },
        transition: {
            type: String,
            default: 'rp-fade-in-linear'
        },
        popperOptions: {
            default() {
                return {
                    boundariesPadding: 10,
                    gpuAcceleration: false
                }
            }
        },
        enterable: {
            type: Boolean,
            default: true
        },
        hideAfter: {
            type: Number,
            default: 0
        },
        tabindex: {
            type: Number,
            default: 0
        }
    },

    data() {
        return {
            tooltipId: `rp-tooltip-${generateId()}`,
            timeoutPending: null,
            focusing: false
        }
    },
    beforeCreate() {
        if (this.$isServer) return

        this.popperVM = new Vue({
            data: { node: '' },
            render(h) {
                return this.node
            }
        }).$mount()

        this.debounceClose = debounce(200, () => this.handleClosePopper())
    },

    render(h) {
        if (this.popperVM) {
            this.popperVM.node = (
                <transition name={this.transition} onAfterLeave={this.doDestroy}>
                    <div
                        onMouseleave={() => {
                            this.setExpectedState(false)
                            this.debounceClose()
                        }}
                        onMouseenter={() => {
                            this.setExpectedState(true)
                        }}
                        ref="popper"
                        role="tooltip"
                        id={this.tooltipId}
                        aria-hidden={this.disabled || !this.showPopper ? 'true' : 'false'}
                        v-show={!this.disabled && this.showPopper}
                        class={['rp-tooltip__popper', 'is-' + this.effect, this.popperClass]}
                    >
                        {this.$slots.content || this.content}
                    </div>
                </transition>
            )
        }

        const firstRpement = this.getFirstRpement()
        if (!firstRpement) return null

        const data = (firstRpement.data = firstRpement.data || {})
        data.staticClass = this.addTooltipClass(data.staticClass)

        return firstRpement
    },

    mounted() {
        this.referenceRpm = this.$el
        if (this.$el.nodeType === 1) {
            this.$el.setAttribute('aria-describedby', this.tooltipId)
            this.$el.setAttribute('tabindex', this.tabindex)
            on(this.referenceRpm, 'mouseenter', this.show)
            on(this.referenceRpm, 'mouseleave', this.hide)
            on(this.referenceRpm, 'focus', () => {
                if (!this.$slots.default || !this.$slots.default.length) {
                    this.handleFocus()
                    return
                }
                const instance = this.$slots.default[0].componentInstance
                if (instance && instance.focus) {
                    instance.focus()
                } else {
                    this.handleFocus()
                }
            })
            on(this.referenceRpm, 'blur', this.handleBlur)
            on(this.referenceRpm, 'click', this.removeFocusing)
        }
        // fix issue https://github.com/RpemeFE/element/issues/14424
        if (this.value && this.popperVM) {
            this.popperVM.$nextTick(() => {
                if (this.value) {
                    this.updatePopper()
                }
            })
        }
    },
    watch: {
        focusing(val) {
            if (val) {
                addClass(this.referenceRpm, 'focusing')
            } else {
                removeClass(this.referenceRpm, 'focusing')
            }
        }
    },
    methods: {
        show() {
            this.setExpectedState(true)
            this.handleShowPopper()
        },

        hide() {
            this.setExpectedState(false)
            this.debounceClose()
        },
        handleFocus() {
            this.focusing = true
            this.show()
        },
        handleBlur() {
            this.focusing = false
            this.hide()
        },
        removeFocusing() {
            this.focusing = false
        },

        addTooltipClass(prev) {
            if (!prev) {
                return 'rp-tooltip'
            } else {
                return 'rp-tooltip ' + prev.replace('rp-tooltip', '')
            }
        },

        handleShowPopper() {
            if (!this.expectedState || this.manual) return
            clearTimeout(this.timeout)
            this.timeout = setTimeout(() => {
                this.showPopper = true
            }, this.openDelay)

            if (this.hideAfter > 0) {
                this.timeoutPending = setTimeout(() => {
                    this.showPopper = false
                }, this.hideAfter)
            }
        },

        handleClosePopper() {
            if ((this.enterable && this.expectedState) || this.manual) return
            clearTimeout(this.timeout)

            if (this.timeoutPending) {
                clearTimeout(this.timeoutPending)
            }
            this.showPopper = false

            if (this.disabled) {
                this.doDestroy()
            }
        },

        setExpectedState(expectedState) {
            if (expectedState === false) {
                clearTimeout(this.timeoutPending)
            }
            this.expectedState = expectedState
        },

        getFirstRpement() {
            const slots = this.$slots.default
            if (!Array.isArray(slots)) return null
            let element = null
            for (let index = 0; index < slots.length; index++) {
                if (slots[index] && slots[index].tag) {
                    element = slots[index]
                }
            }
            return element
        }
    },

    beforeDestroy() {
        this.popperVM && this.popperVM.$destroy()
    },

    destroyed() {
        const reference = this.referenceRpm
        if (reference.nodeType === 1) {
            off(reference, 'mouseenter', this.show)
            off(reference, 'mouseleave', this.hide)
            off(reference, 'focus', this.handleFocus)
            off(reference, 'blur', this.handleBlur)
            off(reference, 'click', this.removeFocusing)
        }
    }
}
