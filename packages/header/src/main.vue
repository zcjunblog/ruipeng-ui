<template>
    <header class="rp-header" :style="{ height }">
        <slot></slot>
    </header>
</template>

<script>
export default {
    name: 'RpHeader',

    componentName: 'RpHeader',

    props: {
        height: {
            type: String,
            default: '60px'
        }
    }
}
</script>
