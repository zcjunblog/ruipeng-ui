<template>
    <div class="rp-collapse-item" :class="{ 'is-active': isActive, 'is-disabled': disabled }">
        <div role="tab" :aria-expanded="isActive" :aria-controls="`rp-collapse-content-${id}`" :aria-describedby="`rp-collapse-content-${id}`">
            <div
                class="rp-collapse-item__header"
                @click="handleHeaderClick"
                role="button"
                :id="`rp-collapse-head-${id}`"
                :tabindex="disabled ? undefined : 0"
                @keyup.space.enter.stop="handleEnterClick"
                :class="{
                    focusing: focusing,
                    'is-active': isActive
                }"
                @focus="handleFocus"
                @blur="focusing = false"
            >
                <slot name="title">{{ title }}</slot>
                <i class="rp-collapse-item__arrow rp-icon-arrow-right" :class="{ 'is-active': isActive }"></i>
            </div>
        </div>
        <rp-collapse-transition>
            <div
                class="rp-collapse-item__wrap"
                v-show="isActive"
                role="tabpanel"
                :aria-hidden="!isActive"
                :aria-labelledby="`rp-collapse-head-${id}`"
                :id="`rp-collapse-content-${id}`"
            >
                <div class="rp-collapse-item__content">
                    <slot></slot>
                </div>
            </div>
        </rp-collapse-transition>
    </div>
</template>
<script>
import RpCollapseTransition from 'ruipeng-ui/src/transitions/collapse-transition'
import Emitter from 'ruipeng-ui/src/mixins/emitter'
import { generateId } from 'ruipeng-ui/src/utils/util'

export default {
    name: 'RpCollapseItem',

    componentName: 'RpCollapseItem',

    mixins: [Emitter],

    components: { RpCollapseTransition },

    data() {
        return {
            contentWrapStyle: {
                height: 'auto',
                display: 'block'
            },
            contentHeight: 0,
            focusing: false,
            isClick: false,
            id: generateId()
        }
    },

    inject: ['collapse'],

    props: {
        title: String,
        name: {
            type: [String, Number],
            default() {
                return this._uid
            }
        },
        disabled: Boolean
    },

    computed: {
        isActive() {
            return this.collapse.activeNames.indexOf(this.name) > -1
        }
    },

    methods: {
        handleFocus() {
            setTimeout(() => {
                if (!this.isClick) {
                    this.focusing = true
                } else {
                    this.isClick = false
                }
            }, 50)
        },
        handleHeaderClick() {
            if (this.disabled) return
            this.dispatch('RpCollapse', 'item-click', this)
            this.focusing = false
            this.isClick = true
        },
        handleEnterClick() {
            this.dispatch('RpCollapse', 'item-click', this)
        }
    }
}
</script>
