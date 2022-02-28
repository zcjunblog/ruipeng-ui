## Scrollbar 滚动条

代替浏览器原生滚动条，解决滚动条造成的页面宽度被挤压的问题。

### 只显示纵向滚动

:::demo `rp-scrollbar`标签必须设定高度, 只有包裹内容超过给定高度, 才会出现滚动条。

```html
<rp-scrollbar class="scroll-y">
    <div v-for="n in 25" :key="n" style="height:50px;">Test{{n}}</div>
</rp-scrollbar>

<style>
    .scroll-y {
        height: 300px;
        .rp-scrollbar__wrap {
            overflow-x: hidden;
        }
    }
</style>
```

:::

### 只显示横向滚动

:::demo 横向滚动条在使用上和纵向滚动条使用的方法一样，只需给`rp-scrollbar`标签设定宽度即可,如果包裹内容超出最大宽度就会出现横向滚动条。

```html
<rp-scrollbar class="scroll-x">
    <div class="box">
        <div v-for="n in 25" :key="n" style="display: inline-block; width: 50px;">Test{{n}}</div>
    </div>
</rp-scrollbar>

<style>
    .scroll-x {
        width: 800px;
        .el-scrollbar__wrap {
            overflow-y: hidden;
        }
    }
    /* 包裹内容必须超过给定高度 */
    .box {
        min-width: 500px;
        white-space: nowrap;
    }
</style>
```

:::

### 获取滚动条实例

:::demo 通过设置`ref`属性来获取滚动条实例的各个属性。

```html
<rp-scrollbar class="scroll-x" ref="scrollRef">
    <div class="box">
        <div v-for="n in 25" :key="n" style="display: inline-block; width: 50px;">Test</div>
    </div>
</rp-scrollbar>

<script>
    export default {
        data() {
            return {}
        },
        mounted() {
            // 获取滚动条向下滚动的距离
            this.$refs.scrollRef.wrap.scrollTop

            // 控制滚动条滚动到指定位置
            this.$refs.scrollRef.wrap.scrollTop = 100

            // 获取滚动条内内容的高度
            this.$refs.scrollRef.wrap.scrollHeight

            // 监听滚动条的滚动

            this.$refs.scrollRef.wrap.addEventListener('scroll', () => {})
        }
    }
</script>
```

:::

### Attributes

| 参数      | 说明                             | 类型    | 可选值 | 默认值 |
| --------- | -------------------------------- | ------- | ------ | ------ |
| wrapClass | 可选参数，容器的样式名           | string  | —      | —      |
| viewClass | 可选参数，展示视图的样式名       | string  | —      | —      |
| wrapStyle | 可选参数，容器的样式             | string  | —      | —      |
| viewStyle | 可选参数，展示视图的样式         | string  | —      | —      |
| native    | 可选参数，是否使用原生滚动       | boolean | —      | false  |
| noresize  | 可选参数，容器大小是否是不可变的 | boolean | —      | false  |
| tag       | 可选参数，渲染容器的标签         | string  | —      | div    |

### Events

| 事件名称 | 说明                            | 回调参数   |
| -------- | ------------------------------- | ---------- |
| scroll   | 滚动条 位置发生变化时的回调函数 | 新状态的值 |
