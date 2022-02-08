## Empty

Placeholder hints for empty states.

### Basic usage

:::demo

```html
<rp-empty description="description"></rp-empty>
```

:::

### Custom image

Use `image` prop to set image URL.

:::demo

```html
<rp-empty image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"></rp-empty>
```

:::

### Image size

Use `image-size` prop to control image size.

:::demo

```html
<rp-empty :image-size="200"></rp-empty>
```

:::

### Bottom content

Use the default slot to insert content at the bottom.

:::demo

```html
<rp-empty>
    <rp-button type="primary">Button</rp-button>
</rp-empty>
```

:::

### Empty Attributes

| Attribute   | Description        | Type   | Acceptable Value | Default |
| ----------- | ------------------ | ------ | ---------------- | ------- |
| image       | image URL          | string | —                | —       |
| image-size  | image size (width) | number | —                | —       |
| description | description        | string | —                | —       |

### Empty Slots

| Name        | Description           |
| ----------- | --------------------- |
| default     | Custom bottom content |
| image       | Custom image          |
| description | Custom description    |
