## Result

Used to give feedback on the result of user's operation or access exception.

### Basic usage

:::demo

```html
<rp-row>
    <rp-col :sm="12" :lg="6">
        <rp-result icon="success" title="Success Tip" subTitle="Please follow the instructions">
            <template slot="extra">
                <rp-button type="primary" size="medium">Back</rp-button>
            </template>
        </rp-result>
    </rp-col>
    <rp-col :sm="12" :lg="6">
        <rp-result icon="warning" title="Warning Tip" subTitle="Please follow the instructions">
            <template slot="extra">
                <rp-button type="primary" size="medium">Back</rp-button>
            </template>
        </rp-result>
    </rp-col>
    <rp-col :sm="12" :lg="6">
        <rp-result icon="error" title="Error Tip" subTitle="Please follow the instructions">
            <template slot="extra">
                <rp-button type="primary" size="medium">Back</rp-button>
            </template>
        </rp-result>
    </rp-col>
    <rp-col :sm="12" :lg="6">
        <rp-result icon="info" title="Info Tip" subTitle="Please follow the instructions">
            <template slot="extra">
                <rp-button type="primary" size="medium">Back</rp-button>
            </template>
        </rp-result>
    </rp-col>
</rp-row>
```

:::

### Customized content

:::demo

```html
<rp-result title="404" subTitle="Sorry, request error">
    <template slot="icon">
        <rp-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"></rp-image>
    </template>
    <template slot="extra">
        <rp-button type="primary" size="medium">Back</rp-button>
    </template>
</rp-result>
```

:::

### Result Attributes

| Attribute | Description | Type   | Accepted Values                  | Default |
| --------- | ----------- | ------ | -------------------------------- | ------- |
| title     | title       | string | —                                | —       |
| sub-title | sub title   | string | —                                | —       |
| icon      | icon type   | string | success / warning / info / error | info    |

### Result Slots

| Name     | Description       |
| -------- | ----------------- |
| icon     | custom icon       |
| title    | custom title      |
| subTitle | custom sub title  |
| extra    | custom extra area |
