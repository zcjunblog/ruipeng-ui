<template>
    <div class="configurator-action">
        <div class="action-group">
            <rp-tooltip :content="getActionDisplayName('undo')">
                <img src="../../assets/images/icon-undo.svg" @click="onUndo" :class="{ active: userConfigHistory.length > 0 }" />
            </rp-tooltip>
            <rp-tooltip :content="getActionDisplayName('redo')">
                <img src="../../assets/images/icon-redo.svg" @click="onRedo" :class="{ active: userConfigRedoHistory.length > 0 }" />
            </rp-tooltip>
            <div class="button-group">
                <rp-button class="reset" type="primary" round size="mini" :disabled="isOfficial" @click="onReset">
                    {{ getActionDisplayName('reset-theme') }}
                </rp-button>
                <rp-button class="download" type="primary" round size="mini" :disabled="downloadDisabled" @click="onDownload">
                    {{ getActionDisplayName('download-theme') }}
                </rp-button>
            </div>
        </div>
        <rp-select v-model="selectedComponent" class="selector">
            <rp-option v-for="item in selectOptions" :key="item.value" :label="item.label" :value="item.value"></rp-option>
        </rp-select>
        <div class="line"></div>
    </div>
</template>

<style lang="scss">
.configurator-action {
    padding: 15px 18px 0;
    .action-group {
        padding: 5px 0;
        img {
            cursor: not-allowed;
            width: 16px;
            height: 16px;
            padding: 7px 0;
            margin-left: 5px;
            opacity: 0.5;
            &.active {
                opacity: 1;
                cursor: pointer;
            }
            &:last-of-type {
                margin-left: 10px;
            }
        }
        .button-group {
            float: right;
            .rp-button {
                padding: 6px 15px;
                &.is-disabled {
                    color: #c0c4cc;
                    background-color: #fff;
                    border-color: #ebeef5;
                }
            }
            .reset {
                background: #e6f1fc;
                color: #1f9f85;
                border-color: #a2cffc;
            }
            .download {
                background: #1f9f85;
                color: #fff;
                border-color: #1f9f85;
            }
        }
    }
    .selector {
        width: 100%;
        input {
            background: #f5f7fa;
            border: none;
            font-size: 18px;
            padding-left: 0;
            color: #606266;
        }
    }
    .line {
        width: 100%;
        height: 0;
        border-bottom: 1px solid #dcdfe6;
    }
}
</style>

<script>
import { getActionDisplayName } from './utils/utils'
export default {
    props: {
        selectOptions: Array,
        userConfigHistory: Array,
        userConfigRedoHistory: Array,
        isOfficial: Boolean,
        onUndo: Function,
        onRedo: Function
    },
    data() {
        return {
            selectedComponent: 'color',
            downloadDisabled: false
        }
    },
    watch: {
        selectedComponent: {
            handler(val) {
                this.$emit('select', val)
            }
        }
    },
    methods: {
        getActionDisplayName(key) {
            return getActionDisplayName(key)
        },
        onReset() {
            this.$parent.onReset()
        },
        onDownload() {
            this.downloadDisabled = true
            this.$parent.onDownload()
            setTimeout(() => {
                this.downloadDisabled = false
            }, 2500)
        }
    }
}
</script>
