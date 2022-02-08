<template>
    <rp-popover v-bind="$attrs" v-model="visible" trigger="click">
        <div class="rp-popconfirm">
            <p class="rp-popconfirm__main">
                <i v-if="!hideIcon" :class="icon" class="rp-popconfirm__icon" :style="{ color: iconColor }"></i>
                {{ title }}
            </p>
            <div class="rp-popconfirm__action">
                <rp-button size="mini" :type="cancelButtonType" @click="cancel">
                    {{ displayCancelButtonText }}
                </rp-button>
                <rp-button size="mini" :type="confirmButtonType" @click="confirm">
                    {{ displayConfirmButtonText }}
                </rp-button>
            </div>
        </div>
        <slot name="reference" slot="reference"></slot>
    </rp-popover>
</template>

<script>
import RpPopover from 'ruipeng-ui/packages/popover'
import RpButton from 'ruipeng-ui/packages/button'
import { t } from 'ruipeng-ui/src/locale'

export default {
    name: 'RpPopconfirm',
    props: {
        title: {
            type: String
        },
        confirmButtonText: {
            type: String
        },
        cancelButtonText: {
            type: String
        },
        confirmButtonType: {
            type: String,
            default: 'primary'
        },
        cancelButtonType: {
            type: String,
            default: 'text'
        },
        icon: {
            type: String,
            default: 'rp-icon-question'
        },
        iconColor: {
            type: String,
            default: '#f90'
        },
        hideIcon: {
            type: Boolean,
            default: false
        }
    },
    components: {
        RpPopover,
        RpButton
    },
    data() {
        return {
            visible: false
        }
    },
    computed: {
        displayConfirmButtonText() {
            return this.confirmButtonText || t('el.popconfirm.confirmButtonText')
        },
        displayCancelButtonText() {
            return this.cancelButtonText || t('el.popconfirm.cancelButtonText')
        }
    },
    methods: {
        confirm() {
            this.visible = false
            this.$emit('confirm')
        },
        cancel() {
            this.visible = false
            this.$emit('cancel')
        }
    }
}
</script>
