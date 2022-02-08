<template>
    <div class="rp-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
        <div class="rp-card__header" v-if="$slots.header || header">
            <slot name="header">{{ header }}</slot>
        </div>
        <div class="rp-card__body" :style="bodyStyle">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RpCard',
    props: {
        header: {},
        bodyStyle: {},
        shadow: {
            type: String
        }
    }
}
</script>
