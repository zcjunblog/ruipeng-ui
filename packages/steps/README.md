# ruipeng-steps

> A ruipeng-steps component for Vue.js.

## Demo

http://ruipeng-component.github.io/ruipeng-steps

## Installation

```shell
npm i ruipeng-steps -D
```

## Usage

```javascript
import Vue from 'vue'
import RpStep from 'ruipeng-steps'
import 'ruipeng-theme-chalk/dist/step.css'

Vue.use(RpStep)
```

or

```javascript
import Vue from 'vue'
import { RpSteps, RpStep } from 'ruipeng-steps'

Vue.component('rp-steps', RpSteps)
Vue.component('rp-step', RpStep)
```

### Steps Attributes

| 参数           | 说明                                 | 类型    | 可选值                            | 默认值     |
| -------------- | ------------------------------------ | ------- | --------------------------------- | ---------- |
| space          | 每个 step 的间距，不填写将自适应间距 | Number  | —                                 | —          |
| direction      | 显示方向                             | string  | vertical/horizontal               | horizontal |
| active         | 设置当前激活步骤                     | number  | —                                 | 0          |
| process-status | 设置当前步骤的状态                   | string  | wait/process/finish/error/success | process    |
| finish-status  | 设置结束步骤的状态                   | string  | wait/process/finish/error/success | finish     |
| align-center   | 标题描述居中对齐                     | boolean | -                                 | false      |

### Step Attributes

| 参数        | 说明       | 类型                                                                | 可选值 | 默认值 |
| ----------- | ---------- | ------------------------------------------------------------------- | ------ | ------ |
| title       | 标题       | string                                                              | —      | —      |
| description | 描述性文字 | string                                                              | —      | —      |
| icon        | 图标       | Rpement Icon 提供的图标，如果要使用自定义图标可以通过 slot 方式写入 | string | —      |

### Step Slot

| name        | 说明       |
| ----------- | ---------- |
| icon        | 图标       |
| title       | 标题       |
| description | 描述性文字 |

## Development

```shell
make dev

## test
make test

## build
make build
```

# License

[MIT](https://opensource.org/licenses/MIT)
