## Popconfirm

A simple confirmation dialog of an element click action.

### Basic usage

Popconfirm is similar to Popover. So for some duplicated attributes, please refer to the documentation of Popover.

:::demo Only `title` attribute is avaliable in Popconfirm, `content` will be ignored.

```html
<template>
    <rp-popconfirm title="Are you sure to delete this?">
        <rp-button slot="reference">Delete</rp-button>
    </rp-popconfirm>
</template>
```

:::

### Customise

You can customise Popconfirm like:
:::demo

```html
<template>
    <rp-popconfirm
        confirm-button-text="OK"
        cancrp-button-text="No, Thanks"
        icon="rp-icon-info"
        icon-color="red"
        title="Are you sure to delete this?"
    >
        <rp-button slot="reference">Delete</rp-button>
    </rp-popconfirm>
</template>
```

:::

### Attributes

| Attribute           | Description         | Type    | Accepted Values | Default          |
| ------------------- | ------------------- | ------- | --------------- | ---------------- |
| title               | Title               | String  | —               | —                |
| confirm-button-text | Confirm button text | String  | —               | —                |
| cancrp-button-text  | Cancel button text  | String  | —               | —                |
| confirm-button-type | Confirm button type | String  | —               | Primary          |
| cancrp-button-type  | Cancel button type  | String  | —               | Text             |
| icon                | Icon                | String  | —               | rp-icon-question |
| icon-color          | Icon color          | String  | —               | #f90             |
| hide-icon           | is hide Icon        | Boolean | —               | false            |

### Slot

| Name      | Description                           |
| --------- | ------------------------------------- |
| reference | HTML element that triggers Popconfirm |

### Events

| Event Name | Description                        | Parameters |
| ---------- | ---------------------------------- | ---------- |
| confirm    | triggers when click confirm button | —          |
| cancel     | triggers when click cancel button  | —          |
