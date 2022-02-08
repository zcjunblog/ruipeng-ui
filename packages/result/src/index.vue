<template>
    <div class="rp-result">
        <div class="rp-result__icon">
            <slot name="icon">
                <component :is="iconRpement" :class="iconRpement" />
            </slot>
        </div>
        <div v-if="title || $slots.title" class="rp-result__title">
            <slot name="title">
                <p>{{ title }}</p>
            </slot>
        </div>
        <div v-if="subTitle || $slots.subTitle" class="rp-result__subtitle">
            <slot name="subTitle">
                <p>{{ subTitle }}</p>
            </slot>
        </div>
        <div v-if="$slots.extra" class="rp-result__extra">
            <slot name="extra"></slot>
        </div>
    </div>
</template>
<script>
import IconSuccess from './icon-success.vue'
import IconError from './icon-error.vue'
import IconWarning from './icon-warning.vue'
import IconInfo from './icon-info.vue'

const IconMap = {
    success: 'icon-success',
    warning: 'icon-warning',
    error: 'icon-error',
    info: 'icon-info'
}

export default {
    name: 'RpResult',
    components: {
        [IconSuccess.name]: IconSuccess,
        [IconError.name]: IconError,
        [IconWarning.name]: IconWarning,
        [IconInfo.name]: IconInfo
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        subTitle: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: 'info'
        }
    },
    computed: {
        iconRpement() {
            const icon = this.icon
            return icon && IconMap[icon] ? IconMap[icon] : 'icon-info'
        }
    }
}
</script>
