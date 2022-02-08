## Tabs

Divide data collections which are related yet belong to different types.

### Basic usage

Basic and concise tabs.

:::demo Tabs provide a selective card functionality. By default the first tab is selected as active, and you can activate any tab by setting the `value` attribute.

```html
<template>
    <rp-tabs v-model="activeName" @tab-click="handleClick">
        <rp-tab-pane label="User" name="first">User</rp-tab-pane>
        <rp-tab-pane label="Config" name="second">Config</rp-tab-pane>
        <rp-tab-pane label="Role" name="third">Role</rp-tab-pane>
        <rp-tab-pane label="Task" name="fourth">Task</rp-tab-pane>
    </rp-tabs>
</template>
<script>
    export default {
        data() {
            return {
                activeName: 'first'
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event)
            }
        }
    }
</script>
```

:::

### Card Style

Tabs styled as cards.

:::demo Set `type` to `card` can get a card-styled tab.

```html
<template>
    <rp-tabs type="card" @tab-click="handleClick">
        <rp-tab-pane label="User">User</rp-tab-pane>
        <rp-tab-pane label="Config">Config</rp-tab-pane>
        <rp-tab-pane label="Role">Role</rp-tab-pane>
        <rp-tab-pane label="Task">Task</rp-tab-pane>
    </rp-tabs>
</template>
<script>
    export default {
        data() {
            return {
                activeName: 'first'
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event)
            }
        }
    }
</script>
```

:::

### Border card

Border card tabs.

:::demo Set `type` to `border-card`.

```html
<rp-tabs type="border-card">
    <rp-tab-pane label="User">User</rp-tab-pane>
    <rp-tab-pane label="Config">Config</rp-tab-pane>
    <rp-tab-pane label="Role">Role</rp-tab-pane>
    <rp-tab-pane label="Task">Task</rp-tab-pane>
</rp-tabs>
```

:::

### Tab position

You can use `tab-position` attribute to set the tab's position.

:::demo You can choose from four directions: `tabPosition="left|right|top|bottom"`

```html
<template>
    <rp-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
        <rp-radio-button label="top">top</rp-radio-button>
        <rp-radio-button label="right">right</rp-radio-button>
        <rp-radio-button label="bottom">bottom</rp-radio-button>
        <rp-radio-button label="left">left</rp-radio-button>
    </rp-radio-group>

    <rp-tabs :tab-position="tabPosition" style="height: 200px;">
        <rp-tab-pane label="User">User</rp-tab-pane>
        <rp-tab-pane label="Config">Config</rp-tab-pane>
        <rp-tab-pane label="Role">Role</rp-tab-pane>
        <rp-tab-pane label="Task">Task</rp-tab-pane>
    </rp-tabs>
</template>
<script>
    export default {
        data() {
            return {
                tabPosition: 'left'
            }
        }
    }
</script>
```

:::

### Custom Tab

You can use named slot to customize the tab label content.

:::demo

```html
<rp-tabs type="border-card">
    <rp-tab-pane>
        <span slot="label">
            <i class="rp-icon-date"></i>
            Route
        </span>
        Route
    </rp-tab-pane>
    <rp-tab-pane label="Config">Config</rp-tab-pane>
    <rp-tab-pane label="Role">Role</rp-tab-pane>
    <rp-tab-pane label="Task">Task</rp-tab-pane>
</rp-tabs>
```

:::

### Add & close tab

Only card type Tabs support addable & closeable.

:::demo

```html
<rp-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
    <rp-tab-pane v-for="(item, index) in editableTabs" :key="item.name" :label="item.title" :name="item.name">
        {{item.content}}
    </rp-tab-pane>
</rp-tabs>
<script>
    export default {
        data() {
            return {
                editableTabsValue: '2',
                editableTabs: [
                    {
                        title: 'Tab 1',
                        name: '1',
                        content: 'Tab 1 content'
                    },
                    {
                        title: 'Tab 2',
                        name: '2',
                        content: 'Tab 2 content'
                    }
                ],
                tabIndex: 2
            }
        },
        methods: {
            handleTabsEdit(targetName, action) {
                if (action === 'add') {
                    let newTabName = ++this.tabIndex + ''
                    this.editableTabs.push({
                        title: 'New Tab',
                        name: newTabName,
                        content: 'New Tab content'
                    })
                    this.editableTabsValue = newTabName
                }
                if (action === 'remove') {
                    let tabs = this.editableTabs
                    let activeName = this.editableTabsValue
                    if (activeName === targetName) {
                        tabs.forEach((tab, index) => {
                            if (tab.name === targetName) {
                                let nextTab = tabs[index + 1] || tabs[index - 1]
                                if (nextTab) {
                                    activeName = nextTab.name
                                }
                            }
                        })
                    }

                    this.editableTabsValue = activeName
                    this.editableTabs = tabs.filter(tab => tab.name !== targetName)
                }
            }
        }
    }
</script>
```

:::

### Customized trigger button of new tab

:::demo

```html
<div style="margin-bottom: 20px;">
    <rp-button size="small" @click="addTab(editableTabsValue)">
        add tab
    </rp-button>
</div>
<rp-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
    <rp-tab-pane v-for="(item, index) in editableTabs" :key="item.name" :label="item.title" :name="item.name">
        {{item.content}}
    </rp-tab-pane>
</rp-tabs>
<script>
    export default {
        data() {
            return {
                editableTabsValue: '2',
                editableTabs: [
                    {
                        title: 'Tab 1',
                        name: '1',
                        content: 'Tab 1 content'
                    },
                    {
                        title: 'Tab 2',
                        name: '2',
                        content: 'Tab 2 content'
                    }
                ],
                tabIndex: 2
            }
        },
        methods: {
            addTab(targetName) {
                let newTabName = ++this.tabIndex + ''
                this.editableTabs.push({
                    title: 'New Tab',
                    name: newTabName,
                    content: 'New Tab content'
                })
                this.editableTabsValue = newTabName
            },
            removeTab(targetName) {
                let tabs = this.editableTabs
                let activeName = this.editableTabsValue
                if (activeName === targetName) {
                    tabs.forEach((tab, index) => {
                        if (tab.name === targetName) {
                            let nextTab = tabs[index + 1] || tabs[index - 1]
                            if (nextTab) {
                                activeName = nextTab.name
                            }
                        }
                    })
                }

                this.editableTabsValue = activeName
                this.editableTabs = tabs.filter(tab => tab.name !== targetName)
            }
        }
    }
</script>
```

:::

### Tabs Attributes

| Attribute       | Description                                                                                                                             | Type                                | Accepted Values       | Default           |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | --------------------- | ----------------- |
| value / v-model | binding value, name of the selected tab                                                                                                 | string                              | —                     | name of first tab |
| type            | type of Tab                                                                                                                             | string                              | card/border-card      | —                 |
| closable        | whether Tab is closable                                                                                                                 | boolean                             | —                     | false             |
| addable         | whether Tab is addable                                                                                                                  | boolean                             | —                     | false             |
| editable        | whether Tab is addable and closable                                                                                                     | boolean                             | —                     | false             |
| tab-position    | position of tabs                                                                                                                        | string                              | top/right/bottom/left | top               |
| stretch         | whether width of tab automatically fits its container                                                                                   | boolean                             | -                     | false             |
| before-leave    | hook function before switching tab. If `false` is returned or a `Promise` is returned and then is rejected, switching will be prevented | Function(activeName, oldActiveName) | —                     | —                 |

### Tabs Events

| Event Name | Description                                           | Parameters              |
| ---------- | ----------------------------------------------------- | ----------------------- |
| tab-click  | triggers when a tab is clicked                        | clicked tab             |
| tab-remove | triggers when tab-remove button is clicked            | name of the removed tab |
| tab-add    | triggers when tab-add button is clicked               | —                       |
| edit       | triggers when tab-add button or tab-remove is clicked | (targetName, action)    |

### Tab-pane Attributes

| Attribute | Description                                                                          | Type    | Accepted Values | Default                                                                        |
| --------- | ------------------------------------------------------------------------------------ | ------- | --------------- | ------------------------------------------------------------------------------ |
| label     | title of the tab                                                                     | string  | —               | —                                                                              |
| disabled  | whether Tab is disabled                                                              | boolean | —               | false                                                                          |
| name      | identifier corresponding to the name of Tabs, representing the alias of the tab-pane | string  | —               | ordinal number of the tab-pane in the sequence, e.g. the first tab-pane is '1' |
| closable  | whether Tab is closable                                                              | boolean | —               | false                                                                          |
| lazy      | whether Tab is lazily rendered                                                       | boolean | —               | false                                                                          |
