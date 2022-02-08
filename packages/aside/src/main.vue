<template>
    <aside class="rp-aside" :style="{ width }">
        <slot></slot>
    </aside>
</template>

<script>
export default {
    name: 'RpAside',

    componentName: 'RpAside',

    props: {
        width: {
            type: String,
            default: '300px'
        }
    }
}
</script>
