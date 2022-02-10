## Descriptions

Display multiple fields in list form.

### Basic usage

:::demo

```html
<rp-descriptions title="User Info">
    <rp-descriptions-item label="Username">kooriookami</rp-descriptions-item>
    <rp-descriptions-item label="Telephone">18100000000</rp-descriptions-item>
    <rp-descriptions-item label="Place">Suzhou</rp-descriptions-item>
    <rp-descriptions-item label="Remarks">
        <rp-tag size="small">School</rp-tag>
    </rp-descriptions-item>
    <rp-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</rp-descriptions-item>
</rp-descriptions>
```

:::

### Sizes

:::demo

```html
<template>
    <rp-radio-group v-model="size">
        <rp-radio label="">Default</rp-radio>
        <rp-radio label="medium">Medium</rp-radio>
        <rp-radio label="small">Small</rp-radio>
        <rp-radio label="mini">Mini</rp-radio>
    </rp-radio-group>

    <rp-descriptions class="margin-top" title="With border" :column="3" :size="size" border>
        <template slot="extra">
            <rp-button type="primary" size="small">Operation</rp-button>
        </template>
        <rp-descriptions-item>
            <template slot="label">
                <i class="rp-icon-user"></i>
                Username
            </template>
            kooriookami
        </rp-descriptions-item>
        <rp-descriptions-item>
            <template slot="label">
                <i class="rp-icon-mobile-phone"></i>
                Telephone
            </template>
            18100000000
        </rp-descriptions-item>
        <rp-descriptions-item>
            <template slot="label">
                <i class="rp-icon-location-outline"></i>
                Place
            </template>
            Suzhou
        </rp-descriptions-item>
        <rp-descriptions-item>
            <template slot="label">
                <i class="rp-icon-tickets"></i>
                Remarks
            </template>
            <rp-tag size="small">School</rp-tag>
        </rp-descriptions-item>
        <rp-descriptions-item>
            <template slot="label">
                <i class="rp-icon-office-building"></i>
                Address
            </template>
            No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </rp-descriptions-item>
    </rp-descriptions>

    <rp-descriptions class="margin-top" title="Without border" :column="3" :size="size">
        <template slot="extra">
            <rp-button type="primary" size="small">Operation</rp-button>
        </template>
        <rp-descriptions-item label="Username">kooriookami</rp-descriptions-item>
        <rp-descriptions-item label="Telephone">18100000000</rp-descriptions-item>
        <rp-descriptions-item label="Place">Suzhou</rp-descriptions-item>
        <rp-descriptions-item label="Remarks">
            <rp-tag size="small">School</rp-tag>
        </rp-descriptions-item>
        <rp-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</rp-descriptions-item>
    </rp-descriptions>
</template>

<script>
    export default {
        data() {
            return {
                size: ''
            }
        }
    }
</script>
```

:::

### Vertical List

:::demo

```html
<rp-descriptions title="Vertical list with border" direction="vertical" :column="4" border>
    <rp-descriptions-item label="Username">kooriookami</rp-descriptions-item>
    <rp-descriptions-item label="Telephone">18100000000</rp-descriptions-item>
    <rp-descriptions-item label="Place" :span="2">Suzhou</rp-descriptions-item>
    <rp-descriptions-item label="Remarks">
        <rp-tag size="small">School</rp-tag>
    </rp-descriptions-item>
    <rp-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</rp-descriptions-item>
</rp-descriptions>

<rp-descriptions class="margin-top" title="Vertical list without border" :column="4" direction="vertical">
    <rp-descriptions-item label="Username">kooriookami</rp-descriptions-item>
    <rp-descriptions-item label="Telephone">18100000000</rp-descriptions-item>
    <rp-descriptions-item label="Place" :span="2">Suzhou</rp-descriptions-item>
    <rp-descriptions-item label="Remarks">
        <rp-tag size="small">School</rp-tag>
    </rp-descriptions-item>
    <rp-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</rp-descriptions-item>
</rp-descriptions>
```

:::

### Customized Style

:::demo

```html
<rp-descriptions title="Customized style list" :column="3" border>
    <rp-descriptions-item label="Username" label-class-name="my-label" content-class-name="my-content">kooriookami</rp-descriptions-item>
    <rp-descriptions-item label="Telephone">18100000000</rp-descriptions-item>
    <rp-descriptions-item label="Place">Suzhou</rp-descriptions-item>
    <rp-descriptions-item label="Remarks">
        <rp-tag size="small">School</rp-tag>
    </rp-descriptions-item>
    <rp-descriptions-item label="Address" :content-style="{'text-align': 'right'}">
        No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </rp-descriptions-item>
</rp-descriptions>
<style>
    .my-label {
        background: #e1f3d8;
    }

    .my-content {
        background: #fde2e2;
    }
</style>
```

:::

### Descriptions Attributes

| Attribute        | Description                                           | Type    | Accepted Values       | Default    |
| ---------------- | ----------------------------------------------------- | ------- | --------------------- | ---------- |
| border           | with or without border                                | boolean | —                     | false      |
| column           | numbers of `Descriptions Item` in one line            | number  | —                     | 3          |
| direction        | direction of list                                     | string  | vertical / horizontal | horizontal |
| size             | size of list                                          | string  | medium / small / mini | —          |
| title            | title text, display on the top left                   | string  | —                     | —          |
| extra            | extra text, display on the top right                  | string  | —                     | —          |
| colon            | change default props colon value of Descriptions Item | boolean | —                     | true       |
| labelClassName   | custom label class name                               | string  | —                     | —          |
| contentClassName | custom content class name                             | string  | —                     | —          |
| labelStyle       | custom label style                                    | object  | —                     | —          |
| contentStyle     | custom content style                                  | object  | —                     | —          |

### Descriptions Slots

| Name  | Description                                 |
| ----- | ------------------------------------------- |
| title | custom title, display on the top left       |
| extra | custom extra area, display on the top right |

### Descriptions Item Attributes

| Attribute        | Description               | Type   | Accepted Values | Default |
| ---------------- | ------------------------- | ------ | --------------- | ------- |
| label            | label text                | string | —               | —       |
| span             | colspan of column         | number | —               | 1       |
| labelClassName   | custom label class name   | string | —               | —       |
| contentClassName | custom content class name | string | —               | —       |
| labelStyle       | custom label style        | object | —               | —       |
| contentStyle     | custom content style      | object | —               | —       |

### Descriptions Item Slots

| Name  | Description  |
| ----- | ------------ |
| label | custom label |
