<!--
 * @Date: 2022-01-27 17:13:00
 * @LastEditors: zhaozc
 * @LastEditTime: 2022-02-10 10:57:13
 * @FilePath: \ruipeng-ui\examples\play\index.vue
-->
<template>
    <div style="margin: 20px;">
        <rp-input v-model="input" placeholder="请输入内容"></rp-input>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: 'Hello Ruipeng UI!'
        }
    }
}
</script>
