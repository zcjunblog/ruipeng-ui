## Tooltip

Display prompt information for mouse hover.

### Basic usage

Tooltip has 9 placements.

:::demo Use attribute `content` to set the display content when hover. The attribute `placement` determines the position of the tooltip. Its value is `[orientation]-[alignment]` with four orientations `top`, `left`, `right`, `bottom` and three alignments `start`, `end`, `null`, and the default alignment is null. Take `placement="left-end"` for example, Tooltip will display on the left of the element which you are hovering and the bottom of the tooltip aligns with the bottom of the element.

```html
<div class="box">
    <div class="top">
        <rp-tooltip class="item" effect="dark" content="Top Left prompts info" placement="top-start">
            <rp-button>top-start</rp-button>
        </rp-tooltip>
        <rp-tooltip class="item" effect="dark" content="Top Center prompts info" placement="top">
            <rp-button>top</rp-button>
        </rp-tooltip>
        <rp-tooltip class="item" effect="dark" content="Top Right prompts info" placement="top-end">
            <rp-button>top-end</rp-button>
        </rp-tooltip>
    </div>
    <div class="left">
        <rp-tooltip class="item" effect="dark" content="Left Top prompts info" placement="left-start">
            <rp-button>left-start</rp-button>
        </rp-tooltip>
        <rp-tooltip class="item" effect="dark" content="Left Center prompts info" placement="left">
            <rp-button>left</rp-button>
        </rp-tooltip>
        <rp-tooltip class="item" effect="dark" content="Left Bottom prompts info" placement="left-end">
            <rp-button>left-end</rp-button>
        </rp-tooltip>
    </div>

    <div class="right">
        <rp-tooltip class="item" effect="dark" content="Right Top prompts info" placement="right-start">
            <rp-button>right-start</rp-button>
        </rp-tooltip>
        <rp-tooltip class="item" effect="dark" content="Right Center prompts info" placement="right">
            <rp-button>right</rp-button>
        </rp-tooltip>
        <rp-tooltip class="item" effect="dark" content="Right Bottom prompts info" placement="right-end">
            <rp-button>right-end</rp-button>
        </rp-tooltip>
    </div>
    <div class="bottom">
        <rp-tooltip class="item" effect="dark" content="Bottom Left prompts info" placement="bottom-start">
            <rp-button>bottom-start</rp-button>
        </rp-tooltip>
        <rp-tooltip class="item" effect="dark" content="Bottom Center prompts info" placement="bottom">
            <rp-button>bottom</rp-button>
        </rp-tooltip>
        <rp-tooltip class="item" effect="dark" content="Bottom Right prompts info" placement="bottom-end">
            <rp-button>bottom-end</rp-button>
        </rp-tooltip>
    </div>
</div>

<style>
    .box {
        width: 400px;

        .top {
            text-align: center;
        }

        .left {
            float: left;
            width: 110px;
        }

        .right {
            float: right;
            width: 110px;
        }

        .bottom {
            clear: both;
            text-align: center;
        }

        .item {
            margin: 4px;
        }

        .left .rp-tooltip__popper,
        .right .rp-tooltip__popper {
            padding: 8px 10px;
        }

        .rp-button {
            width: 110px;
        }
    }
</style>
```

:::

### Theme

Tooltip has two themes: `dark` and `light`。

:::demo Set `effect` to modify theme, and the default value is `dark`.

```html
<rp-tooltip content="Top center" placement="top">
    <rp-button>Dark</rp-button>
</rp-tooltip>
<rp-tooltip content="Bottom center" placement="bottom" effect="light">
    <rp-button>Light</rp-button>
</rp-tooltip>
```

:::

### More Content

Display multiple lines of text and set their format.

:::demo Override attribute `content` of `rp-tooltip` by adding a slot named `content`.

```html
<rp-tooltip placement="top">
    <div slot="content">
        multiple lines
        <br />
        second line
    </div>
    <rp-button>Top center</rp-button>
</rp-tooltip>
```

:::

### Advanced usage

In addition to basic usages, there are some attributes that allow you to customize your own:

`transition` attribute allows you to customize the animation in which the tooltip shows or hides, and the default value is rp-fade-in-linear.

`disabled` attribute allows you to disable `tooltip`. You just need set it to `true`.

In fact, Tooltip is an extension based on [Vue-popper](https://github.com/element-component/vue-popper), you can use any attribute that are allowed in Vue-popper.

:::demo

```html
<template>
    <rp-tooltip :disabled="disabled" content="click to close tooltip function" placement="bottom" effect="light">
        <rp-button @click="disabled = !disabled">click to {{disabled ? 'active' : 'close'}} tooltip function</rp-button>
    </rp-tooltip>
</template>

<script>
    export default {
        data() {
            return {
                disabled: false
            }
        }
    }
</script>

<style>
    .slide-fade-enter-active {
        transition: all 0.3s ease;
    }
    .slide-fade-leave-active {
        transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
    }
    .slide-fade-enter,
    .expand-fade-leave-active {
        margin-left: 20px;
        opacity: 0;
    }
</style>
```

:::

:::tip
The `router-link` component is not supported in tooltip, please use `vm.$router.push`.

Disabled form elements are not supported for Tooltip, more information can be found at [MDN](https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter). You need to wrap the disabled form element with a container element for Tooltip to work.
:::

### Attributes

| Attribute       | Description                                                                                                                   | Type    | Accepted Values                                                                                           | Default                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| effect          | Tooltip theme                                                                                                                 | string  | dark/light                                                                                                | dark                                                    |
| content         | display content, can be overridden by `slot#content`                                                                          | String  | —                                                                                                         | —                                                       |
| placement       | position of Tooltip                                                                                                           | string  | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom                                                  |
| value / v-model | visibility of Tooltip                                                                                                         | boolean | —                                                                                                         | false                                                   |
| disabled        | whether Tooltip is disabled                                                                                                   | boolean | —                                                                                                         | false                                                   |
| offset          | offset of the Tooltip                                                                                                         | number  | —                                                                                                         | 0                                                       |
| transition      | animation name                                                                                                                | string  | —                                                                                                         | rp-fade-in-linear                                       |
| visible-arrow   | whether an arrow is displayed. For more information, check [Vue-popper](https://github.com/element-component/vue-popper) page | boolean | —                                                                                                         | true                                                    |
| popper-options  | [popper.js](https://popper.js.org/documentation.html) parameters                                                              | Object  | refer to [popper.js](https://popper.js.org/documentation.html) doc                                        | `{ boundariesElement: 'body', gpuAcceleration: false }` |
| open-delay      | delay of appearance, in millisecond                                                                                           | number  | —                                                                                                         | 0                                                       |
| manual          | whether to control Tooltip manually. `mouseenter` and `mouseleave` won't have effects if set to `true`                        | boolean | —                                                                                                         | false                                                   |
| popper-class    | custom class name for Tooltip's popper                                                                                        | string  | —                                                                                                         | —                                                       |
| enterable       | whether the mouse can enter the tooltip                                                                                       | Boolean | —                                                                                                         | true                                                    |
| hide-after      | timeout in milliseconds to hide tooltip                                                                                       | number  | —                                                                                                         | 0                                                       |
| tabindex        | [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of Tooltip                           | number  | —                                                                                                         | 0                                                       |
