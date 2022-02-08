## Link

Text hyperlink

### Basic

Basic text link
:::demo

```html
<div>
    <rp-link href="https://element.eleme.io" target="_blank">default</rp-link>
    <rp-link type="primary">primary</rp-link>
    <rp-link type="success">success</rp-link>
    <rp-link type="warning">warning</rp-link>
    <rp-link type="danger">danger</rp-link>
    <rp-link type="info">info</rp-link>
</div>
```

:::

### Disabled

Disabled state of link
:::demo

```html
<div>
    <rp-link disabled>default</rp-link>
    <rp-link type="primary" disabled>primary</rp-link>
    <rp-link type="success" disabled>success</rp-link>
    <rp-link type="warning" disabled>warning</rp-link>
    <rp-link type="danger" disabled>danger</rp-link>
    <rp-link type="info" disabled>info</rp-link>
</div>
```

:::

### Underline

Underline of link
:::demo

```html
<div>
    <rp-link :underline="false">Without Underline</rp-link>
    <rp-link>With Underline</rp-link>
</div>
```

:::

### Icon

Link with icon
:::demo

```html
<div>
    <rp-link icon="rp-icon-edit">Edit</rp-link>
    <rp-link>
        Check
        <i class="rp-icon-view rp-icon--right"></i>
    </rp-link>
</div>
```

:::

### Attributes

| Attribute | Description                         | Type    | Options                                     | Default |
| --------- | ----------------------------------- | ------- | ------------------------------------------- | ------- |
| type      | type                                | string  | primary / success / warning / danger / info | default |
| underline | whether the component has underline | boolean | —                                           | true    |
| disabled  | whether the component is disabled   | boolean | —                                           | false   |
| href      | same as native hyperlink's `href`   | string  | —                                           | -       |
| icon      | class name of icon                  | string  | —                                           | -       |
