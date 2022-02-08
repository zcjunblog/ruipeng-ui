## Link 文字链接

文字超链接

### 基础用法

基础的文字链接用法。
:::demo

```html
<div>
    <rp-link href="https://element.eleme.io" target="_blank">默认链接</rp-link>
    <rp-link type="primary">主要链接</rp-link>
    <rp-link type="success">成功链接</rp-link>
    <rp-link type="warning">警告链接</rp-link>
    <rp-link type="danger">危险链接</rp-link>
    <rp-link type="info">信息链接</rp-link>
</div>
```

:::

### 禁用状态

文字链接不可用状态。
:::demo

```html
<div>
    <rp-link disabled>默认链接</rp-link>
    <rp-link type="primary" disabled>主要链接</rp-link>
    <rp-link type="success" disabled>成功链接</rp-link>
    <rp-link type="warning" disabled>警告链接</rp-link>
    <rp-link type="danger" disabled>危险链接</rp-link>
    <rp-link type="info" disabled>信息链接</rp-link>
</div>
```

:::

### 下划线

文字链接下划线。
:::demo

```html
<div>
    <rp-link :underline="false">无下划线</rp-link>
    <rp-link>有下划线</rp-link>
</div>
```

:::

### 图标

带图标的文字链接可增强辨识度。
:::demo

```html
<div>
    <rp-link icon="rp-icon-edit">编辑</rp-link>
    <rp-link>
        查看
        <i class="rp-icon-view rp-icon--right"></i>
    </rp-link>
</div>
```

:::

### Attributes

| 参数      | 说明           | 类型    | 可选值                                      | 默认值  |
| --------- | -------------- | ------- | ------------------------------------------- | ------- |
| type      | 类型           | string  | primary / success / warning / danger / info | default |
| underline | 是否下划线     | boolean | —                                           | true    |
| disabled  | 是否禁用状态   | boolean | —                                           | false   |
| href      | 原生 href 属性 | string  | —                                           | -       |
| icon      | 图标类名       | string  | —                                           | -       |
