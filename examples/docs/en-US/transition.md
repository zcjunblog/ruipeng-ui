## Built-in transition

You can use Element's built-in transitions directly. Before that, please read the [transition docs](https://vuejs.org/v2/api/#transition).

### fade

:::demo We have two fading effects: `rp-fade-in-linear` and `rp-fade-in`.

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
        background-color: #409eff;
        text-align: center;
        color: #fff;
        padding: 40px 20px;
        box-sizing: border-box;
        margin-right: 20px;
    }
</style>
```

:::

### zoom

:::demo `rp-zoom-in-center`, `rp-zoom-in-top` and `rp-zoom-in-bottom` are provided.

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
        background-color: #409eff;
        text-align: center;
        color: #fff;
        padding: 40px 20px;
        box-sizing: border-box;
        margin-right: 20px;
    }
</style>
```

:::

### collapse

For collapse effect, use the `rp-collapse-transition` component.

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
        background-color: #409eff;
        text-align: center;
        color: #fff;
        padding: 40px 20px;
        box-sizing: border-box;
        margin-right: 20px;
    }
</style>
```

:::

### On demand

```js
// fade/zoom
import 'ruipeng-ui/lib/theme-chalk/base.css'
// collapse
import CollapseTransition from 'ruipeng-ui/lib/transitions/collapse-transition'
import Vue from 'vue'

Vue.component(CollapseTransition.name, CollapseTransition)
```
