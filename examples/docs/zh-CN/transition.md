## 内置过渡动画

Element 内应用在部分组件的过渡动画，你也可以直接使用。在使用之前请阅读 [transition 组件文档](https://cn.vuejs.org/v2/api/#transition) 。

### fade 淡入淡出

:::demo 提供 `rp-fade-in-linear` 和 `rp-fade-in` 两种效果。

```html
<template>
    <div>
        <rp-button @click="show = !show">Click Me</rp-button>

        <div style="display: flex; margin-top: 20px; height: 100px;">
            <transition name="rp-fade-in-linear">
                <div v-show="show" class="transition-box">.rp-fade-in-linear</div>
            </transition>
            <transition name="rp-fade-in">
                <div v-show="show" class="transition-box">.rp-fade-in</div>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            show: true
        })
    }
</script>

<style>
    .transition-box {
        margin-bottom: 10px;
        width: 200px;
        height: 100px;
        border-radius: 4px;
        background-color: #1f9f85;
        text-align: center;
        color: #fff;
        padding: 40px 20px;
        box-sizing: border-box;
        margin-right: 20px;
    }
</style>
```

:::

### zoom 缩放

:::demo 提供 `rp-zoom-in-center`，`rp-zoom-in-top` 和 `rp-zoom-in-bottom` 三种效果。

```html
<template>
    <div>
        <rp-button @click="show2 = !show2">Click Me</rp-button>

        <div style="display: flex; margin-top: 20px; height: 100px;">
            <transition name="rp-zoom-in-center">
                <div v-show="show2" class="transition-box">.rp-zoom-in-center</div>
            </transition>

            <transition name="rp-zoom-in-top">
                <div v-show="show2" class="transition-box">.rp-zoom-in-top</div>
            </transition>

            <transition name="rp-zoom-in-bottom">
                <div v-show="show2" class="transition-box">.rp-zoom-in-bottom</div>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            show2: true
        })
    }
</script>

<style>
    .transition-box {
        margin-bottom: 10px;
        width: 200px;
        height: 100px;
        border-radius: 4px;
        background-color: #1f9f85;
        text-align: center;
        color: #fff;
        padding: 40px 20px;
        box-sizing: border-box;
        margin-right: 20px;
    }
</style>
```

:::

### collapse 展开折叠

使用 `rp-collapse-transition` 组件实现折叠展开效果。

:::demo

```html
<template>
    <div>
        <rp-button @click="show3 = !show3">Click Me</rp-button>

        <div style="margin-top: 20px; height: 200px;">
            <rp-collapse-transition>
                <div v-show="show3">
                    <div class="transition-box">rp-collapse-transition</div>
                    <div class="transition-box">rp-collapse-transition</div>
                </div>
            </rp-collapse-transition>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            show3: true
        })
    }
</script>

<style>
    .transition-box {
        margin-bottom: 10px;
        width: 200px;
        height: 100px;
        border-radius: 4px;
        background-color: #1f9f85;
        text-align: center;
        color: #fff;
        padding: 40px 20px;
        box-sizing: border-box;
        margin-right: 20px;
    }
</style>
```

:::

### 按需引入

```js
// fade/zoom 等
import 'ruipeng-ui/lib/theme-chalk/base.css'
// collapse 展开折叠
import CollapseTransition from 'ruipeng-ui/lib/transitions/collapse-transition'
import Vue from 'vue'

Vue.component(CollapseTransition.name, CollapseTransition)
```
