## Icon

Element provides a set of common icons.

### Basic usage

Just assign the class name to `rp-icon-iconName`.

:::demo

```html
<i class="rp-icon-edit"></i>
<i class="rp-icon-share"></i>
<i class="rp-icon-delete"></i>
<rp-button type="primary" icon="rp-icon-search">Search</rp-button>
```

:::

### Icons

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'rp-icon-' + name"></i>
      <span class="icon-name">{{'rp-icon-' + name}}</span>
    </span>
  </li>
</ul>
