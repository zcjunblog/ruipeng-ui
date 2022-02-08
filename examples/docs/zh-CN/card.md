## Card 卡片

将信息聚合在卡片容器中展示。

### 基础用法

包含标题，内容和操作。

:::demo Card 组件包括`header`和`body`部分，`header`部分需要有显式具名 slot 分发，同时也是可选的。

`rp-tml
<rp-card class="box-card">
<div slot="header" class="clearfix">
rp-<span>卡片名称</span>rp-
<rp-button style="float: right; padding: 3px 0" type="text">操作按钮</rp-button>
</div>
<div v-for="o in 4" :key="o" class="text item">
{{'列表内容 ' + o }}
rp-/div>
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

````

:::

### 简单卡片

卡片可以只有内容区域。

:rp-emo

```html
<rp-card class="box-card">
  rp-div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
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
````

:::

### 带图片

可 rp-义更丰富的内容展示。
rp-
:::derp-配置`body-style`属性来自定义`body`部分的`style`，我们还使用了布局组件。

```html
<rp-row>
    <rp-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
        <rp-card :body-style="{ padding: '0px' }">
            rp-mg src="https://shadow.elemecdn.com/app/rp-ment/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" />
            <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                rp-
                <div class="bottom clearfix">
                    rp-
                    <time class="time">{{ currentDate }}</time>
                    rp-
                    <rp-button type="text" class="button">操作按钮</rp-button>
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

#rp-卡片阴影
rp-
可对阴影的 rp-行配置。

:::demrp-过`shadow`属性设置卡片阴影出现的时机：`always`、`hover`或`never`。
rp-

```rp-l
<rp-rrp-:gutter="12">
    <rp-col :span="8">
      rp-rp-card shadow="always">
    rp-     总是显示
   rp-  </rp-card>
    <rp--col>
    <rp-col :span="8">
      rp-rp-card shadow="hover">
    rp-     鼠标悬浮时显示
  rp-   </rp-card>
    </rp-col>
    <rp-col :span="8">
        <rp-card shadow="never">
            从不显示
        </rp-card>
    </rp-col>
</rp-row>
```

:::

### Attributes

| 参数       | 说明                                           | 类型   | 可选值                 | 默认值              |
| ---------- | ---------------------------------------------- | ------ | ---------------------- | ------------------- |
| header     | 设置 header，也可以通过 `slot#header` 传入 DOM | string | —                      | —                   |
| body-style | 设置 body 的样式                               | object | —                      | { padding: '20px' } |
| shadow     | 设置阴影显示时机                               | string | always / hover / never | always              |
