## Steps

Guide the user to complete tasks in accordance with the process. Its steps can be set according to the actual application scenario and the number of the steps can't be less than 2.

### Basic usage

Simple step bar.

:::demo Set `active` attribute with `Number` type, which indicates the index of steps and starts from 0. You can set `space` attribute when the width of the step needs to be fixed which accepts `Number` type. The unit of the `space` attribute is `px`. If not set, it is responsive. Setting the `finish-status` attribute can change the state of the steps that have been completed.

```html
<rp-steps :active="active" finish-status="success">
    <rp-step title="Step 1"></rp-step>
    <rp-step title="Step 2"></rp-step>
    <rp-step title="Step 3"></rp-step>
</rp-steps>

<rp-button style="margin-top: 12px;" @click="next">Next step</rp-button>

<script>
    export default {
        data() {
            return {
                active: 0
            }
        },

        methods: {
            next() {
                if (this.active++ > 2) this.active = 0
            }
        }
    }
</script>
```

:::

### Step bar that contains status

Shows the status of the step for each step.

:::demo Use `title` attribute to set the name of the step, or override the attribute by using a named `slot`. We have listed all the slot names for you at the end of this page.

```html
<rp-steps :space="200" :active="1" finish-status="success">
    <rp-step title="Done"></rp-step>
    <rp-step title="Processing"></rp-step>
    <rp-step title="Step 3"></rp-step>
</rp-steps>
```

:::

### Center

Title and desription can be centered.

:::demo

```html
<rp-steps :active="2" align-center>
    <rp-step title="Step 1" description="Some description"></rp-step>
    <rp-step title="Step 2" description="Some description"></rp-step>
    <rp-step title="Step 3" description="Some description"></rp-step>
    <rp-step title="Step 4" description="Some description"></rp-step>
</rp-steps>
```

:::

### Step bar with description

There is description for each step.

:::demo

```html
<rp-steps :active="1">
    <rp-step title="Step 1" description="Some description"></rp-step>
    <rp-step title="Step 2" description="Some description"></rp-step>
    <rp-step title="Step 3" description="Some description"></rp-step>
</rp-steps>
```

:::

### Step bar with icon

A variety of custom icons can be used in the step bar.

:::demo The icon is set by the `icon` property. The types of icons can be found in the document for the Icon component. In addition, you can customize the icon through a named `slot`.

```html
<rp-steps :active="1">
    <rp-step title="Step 1" icon="rp-icon-edit"></rp-step>
    <rp-step title="Step 2" icon="rp-icon-upload"></rp-step>
    <rp-step title="Step 3" icon="rp-icon-picture"></rp-step>
</rp-steps>
```

:::

### Vertical step bar

Vertical step bars.

:::demo You only need to set the `direction` attribute to`vertical` in the `rp-steps` element.

```html
<div style="height: 300px;">
    <rp-steps direction="vertical" :active="1">
        <rp-step title="Step 1"></rp-step>
        <rp-step title="Step 2"></rp-step>
        <rp-step title="Step 3"></rp-step>
    </rp-steps>
</div>
```

:::

### Simple step bar

Simple step bars, where `align-center`, `description`, `direction` and `space` will be ignored.

:::demo

```html
<rp-steps :space="200" :active="1" simple>
    <rp-step title="Step 1" icon="rp-icon-edit"></rp-step>
    <rp-step title="Step 2" icon="rp-icon-upload"></rp-step>
    <rp-step title="Step 3" icon="rp-icon-picture"></rp-step>
</rp-steps>

<rp-steps :active="1" finish-status="success" simple style="margin-top: 20px">
    <rp-step title="Step 1"></rp-step>
    <rp-step title="Step 2"></rp-step>
    <rp-step title="Step 3"></rp-step>
</rp-steps>
```

:::

### Steps Attributes

| Attribute      | Description                                                                   | Type            | Accepted Values                           | Default    |
| -------------- | ----------------------------------------------------------------------------- | --------------- | ----------------------------------------- | ---------- |
| space          | the spacing of each step, will be responsive if omitted. Supports percentage. | number / string | —                                         | —          |
| direction      | display direction                                                             | string          | vertical/horizontal                       | horizontal |
| active         | current activation step                                                       | number          | —                                         | 0          |
| process-status | status of current step                                                        | string          | wait / process / finish / error / success | process    |
| finish-status  | status of end step                                                            | string          | wait / process / finish / error / success | finish     |
| align-center   | center title and description                                                  | boolean         | —                                         | false      |
| simple         | whether to apply simple theme                                                 | boolean         | -                                         | false      |

### Step Attributes

| Attribute   | Description                                                              | Type                                                               | Accepted Values | Default |
| ----------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------ | --------------- | ------- |
| title       | step title                                                               | string                                                             | —               | —       |
| description | step description                                                         | string                                                             | —               | —       |
| icon        | step icon                                                                | step icon's class name. Icons can be passed via named slot as well | string          | —       |
| status      | current status. It will be automatically set by Steps if not configured. | wait / process / finish / error / success                          | -               |

### Step Slot

| Name        | Description      |
| ----------- | ---------------- |
| icon        | custom icon      |
| title       | step title       |
| description | step description |
