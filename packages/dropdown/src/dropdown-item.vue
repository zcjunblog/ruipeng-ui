<template>
    <li
        class="rp-dropdown-menu__item"
        :class="{
            'is-disabled': disabled,
            'rp-dropdown-menu__item--divided': divided
        }"
        @click="handleClick"
        :aria-disabled="disabled"
        :tabindex="disabled ? null : -1"
    >
        <i :class="icon" v-if="icon"></i>
        <slot></slot>
    </li>
</template>
<script>
import Emitter from 'ruipeng-ui/src/mixins/emitter'

export default {
    name: 'RpDropdownItem',

    mixins: [Emitter],

    props: {
        command: {},
        disabled: Boolean,
        divided: Boolean,
        icon: String
    },

    methods: {
        handleClick(e) {
            this.dispatch('RpDropdown', 'menu-item-click', [this.command, this])
        }
    }
}
</script>
