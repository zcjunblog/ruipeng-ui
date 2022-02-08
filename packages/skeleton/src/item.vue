<template>
    <div :class="['rp-skeleton__item', `rp-skeleton__${variant}`]">
        <img-placeholder v-if="variant === 'image'" />
    </div>
</template>

<script>
import ImgPlaceholder from './img-placeholder'

export default {
    name: 'RpSkeletonItem',
    props: {
        variant: {
            type: String,
            default: 'text'
        }
    },
    components: {
        [ImgPlaceholder.name]: ImgPlaceholder
    }
}
</script>
