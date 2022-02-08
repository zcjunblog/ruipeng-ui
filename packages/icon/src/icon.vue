<template>
    <i :class="'rp-icon-' + name"></i>
</template>

<script>
export default {
    name: 'RpIcon',

    props: {
        name: String
    }
}
</script>
