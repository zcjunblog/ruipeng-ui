<!--
 * @Date: 2022-01-27 17:12:59
 * @LastEditors: zhaozc
 * @LastEditTime: 2022-02-08 15:20:54
 * @FilePath: \ruipeng-ui\examples\components\theme-configurator\editor\fontLineHeight.vue
-->
<template>
    <section class="config" :key="displayName">
        <div class="config-label">
            <rp-tooltip :content="displayName" placement="top">
                <span>{{ displayKeyName }}</span>
            </rp-tooltip>
        </div>
        <div class="config-content">
            <rp-select v-model="value" class="select" size="medium" @change="onSelectChange">
                <rp-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></rp-option>
            </rp-select>
        </div>
    </section>
</template>

<style>
.select {
    width: 100%;
}
</style>

<script>
const defaultFontLineHeight = ['1', '1.3', '1.5', '1.7', '12px', '16px', '20px', '24px', '28px']
import Mixin from './mixin'
import { getStyleDisplayName } from '../utils/utils.js'

export default {
    props: {
        componentName: {
            type: String
        },
        golbalValue: {
            type: Object
        }
    },
    data() {
        return {
            options: [],
            value: ''
        }
    },
    mixins: [Mixin],
    computed: {
        isGlobalInputValue() {
            return this.config.value.startsWith('$')
        }
    },
    methods: {
        onSelectChange(e) {
            this.onChange(e)
        },
        initSelectOption() {
            this.options = []
            defaultFontLineHeight.forEach(size => {
                this.options.push({
                    value: size,
                    label: size
                })
            })
            const golbalTypography = this.golbalValue.typography
            if (this.isGlobalInputValue && golbalTypography) {
                Object.keys(golbalTypography).forEach(font => {
                    if (font.includes('font-line-height')) {
                        const size = golbalTypography[font]
                        this.options.push({
                            value: size.key,
                            label: getStyleDisplayName(size)
                        })
                    }
                })
            }
        }
    },
    watch: {
        mergedValue: {
            immediate: true,
            handler(value) {
                this.initSelectOption()
                this.value = this.mergedValue
            }
        }
    }
}
</script>
