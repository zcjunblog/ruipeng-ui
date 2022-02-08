<script>
export default {
    name: 'RpTimeline',

    props: {
        reverse: {
            type: Boolean,
            default: false
        }
    },

    provide() {
        return {
            timeline: this
        }
    },

    render() {
        const reverse = this.reverse
        const classes = {
            'rp-timeline': true,
            'is-reverse': reverse
        }
        let slots = this.$slots.default || []
        if (reverse) {
            slots = slots.reverse()
        }
        return <ul class={classes}>{slots}</ul>
    }
}
</script>
