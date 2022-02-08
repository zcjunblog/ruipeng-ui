## Container 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

`<rp-container>`：外层容器。当子元素中包含 `<rp-header>` 或 `<rp-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<rp-header>`：顶栏容器。

`<rp-aside>`：侧边栏容器。

`<rp-main>`：主要区域容器。

`<rp-footer>`：底栏容器。

:::tip
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<rp-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<rp-container>`。
:::

### 常见页面布局

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

### 实例

:::demo

```html
<rp-container style="height: 500px; border: 1px solid #eee">
    <rp-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <rp-menu :default-openeds="['1', '3']">
            <rp-submenu index="1">
                <template slot="title">
                    <i class="rp-icon-message"></i>
                    导航一
                </template>
                <rp-menu-item-group>
                    <template slot="title">
                        分组一
                    </template>
                    <rp-menu-item index="1-1">选项1</rp-menu-item>
                    <rp-menu-item index="1-2">选项2</rp-menu-item>
                </rp-menu-item-group>
                <rp-menu-item-group title="分组2">
                    <rp-menu-item index="1-3">选项3</rp-menu-item>
                </rp-menu-item-group>
                <rp-submenu index="1-4">
                    <template slot="title">
                        选项4
                    </template>
                    <rp-menu-item index="1-4-1">选项4-1</rp-menu-item>
                </rp-submenu>
            </rp-submenu>
            <rp-submenu index="2">
                <template slot="title">
                    <i class="rp-icon-menu"></i>
                    导航二
                </template>
                <rp-menu-item-group>
                    <template slot="title">
                        分组一
                    </template>
                    <rp-menu-item index="2-1">选项1</rp-menu-item>
                    <rp-menu-item index="2-2">选项2</rp-menu-item>
                </rp-menu-item-group>
                <rp-menu-item-group title="分组2">
                    <rp-menu-item index="2-3">选项3</rp-menu-item>
                </rp-menu-item-group>
                <rp-submenu index="2-4">
                    <template slot="title">
                        选项4
                    </template>
                    <rp-menu-item index="2-4-1">选项4-1</rp-menu-item>
                </rp-submenu>
            </rp-submenu>
            <rp-submenu index="3">
                <template slot="title">
                    <i class="rp-icon-setting"></i>
                    导航三
                </template>
                <rp-menu-item-group>
                    <template slot="title">
                        分组一
                    </template>
                    <rp-menu-item index="3-1">选项1</rp-menu-item>
                    <rp-menu-item index="3-2">选项2</rp-menu-item>
                </rp-menu-item-group>
                <rp-menu-item-group title="分组2">
                    <rp-menu-item index="3-3">选项3</rp-menu-item>
                </rp-menu-item-group>
                <rp-submenu index="3-4">
                    <template slot="title">
                        选项4
                    </template>
                    <rp-menu-item index="3-4-1">选项4-1</rp-menu-item>
                </rp-submenu>
            </rp-submenu>
        </rp-menu>
    </rp-aside>

    <rp-container>
        <rp-header style="text-align: right; font-size: 12px">
            <rp-dropdown>
                <i class="rp-icon-setting" style="margin-right: 15px"></i>
                <rp-dropdown-menu slot="dropdown">
                    <rp-dropdown-item>查看</rp-dropdown-item>
                    <rp-dropdown-item>新增</rp-dropdown-item>
                    <rp-dropdown-item>删除</rp-dropdown-item>
                </rp-dropdown-menu>
            </rp-dropdown>
            <span>王小虎</span>
        </rp-header>

        <rp-main>
            <rp-table :data="tableData">
                <rp-table-column prop="date" label="日期" width="140"></rp-table-column>
                <rp-table-column prop="name" label="姓名" width="120"></rp-table-column>
                <rp-table-column prop="address" label="地址"></rp-table-column>
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
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
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

| 参数      | 说明             | 类型   | 可选值                | 默认值                                                                 |
| --------- | ---------------- | ------ | --------------------- | ---------------------------------------------------------------------- |
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `rp-header` 或 `rp-footer` 时为 vertical，否则为 horizontal |

### Header Attributes

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| height | 顶栏高度 | string | —      | 60px   |

### Aside Attributes

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| width | 侧边栏宽度 | string | —      | 300px  |

### Footer Attributes

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| height | 底栏高度 | string | —      | 60px   |
