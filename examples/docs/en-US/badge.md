## Badge

A number or status mark on buttons and icons.

### Basic usage

Displays the amount of new messages.

:::demo The amount is defined with `value` which accepts `Number` or `String`.

```html
<rp-badge :value="12" class="item">
    <rp-button size="small">comments</rp-button>
</rp-badge>
<rp-badge :value="3" class="item">
    <rp-button size="small">replies</rp-button>
</rp-badge>
<rp-badge :value="1" class="item" type="primary">
    <rp-button size="small">comments</rp-button>
</rp-badge>
<rp-badge :value="2" class="item" type="warning">
    <rp-button size="small">replies</rp-button>
</rp-badge>

<rp-dropdown trigger="click">
    <span class="rp-dropdown-link">
        Click Me
        <i class="rp-icon-caret-bottom rp-icon--right"></i>
    </span>
    <rp-dropdown-menu slot="dropdown">
        <rp-dropdown-item class="clearfix">
            comments
            <rp-badge class="mark" :value="12" />
        </rp-dropdown-item>
        <rp-dropdown-item class="clearfix">
            replies
            <rp-badge class="mark" :value="3" />
        </rp-dropdown-item>
    </rp-dropdown-menu>
</rp-dropdown>

<style>
    .item {
        margin-top: 10px;
        margin-right: 40px;
    }
</style>
```

:::

### Max value

You can customize the max value.

:::demo The max value is defined by property `max` which is a `Number`. Note that it only works when `value` is also a `Number`.

```html
<rp-badge :value="200" :max="99" class="item">
    <rp-button size="small">comments</rp-button>
</rp-badge>
<rp-badge :value="100" :max="10" class="item">
    <rp-button size="small">replies</rp-button>
</rp-badge>

<style>
    .item {
        margin-top: 10px;
        margin-right: 40px;
    }
</style>
```

:::

### Customizations

Displays text content other than numbers.

:::demo When `value` is a `String`, it can display customized text.

```html
<rp-badge value="new" class="item">
    <rp-button size="small">comments</rp-button>
</rp-badge>
<rp-badge value="hot" class="item">
    <rp-button size="small">replies</rp-button>
</rp-badge>

<style>
    .item {
        margin-top: 10px;
        margin-right: 40px;
    }
</style>
```

:::

### Little red dot

Use a red dot to mark content that needs to be noticed.

:::demo Use the attribute `is-dot`. It is a `Boolean`.

```html
<rp-badge is-dot class="item">query</rp-badge>
<rp-badge is-dot class="item">
    <rp-button class="share-button" icon="rp-icon-share" type="primary"></rp-button>
</rp-badge>

<style>
    .item {
        margin-top: 10px;
        margin-right: 40px;
    }
</style>
```

:::

### Attributes

| Attribute | Description                                                                      | Type           | Accepted Values                             | Default |
| --------- | -------------------------------------------------------------------------------- | -------------- | ------------------------------------------- | ------- |
| value     | display value                                                                    | string, number | —                                           | —       |
| max       | maximum value, shows '{max}+' when exceeded. Only works if `value` is a `Number` | number         | —                                           | —       |
| is-dot    | if a little dot is displayed                                                     | boolean        | —                                           | false   |
| hidden    | hidden badge                                                                     | boolean        | —                                           | false   |
| type      | button type                                                                      | string         | primary / success / warning / danger / info | —       |
