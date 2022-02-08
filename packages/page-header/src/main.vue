<template>
    <div class="rp-page-header">
        <div class="rp-page-header__left" @click="$emit('back')">
            <i class="rp-icon-back"></i>
            <div class="rp-page-header__title">
                <slot name="title">{{ title }}</slot>
            </div>
        </div>
        <div class="rp-page-header__content">
            <slot name="content">{{ content }}</slot>
        </div>
    </div>
</template>

<script>
import { t } from 'ruipeng-ui/src/locale'
export default {
    name: 'RpPageHeader',

    props: {
        title: {
            type: String,
            default() {
                return t('el.pageHeader.title')
            }
        },
        content: String
    }
}
</script>
