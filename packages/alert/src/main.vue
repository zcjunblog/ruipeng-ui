<!--
 * @Date: 2022-01-27 17:13:00
 * @LastEditors: zhaozc
 * @LastEditTime: 2022-02-08 16:55:23
 * @FilePath: \ruipeng-ui\packages\alert\src\main.vue
-->
<template>
    <transition name="rp-alert-fade">
        <div class="rp-alert" :class="[typeClass, center ? 'is-center' : '', 'is-' + effect]" v-show="visible" role="alert">
            <i class="rp-alert__icon" :class="[iconClass, isBigIcon]" v-if="showIcon"></i>
            <div class="rp-alert__content">
                <span class="rp-alert__title" :class="[isBoldTitle]" v-if="title || $slots.title">
                    <slot name="title">{{ title }}</slot>
                </span>
                <p class="rp-alert__description" v-if="$slots.default && !description"><slot></slot></p>
                <p class="rp-alert__description" v-if="description && !$slots.default">{{ description }}</p>
                <i
                    class="rp-alert__closebtn"
                    :class="{ 'is-customed': closeText !== '', 'rp-icon-close': closeText === '' }"
                    v-show="closable"
                    @click="close()"
                >
                    {{ closeText }}
                </i>
            </div>
        </div>
    </transition>
</template>

<script type="text/babel">
const TYPE_CLASSES_MAP = {
    success: 'rp-icon-success',
    warning: 'rp-icon-warning',
    error: 'rp-icon-error'
}
export default {
    name: 'RpAlert',

    props: {
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'info'
        },
        closable: {
            type: Boolean,
            default: true
        },
        closeText: {
            type: String,
            default: ''
        },
        showIcon: Boolean,
        center: Boolean,
        effect: {
            type: String,
            default: 'light',
            validator: function(value) {
                return ['light', 'dark'].indexOf(value) !== -1
            }
        }
    },

    data() {
        return {
            visible: true
        }
    },

    methods: {
        close() {
            this.visible = false
            this.$emit('close')
        }
    },

    computed: {
        typeClass() {
            return `rp-alert--${this.type}`
        },

        iconClass() {
            return TYPE_CLASSES_MAP[this.type] || 'rp-icon-info'
        },

        isBigIcon() {
            return this.description || this.$slots.default ? 'is-big' : ''
        },

        isBoldTitle() {
            return this.description || this.$slots.default ? 'is-bold' : ''
        }
    }
}
</script>
