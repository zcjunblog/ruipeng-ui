## Breadcrumb

Displays the location of the current page, making it easier to browser back.

### Basic usage

:::demo In `rp-breadcrumb`, each `rp-breadcrumb-item` is a tag that stands for every level starting from homepage. This component has a `String` attribute `separator`, and it determines the separator. Its default value is '/'.

```html
<rp-breadcrumb separator="/">
    <rp-breadcrumb-item :to="{ path: '/' }">homepage</rp-breadcrumb-item>
    <rp-breadcrumb-item><a href="/">promotion management</a></rp-breadcrumb-item>
    <rp-breadcrumb-item>promotion list</rp-breadcrumb-item>
    <rp-breadcrumb-item>promotion detail</rp-breadcrumb-item>
</rp-breadcrumb>
```

:::

### Icon separator

:::demo Set `separator-class` to use `iconfont` as the separator，it will cover `separator`

```html
<rp-breadcrumb separator-class="rp-icon-arrow-right">
    <rp-breadcrumb-item :to="{ path: '/' }">homepage</rp-breadcrumb-item>
    <rp-breadcrumb-item>promotion management</rp-breadcrumb-item>
    <rp-breadcrumb-item>promotion list</rp-breadcrumb-item>
    <rp-breadcrumb-item>promotion detail</rp-breadcrumb-item>
</rp-breadcrumb>
```

:::

### Breadcrumb Attributes

| Attribute       | Description                  | Type   | Accepted Values | Default |
| --------------- | ---------------------------- | ------ | --------------- | ------- |
| separator       | separator character          | string | —               | /       |
| separator-class | class name of icon separator | string | —               | -       |

### Breadcrumb Item Attributes

| Attribute | Description                                               | Type          | Accepted Values | Default |
| --------- | --------------------------------------------------------- | ------------- | --------------- | ------- |
| to        | target route of the link, same as `to` of `vue-router`    | string/object | —               | —       |
| replace   | if `true`, the navigation will not leave a history record | boolean       | —               | false   |
