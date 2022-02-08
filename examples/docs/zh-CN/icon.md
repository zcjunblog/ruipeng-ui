## Icon 图标

提供了一套常用的图标集合。

### 使用方法

直接通过设置类名为 `rp-icon-iconName` 来使用即可。例如：

:::demo

```html
<i class="rp-icon-edit"></i>
<i class="rp-icon-share"></i>
<i class="rp-icon-delete"></i>
<rp-button type="primary" icon="rp-icon-search">搜索</rp-button>
```

:::

### 图标集合

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'rp-icon-' + name"></i>
      <span class="icon-name">{{'rp-icon-' + name}}</span>
    </span>
  </li>
</ul>
