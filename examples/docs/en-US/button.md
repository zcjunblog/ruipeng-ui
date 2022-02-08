## Button

Commonly used button.

### Basic usage

:::demo Use `type`, `plain`, `round` and `circle` to define Button's style.

```html
<rp-row>
    <rp-button>Default</rp-button>
    <rp-button type="primary">Primary</rp-button>
    <rp-button type="success">Success</rp-button>
    <rp-button type="info">Info</rp-button>
    <rp-button type="warning">Warning</rp-button>
    <rp-button type="danger">Danger</rp-button>
</rp-row>

<rp-row>
    <rp-button plain>Plain</rp-button>
    <rp-button type="primary" plain>Primary</rp-button>
    <rp-button type="success" plain>Success</rp-button>
    <rp-button type="info" plain>Info</rp-button>
    <rp-button type="warning" plain>Warning</rp-button>
    <rp-button type="danger" plain>Danger</rp-button>
</rp-row>

<rp-row>
    <rp-button round>Round</rp-button>
    <rp-button type="primary" round>Primary</rp-button>
    <rp-button type="success" round>Success</rp-button>
    <rp-button type="info" round>Info</rp-button>
    <rp-button type="warning" round>Warning</rp-button>
    <rp-button type="danger" round>Danger</rp-button>
</rp-row>

<rp-row>
    <rp-button icon="rp-icon-search" circle></rp-button>
    <rp-button type="primary" icon="rp-icon-edit" circle></rp-button>
    <rp-button type="success" icon="rp-icon-check" circle></rp-button>
    <rp-button type="info" icon="rp-icon-message" circle></rp-button>
    <rp-button type="warning" icon="rp-icon-star-off" circle></rp-button>
    <rp-button type="danger" icon="rp-icon-delete" circle></rp-button>
</rp-row>
```

:::

### Disabled Button

The `disabled` attribute determines if the button is disabled.

:::demo Use `disabled` attribute to determine whether a button is disabled. It accepts a `Boolean` value.

```html
<rp-row>
    <rp-button disabled>Default</rp-button>
    <rp-button type="primary" disabled>Primary</rp-button>
    <rp-button type="success" disabled>Success</rp-button>
    <rp-button type="info" disabled>Info</rp-button>
    <rp-button type="warning" disabled>Warning</rp-button>
    <rp-button type="danger" disabled>Danger</rp-button>
</rp-row>

<rp-row>
    <rp-button plain disabled>Plain</rp-button>
    <rp-button type="primary" plain disabled>Primary</rp-button>
    <rp-button type="success" plain disabled>Success</rp-button>
    <rp-button type="info" plain disabled>Info</rp-button>
    <rp-button type="warning" plain disabled>Warning</rp-button>
    <rp-button type="danger" plain disabled>Danger</rp-button>
</rp-row>
```

:::

### Text Button

Buttons without border and background.

:::demo

```html
<rp-button type="text">Text Button</rp-button>
<rp-button type="text" disabled>Text Button</rp-button>
```

:::

### Icon Button

Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.

:::demo Use the `icon` attribute to add icon. You can find the icon list in Element icon component. Adding icons to the right side of the text is achievable with an `<i>` tag. Custom icons can be used as well.

```html
<rp-button type="primary" icon="rp-icon-edit"></rp-button>
<rp-button type="primary" icon="rp-icon-share"></rp-button>
<rp-button type="primary" icon="rp-icon-delete"></rp-button>
<rp-button type="primary" icon="rp-icon-search">Search</rp-button>
<rp-button type="primary">
    Upload
    <i class="rp-icon-upload rp-icon-right"></i>
</rp-button>
```

:::

### Button Group

Displayed as a button group, can be used to group a series of similar operations.

:::demo Use tag `<rp-button-group>` to group your buttons.

```html
<rp-button-group>
    <rp-button type="primary" icon="rp-icon-arrow-left">Previous Page</rp-button>
    <rp-button type="primary">
        Next Page
        <i class="rp-icon-arrow-right rp-icon-right"></i>
    </rp-button>
</rp-button-group>
<rp-button-group>
    <rp-button type="primary" icon="rp-icon-edit"></rp-button>
    <rp-button type="primary" icon="rp-icon-share"></rp-button>
    <rp-button type="primary" icon="rp-icon-delete"></rp-button>
</rp-button-group>
```

:::

### Loading Button

Click the button to load data, then the button displays a loading state.

:::demo Set `loading` attribute to `true` to display loading state.

```html
<rp-button type="primary" :loading="true">Loading</rp-button>
```

:::

### Sizes

Besides default size, Button component provides three additional sizes for you to choose among different scenarios.

:::demo Use attribute `size` to set additional sizes with `medium`, `small` or `mini`.

```html
<rp-row>
    <rp-button>Default</rp-button>
    <rp-button size="medium">Medium</rp-button>
    <rp-button size="small">Small</rp-button>
    <rp-button size="mini">Mini</rp-button>
</rp-row>
<rp-row>
    <rp-button round>Default</rp-button>
    <rp-button size="medium" round>Medium</rp-button>
    <rp-button size="small" round>Small</rp-button>
    <rp-button size="mini" round>Mini</rp-button>
</rp-row>
```

:::

### Attributes

| Attribute   | Description                            | Type    | Accepted values                                    | Default |
| ----------- | -------------------------------------- | ------- | -------------------------------------------------- | ------- |
| size        | button size                            | string  | medium / small / mini                              | —       |
| type        | button type                            | string  | primary / success / warning / danger / info / text | —       |
| plain       | determine whether it's a plain button  | boolean | —                                                  | false   |
| round       | determine whether it's a round button  | boolean | —                                                  | false   |
| circle      | determine whether it's a circle button | boolean | —                                                  | false   |
| loading     | determine whether it's loading         | boolean | —                                                  | false   |
| disabled    | disable the button                     | boolean | —                                                  | false   |
| icon        | icon class name                        | string  | —                                                  | —       |
| autofocus   | same as native button's `autofocus`    | boolean | —                                                  | false   |
| native-type | same as native button's `type`         | string  | button / submit / reset                            | button  |
