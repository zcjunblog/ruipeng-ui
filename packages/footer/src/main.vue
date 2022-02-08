<template>
    <footer class="rp-footer" :style="{ height }">
        <slot></slot>
    </footer>
</template>

<script>
export default {
    name: 'RpFooter',

    componentName: 'RpFooter',

    props: {
        height: {
            type: String,
            default: '60px'
        }
    }
}
</script>
