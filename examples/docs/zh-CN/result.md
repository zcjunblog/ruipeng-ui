## Result 结果

用于对用户的操作结果或者异常状态做反馈。

### 基础用法

:::demo

```html
<rp-row>
    <rp-col :sm="12" :lg="6">
        <rp-result icon="success" title="成功提示" subTitle="请根据提示进行操作">
            <template slot="extra">
                <rp-button type="primary" size="medium">返回</rp-button>
            </template>
        </rp-result>
    </rp-col>
    <rp-col :sm="12" :lg="6">
        <rp-result icon="warning" title="警告提示" subTitle="请根据提示进行操作">
            <template slot="extra">
                <rp-button type="primary" size="medium">返回</rp-button>
            </template>
        </rp-result>
    </rp-col>
    <rp-col :sm="12" :lg="6">
        <rp-result icon="error" title="错误提示" subTitle="请根据提示进行操作">
            <template slot="extra">
                <rp-button type="primary" size="medium">返回</rp-button>
            </template>
        </rp-result>
    </rp-col>
    <rp-col :sm="12" :lg="6">
        <rp-result icon="info" title="信息提示" subTitle="请根据提示进行操作">
            <template slot="extra">
                <rp-button type="primary" size="medium">返回</rp-button>
            </template>
        </rp-result>
    </rp-col>
</rp-row>
```

:::

### 自定义内容

:::demo

```html
<rp-result title="404" subTitle="抱歉，请求错误">
    <template slot="icon">
        <rp-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"></rp-image>
    </template>
    <template slot="extra">
        <rp-button type="primary" size="medium">返回</rp-button>
    </template>
</rp-result>
```

:::

### Result Attributes

| 参数      | 说明     | 类型   | 可选值                           | 默认值 |
| --------- | -------- | ------ | -------------------------------- | ------ |
| title     | 标题     | string | —                                | —      |
| sub-title | 二级标题 | string | —                                | —      |
| icon      | 图标类型 | string | success / warning / info / error | info   |

### Result Slots

| Name     | 说明               |
| -------- | ------------------ |
| icon     | 自定义图标         |
| title    | 自定义标题         |
| subTitle | 自定义二级标题     |
| extra    | 自定义底部额外区域 |
