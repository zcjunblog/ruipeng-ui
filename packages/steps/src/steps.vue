<template>
    <div class="rp-steps" :class="[!simple && 'rp-steps--' + direction, simple && 'rp-steps--simple']">
        <slot></slot>
    </div>
</template>

<script>
import Migrating from 'ruipeng-ui/src/mixins/migrating'

export default {
    name: 'RpSteps',

    mixins: [Migrating],

    props: {
        space: [Number, String],
        active: Number,
        direction: {
            type: String,
            default: 'horizontal'
        },
        alignCenter: Boolean,
        simple: Boolean,
        finishStatus: {
            type: String,
            default: 'finish'
        },
        processStatus: {
            type: String,
            default: 'process'
        }
    },

    data() {
        return {
            steps: [],
            stepOffset: 0
        }
    },

    methods: {
        getMigratingConfig() {
            return {
                props: {
                    center: 'center is removed.'
                }
            }
        }
    },

    watch: {
        active(newVal, oldVal) {
            this.$emit('change', newVal, oldVal)
        },

        steps(steps) {
            steps.forEach((child, index) => {
                child.index = index
            })
        }
    }
}
</script>
