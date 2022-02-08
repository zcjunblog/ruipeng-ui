<script>
export default {
    name: 'RpTag',
    props: {
        text: String,
        closable: Boolean,
        type: String,
        hit: Boolean,
        disableTransitions: Boolean,
        color: String,
        size: String,
        effect: {
            type: String,
            default: 'light',
            validator(val) {
                return ['dark', 'light', 'plain'].indexOf(val) !== -1
            }
        }
    },
    methods: {
        handleClose(event) {
            event.stopPropagation()
            this.$emit('close', event)
        },
        handleClick(event) {
            this.$emit('click', event)
        }
    },
    computed: {
        tagSize() {
            return this.size || (this.$ELEMENT || {}).size
        }
    },
    render(h) {
        const { type, tagSize, hit, effect } = this
        const classes = [
            'rp-tag',
            type ? `rp-tag--${type}` : '',
            tagSize ? `rp-tag--${tagSize}` : '',
            effect ? `rp-tag--${effect}` : '',
            hit && 'is-hit'
        ]
        const tagRp = (
            <span class={classes} style={{ backgroundColor: this.color }} on-click={this.handleClick}>
                {this.$slots.default}
                {this.closable && <i class="rp-tag__close rp-icon-close" on-click={this.handleClose} />}
            </span>
        )

        return this.disableTransitions ? tagRp : <transition name="rp-zoom-in-center">{tagRp}</transition>
    }
}
</script>
