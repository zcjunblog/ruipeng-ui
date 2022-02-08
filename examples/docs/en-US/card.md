## Card

Integrate information in a card container.

### Basic usage

Card includes title, content and operations.

:::demo Card is made up of `header` and `body`. `header` is optional, and its content distribution depends on a named slot.

```html
<rp-card class="box-card">
    <div slot="header" class="clearfix">
        <span>Card name</span>
        <rp-button style="float: right; padding: 3px 0" type="text">Operation button</rp-button>
    </div>
    <div v-for="o in 4" :key="o" class="text item">
        {{'List item ' + o }}
    </div>
</rp-card>

<style>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: '';
    }
    .clearfix:after {
        clear: both;
    }

    .box-card {
        width: 480px;
    }
</style>
```

:::

### Simple card

The header part can be omitted.

:::demo

```html
<rp-card class="box-card">
    <div v-for="o in 4" :key="o" class="text item">
        {{'List item ' + o }}
    </div>
</rp-card>

<style>
    .text {
        font-size: 14px;
    }

    .item {
        padding: 18px 0;
    }

    .box-card {
        width: 480px;
    }
</style>
```

:::

### With images

Display richer content by adding some configs.

:::demo The `body-style` attribute defines CSS style of custom `body`. This example also uses `rp-col` for layout.

```html
<rp-row>
    <rp-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
        <rp-card :body-style="{ padding: '0px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" />
            <div style="padding: 14px;">
                <span>Yummy hamburger</span>
                <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <rp-button type="text" class="button">Operating</rp-button>
                </div>
            </div>
        </rp-card>
    </rp-col>
</rp-row>

<style>
    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: '';
    }

    .clearfix:after {
        clear: both;
    }
</style>

<script>
    export default {
        data() {
            return {
                currentDate: new Date()
            }
        }
    }
</script>
```

:::

### Shadow

You can define when to show the card shadows

:::demo The `shadow` attribute determines when the card shadows are displayed. It can be `always`, `hover` or `never`.

```html
<rp-row :gutter="12">
    <rp-col :span="8">
        <rp-card shadow="always">
            Always
        </rp-card>
    </rp-col>
    <rp-col :span="8">
        <rp-card shadow="hover">
            Hover
        </rp-card>
    </rp-col>
    <rp-col :span="8">
        <rp-card shadow="never">
            Never
        </rp-card>
    </rp-col>
</rp-row>
```

:::

### Attributes

| Attribute  | Description                                                   | Type   | Accepted Values        | Default             |
| ---------- | ------------------------------------------------------------- | ------ | ---------------------- | ------------------- |
| header     | title of the card. Also accepts a DOM passed by `slot#header` | string | —                      | —                   |
| body-style | CSS style of body                                             | object | —                      | { padding: '20px' } |
| shadow     | when to show card shadows                                     | string | always / hover / never | always              |
