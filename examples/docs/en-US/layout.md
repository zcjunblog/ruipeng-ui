## Layout

Quickly and easily create layouts with the basic 24-column.

### Basic layout

Create basic grid layout using columns.

:::demo With `row` and `col`, we can easily manipulate the layout using the `span` attribute.

```html
<rp-row>
    <rp-col :span="24"><div class="grid-content bg-purple-dark"></div></rp-col>
</rp-row>
<rp-row>
    <rp-col :span="12"><div class="grid-content bg-purple"></div></rp-col>
    <rp-col :span="12"><div class="grid-content bg-purple-light"></div></rp-col>
</rp-row>
<rp-row>
    <rp-col :span="8"><div class="grid-content bg-purple"></div></rp-col>
    <rp-col :span="8"><div class="grid-content bg-purple-light"></div></rp-col>
    <rp-col :span="8"><div class="grid-content bg-purple"></div></rp-col>
</rp-row>
<rp-row>
    <rp-col :span="6"><div class="grid-content bg-purple"></div></rp-col>
    <rp-col :span="6"><div class="grid-content bg-purple-light"></div></rp-col>
    <rp-col :span="6"><div class="grid-content bg-purple"></div></rp-col>
    <rp-col :span="6"><div class="grid-content bg-purple-light"></div></rp-col>
</rp-row>
<rp-row>
    <rp-col :span="4"><div class="grid-content bg-purple"></div></rp-col>
    <rp-col :span="4"><div class="grid-content bg-purple-light"></div></rp-col>
    <rp-col :span="4"><div class="grid-content bg-purple"></div></rp-col>
    <rp-col :span="4"><div class="grid-content bg-purple-light"></div></rp-col>
    <rp-col :span="4"><div class="grid-content bg-purple"></div></rp-col>
    <rp-col :span="4"><div class="grid-content bg-purple-light"></div></rp-col>
</rp-row>

<style>
    .rp-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .rp-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>
```

:::

### Column spacing

Column spacing is supported.

:::demo Row provides `gutter` attribute to specify spacings between columns, and its default value is 0.

```html
<rp-row :gutter="20">
    <rp-col :span="6"><div class="grid-content bg-purple"></div></rp-col>
    <rp-col :span="6"><div class="grid-content bg-purple"></div></rp-col>
    <rp-col :span="6"><div class="grid-content bg-purple"></div></rp-col>
    <rp-col :span="6"><div class="grid-content bg-purple"></div></rp-col>
</rp-row>

<style>
    .rp-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .rp-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>
```

:::

### Hybrid layout

Form a more complex hybrid layout by combining the basic 1/24 columns.

:::demo

```html
<rp-row :gutter="20">
    <rp-col :span="16"><div class="grid-content bg-purple"></div></rp-col>
    <rp-col :span="8"><div class="grid-content bg-purple"></div></rp-col>
</rp-row>
<rp-row :gutter="20">
    <rp-col :span="8"><div class="grid-content bg-purple"></div></rp-col>
    <rp-col :span="8"><div class="grid-content bg-purple"></div></rp-col>
    <rp-col :span="4"><div class="grid-content bg-purple"></div></rp-col>
    <rp-col :span="4"><div class="grid-content bg-purple"></div></rp-col>
</rp-row>
<rp-row :gutter="20">
    <rp-col :span="4"><div class="grid-content bg-purple"></div></rp-col>
    <rp-col :span="16"><div class="grid-content bg-purple"></div></rp-col>
    <rp-col :span="4"><div class="grid-content bg-purple"></div></rp-col>
</rp-row>

<style>
    .rp-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .rp-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>
```

:::

### Column offset

You can specify column offsets.

:::demo You can specify the number of column offset by setting the value of `offset` attribute of Col.

```html
<rp-row :gutter="20">
    <rp-col :span="6"><div class="grid-content bg-purple"></div></rp-col>
    <rp-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></rp-col>
</rp-row>
<rp-row :gutter="20">
    <rp-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></rp-col>
    <rp-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></rp-col>
</rp-row>
<rp-row :gutter="20">
    <rp-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></rp-col>
</rp-row>

<style>
    .rp-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .rp-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>
```

:::

### Alignment

Use the flex layout to make flexible alignment of columns.

:::demo You can enable flex layout by setting `type` attribute to 'flex', and define the layout of child elements by setting `justify` attribute with start, center, end, space-between or space-around.

```html
<rp-row type="flex" class="row-bg">
    <rp-col :span="6"><div class="grid-content bg-purple"></div></rp-col>
    <rp-col :span="6"><div class="grid-content bg-purple-light"></div></rp-col>
    <rp-col :span="6"><div class="grid-content bg-purple"></div></rp-col>
</rp-row>
<rp-row type="flex" class="row-bg" justify="center">
    <rp-col :span="6"><div class="grid-content bg-purple"></div></rp-col>
    <rp-col :span="6"><div class="grid-content bg-purple-light"></div></rp-col>
    <rp-col :span="6"><div class="grid-content bg-purple"></div></rp-col>
</rp-row>
<rp-row type="flex" class="row-bg" justify="end">
    <rp-col :span="6"><div class="grid-content bg-purple"></div></rp-col>
    <rp-col :span="6"><div class="grid-content bg-purple-light"></div></rp-col>
    <rp-col :span="6"><div class="grid-content bg-purple"></div></rp-col>
</rp-row>
<rp-row type="flex" class="row-bg" justify="space-between">
    <rp-col :span="6"><div class="grid-content bg-purple"></div></rp-col>
    <rp-col :span="6"><div class="grid-content bg-purple-light"></div></rp-col>
    <rp-col :span="6"><div class="grid-content bg-purple"></div></rp-col>
</rp-row>
<rp-row type="flex" class="row-bg" justify="space-around">
    <rp-col :span="6"><div class="grid-content bg-purple"></div></rp-col>
    <rp-col :span="6"><div class="grid-content bg-purple-light"></div></rp-col>
    <rp-col :span="6"><div class="grid-content bg-purple"></div></rp-col>
</rp-row>

<style>
    .rp-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .rp-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>
```

:::

### Responsive Layout

Taking example by Bootstrap's responsive design, five breakpoints are preset: xs, sm, md, lg and xl.

:::demo

```html
<rp-row :gutter="10">
    <rp-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></rp-col>
    <rp-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></rp-col>
    <rp-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></rp-col>
    <rp-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></rp-col>
</rp-row>

<style>
    .rp-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
</style>
```

:::

### Utility classes for hiding elements

Additionally, Element provides a series of classes for hiding elements under certain conditions. These classes can be added to any DOM elements or custom components. You need to import the following CSS file to use these classes:

```js
import 'ruipeng-ui/lib/theme-chalk/display.css'
```

The classes are:

-   `hidden-xs-only` - hide when on extra small viewports only
-   `hidden-sm-only` - hide when on small viewports and down
-   `hidden-sm-and-down` - hide when on small viewports and down
-   `hidden-sm-and-up` - hide when on small viewports and up
-   `hidden-md-only` - hide when on medium viewports only
-   `hidden-md-and-down` - hide when on medium viewports and down
-   `hidden-md-and-up` - hide when on medium viewports and up
-   `hidden-lg-only` - hide when on large viewports only
-   `hidden-lg-and-down` - hide when on large viewports and down
-   `hidden-lg-and-up` - hide when on large viewports and up
-   `hidden-xl-only` - hide when on extra large viewports only

### Row Attributes

| Attribute | Description                                             | Type   | Accepted Values                             | Default |
| --------- | ------------------------------------------------------- | ------ | ------------------------------------------- | ------- |
| gutter    | grid spacing                                            | number | —                                           | 0       |
| type      | layout mode, you can use flex, works in modern browsers | string | —                                           | —       |
| justify   | horizontal alignment of flex layout                     | string | start/end/center/space-around/space-between | start   |
| align     | vertical alignment of flex layout                       | string | top/middle/bottom                           | —       |
| tag       | custom element tag                                      | string | \*                                          | div     |

### Col Attributes

| Attribute | Description                                         | Type                                      | Accepted Values | Default |
| --------- | --------------------------------------------------- | ----------------------------------------- | --------------- | ------- |
| span      | number of column the grid spans                     | number                                    | —               | 24      |
| offset    | number of spacing on the left side of the grid      | number                                    | —               | 0       |
| push      | number of columns that grid moves to the right      | number                                    | —               | 0       |
| pull      | number of columns that grid moves to the left       | number                                    | —               | 0       |
| xs        | `<768px` Responsive columns or column props object  | number/object (e.g. {span: 4, offset: 4}) | —               | —       |
| sm        | `≥768px` Responsive columns or column props object  | number/object (e.g. {span: 4, offset: 4}) | —               | —       |
| md        | `≥992px` Responsive columns or column props object  | number/object (e.g. {span: 4, offset: 4}) | —               | —       |
| lg        | `≥1200px` Responsive columns or column props object | number/object (e.g. {span: 4, offset: 4}) | —               | —       |
| xl        | `≥1920px` Responsive columns or column props object | number/object (e.g. {span: 4, offset: 4}) | —               | —       |
| tag       | custom element tag                                  | string                                    | \*              | div     |
