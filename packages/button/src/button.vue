<template>
    <button
        class="rp-button"
        @click="handleClick"
        :disabled="buttonDisabled || loading"
        :autofocus="autofocus"
        :type="nativeType"
        :class="[
            type ? 'rp-button--' + type : '',
            buttonSize ? 'rp-button--' + buttonSize : '',
            {
                'is-disabled': buttonDisabled,
                'is-loading': loading,
                'is-plain': plain,
                'is-round': round,
                'is-circle': circle
            }
        ]"
    >
        <i class="rp-icon-loading" v-if="loading"></i>
        <i :class="icon" v-if="icon && !loading"></i>
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>
<script>
export default {
    name: 'RpButton',

    inject: {
        rpForm: {
            default: ''
        },
        rpFormItem: {
            default: ''
        }
    },

    props: {
        type: {
            type: String,
            default: 'default'
        },
        size: String,
        icon: {
            type: String,
            default: ''
        },
        nativeType: {
            type: String,
            default: 'button'
        },
        loading: Boolean,
        disabled: Boolean,
        plain: Boolean,
        autofocus: Boolean,
        round: Boolean,
        circle: Boolean
    },

    computed: {
        _rpFormItemSize() {
            return (this.rpFormItem || {}).rpFormItemSize
        },
        buttonSize() {
            return this.size || this._rpFormItemSize || (this.$RP || {}).size
        },
        buttonDisabled() {
            return this.$options.propsData.hasOwnProperty('disabled') ? this.disabled : (this.rpForm || {}).disabled
        }
    },

    methods: {
        handleClick(evt) {
            this.$emit('click', evt)
        }
    }
}
</script>
