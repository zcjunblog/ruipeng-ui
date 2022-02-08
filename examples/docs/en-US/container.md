## Container

Container components for scaffolding basic structure of the page:

`<rp-container>`: wrapper container. When nested with a `<rp-header>` or `<rp-footer>`, all its child elements will be vertically arranged. Otherwise horizontally.

`<rp-header>`: container for headers.

`<rp-aside>`: container for side sections (usually a side nav).

`<rp-main>`: container for main sections.

`<rp-footer>`: container for footers.

:::tip
These components use flex for layout, so please make sure your browser supports it. Besides, `<rp-container>`'s direct child elements have to be one or more of the latter four components. And father element of the latter four components must be a `<rp-container>`.
:::

### Common layouts

:::demo

```html
<rp-container>
    <rp-header>Header</rp-header>
    <rp-main>Main</rp-main>
</rp-container>

<rp-container>
    <rp-header>Header</rp-header>
    <rp-main>Main</rp-main>
    <rp-footer>Footer</rp-footer>
</rp-container>

<rp-container>
    <rp-aside width="200px">Aside</rp-aside>
    <rp-main>Main</rp-main>
</rp-container>

<rp-container>
    <rp-header>Header</rp-header>
    <rp-container>
        <rp-aside width="200px">Aside</rp-aside>
        <rp-main>Main</rp-main>
    </rp-container>
</rp-container>

<rp-container>
    <rp-header>Header</rp-header>
    <rp-container>
        <rp-aside width="200px">Aside</rp-aside>
        <rp-container>
            <rp-main>Main</rp-main>
            <rp-footer>Footer</rp-footer>
        </rp-container>
    </rp-container>
</rp-container>

<rp-container>
    <rp-aside width="200px">Aside</rp-aside>
    <rp-container>
        <rp-header>Header</rp-header>
        <rp-main>Main</rp-main>
    </rp-container>
</rp-container>

<rp-container>
    <rp-aside width="200px">Aside</rp-aside>
    <rp-container>
        <rp-header>Header</rp-header>
        <rp-main>Main</rp-main>
        <rp-footer>Footer</rp-footer>
    </rp-container>
</rp-container>

<style>
    .rp-header,
    .rp-footer {
        background-color: #b3c0d1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .rp-aside {
        background-color: #d3dce6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .rp-main {
        background-color: #e9eef3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .rp-container {
        margin-bottom: 40px;
    }

    .rp-container:nth-child(5) .rp-aside,
    .rp-container:nth-child(6) .rp-aside {
        line-height: 260px;
    }

    .rp-container:nth-child(7) .rp-aside {
        line-height: 320px;
    }
</style>
```

:::

### Example

:::demo

```html
<rp-container style="height: 500px; border: 1px solid #eee">
    <rp-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <rp-menu :default-openeds="['1', '3']">
            <rp-submenu index="1">
                <template slot="title">
                    <i class="rp-icon-message"></i>
                    Navigator One
                </template>
                <rp-menu-item-group>
                    <template slot="title">
                        Group 1
                    </template>
                    <rp-menu-item index="1-1">Option 1</rp-menu-item>
                    <rp-menu-item index="1-2">Option 2</rp-menu-item>
                </rp-menu-item-group>
                <rp-menu-item-group title="Group 2">
                    <rp-menu-item index="1-3">Option 3</rp-menu-item>
                </rp-menu-item-group>
                <rp-submenu index="1-4">
                    <template slot="title">
                        Option4
                    </template>
                    <rp-menu-item index="1-4-1">Option 4-1</rp-menu-item>
                </rp-submenu>
            </rp-submenu>
            <rp-submenu index="2">
                <template slot="title">
                    <i class="rp-icon-menu"></i>
                    Navigator Two
                </template>
                <rp-menu-item-group>
                    <template slot="title">
                        Group 1
                    </template>
                    <rp-menu-item index="2-1">Option 1</rp-menu-item>
                    <rp-menu-item index="2-2">Option 2</rp-menu-item>
                </rp-menu-item-group>
                <rp-menu-item-group title="Group 2">
                    <rp-menu-item index="2-3">Option 3</rp-menu-item>
                </rp-menu-item-group>
                <rp-submenu index="2-4">
                    <template slot="title">
                        Option 4
                    </template>
                    <rp-menu-item index="2-4-1">Option 4-1</rp-menu-item>
                </rp-submenu>
            </rp-submenu>
            <rp-submenu index="3">
                <template slot="title">
                    <i class="rp-icon-setting"></i>
                    Navigator Three
                </template>
                <rp-menu-item-group>
                    <template slot="title">
                        Group 1
                    </template>
                    <rp-menu-item index="3-1">Option 1</rp-menu-item>
                    <rp-menu-item index="3-2">Option 2</rp-menu-item>
                </rp-menu-item-group>
                <rp-menu-item-group title="Group 2">
                    <rp-menu-item index="3-3">Option 3</rp-menu-item>
                </rp-menu-item-group>
                <rp-submenu index="3-4">
                    <template slot="title">
                        Option 4
                    </template>
                    <rp-menu-item index="3-4-1">Option 4-1</rp-menu-item>
                </rp-submenu>
            </rp-submenu>
        </rp-menu>
    </rp-aside>

    <rp-container>
        <rp-header style="text-align: right; font-size: 12px">
            <rp-dropdown>
                <i class="rp-icon-setting" style="margin-right: 15px"></i>
                <rp-dropdown-menu slot="dropdown">
                    <rp-dropdown-item>View</rp-dropdown-item>
                    <rp-dropdown-item>Add</rp-dropdown-item>
                    <rp-dropdown-item>Delete</rp-dropdown-item>
                </rp-dropdown-menu>
            </rp-dropdown>
            <span>Tom</span>
        </rp-header>

        <rp-main>
            <rp-table :data="tableData">
                <rp-table-column prop="date" label="Date" width="140"></rp-table-column>
                <rp-table-column prop="name" label="Name" width="120"></rp-table-column>
                <rp-table-column prop="address" label="Address"></rp-table-column>
            </rp-table>
        </rp-main>
    </rp-container>
</rp-container>

<style>
    .rp-header {
        background-color: #b3c0d1;
        color: #333;
        line-height: 60px;
    }

    .rp-aside {
        color: #333;
    }
</style>

<script>
    export default {
        data() {
            const item = {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
            }
            return {
                tableData: Array(20).fill(item)
            }
        }
    }
</script>
```

:::

### Container Attributes

| Attribute | Description                         | Type   | Accepted Values       | Default                                                                    |
| --------- | ----------------------------------- | ------ | --------------------- | -------------------------------------------------------------------------- |
| direction | layout direction for child elements | string | horizontal / vertical | vertical when nested with `rp-header` or `rp-footer`; horizontal otherwise |

### Header Attributes

| Attribute | Description          | Type   | Accepted Values | Default |
| --------- | -------------------- | ------ | --------------- | ------- |
| height    | height of the header | string | —               | 60px    |

### Aside Attributes

| Attribute | Description               | Type   | Accepted Values | Default |
| --------- | ------------------------- | ------ | --------------- | ------- |
| width     | width of the side section | string | —               | 300px   |

### Footer Attributes

| Attribute | Description          | Type   | Accepted Values | Default |
| --------- | -------------------- | ------ | --------------- | ------- |
| height    | height of the footer | string | —               | 60px    |
