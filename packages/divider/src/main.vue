<template functional>
    <div v-bind="data.attrs" v-on="listeners" :class="[data.staticClass, 'rp-divider', `rp-divider--${props.direction}`]">
        <div v-if="slots().default && props.direction !== 'vertical'" :class="['rp-divider__text', `is-${props.contentPosition}`]">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'RpDivider',
    props: {
        direction: {
            type: String,
            default: 'horizontal',
            validator(val) {
                return ['horizontal', 'vertical'].indexOf(val) !== -1
            }
        },
        contentPosition: {
            type: String,
            default: 'center',
            validator(val) {
                return ['left', 'center', 'right'].indexOf(val) !== -1
            }
        }
    }
}
</script>
