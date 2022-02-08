<template>
    <div style="margin: 20px;">
        <rp-input v-model="input" placeholder="请输入内容"></rp-input>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: 'Hello Element UI!'
        }
    }
}
</script>
