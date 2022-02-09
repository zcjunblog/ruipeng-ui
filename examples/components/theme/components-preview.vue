<style lang="scss">
.component-preview {
    padding-right: 10px;
    &:last-of-type {
        padding-bottom: 20px;
    }
    h4 {
        font-size: 20px;
        margin: 40px 0 20px;
        color: #909399;
    }
    .demo-item {
        margin-top: 10px;
        margin-right: 40px;
    }

    .demo-line {
        margin: 15px 0;
    }

    .rp-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .rp-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
    }

    .rp-avatar:not(:last-child) {
        margin-right: 20px;
    }

    .avatar-demo {
        display: flex;
        align-items: center;
    }
}
</style>
<template>
    <div class="component-preview">
        <h4>Button</h4>
        <rp-row class="demo-line">
            <rp-button>Default</rp-button>
            <rp-button type="primary">Primary</rp-button>
            <rp-button type="success">Success</rp-button>
            <rp-button type="info">Info</rp-button>
            <rp-button type="warning">Warning</rp-button>
            <rp-button type="danger">Danger</rp-button>
        </rp-row>
        <rp-row class="demo-line">
            <rp-button plain>Plain</rp-button>
            <rp-button type="primary" plain>Primary</rp-button>
            <rp-button type="success" plain>Success</rp-button>
            <rp-button type="info" plain>Info</rp-button>
            <rp-button type="warning" plain>Warning</rp-button>
            <rp-button type="danger" plain>Danger</rp-button>
        </rp-row>
        <rp-row class="demo-line">
            <rp-button round>Round</rp-button>
            <rp-button type="primary" round>Primary</rp-button>
            <rp-button type="success" round>Success</rp-button>
            <rp-button type="info" round>Info</rp-button>
            <rp-button type="warning" round>Warning</rp-button>
            <rp-button type="danger" round>Danger</rp-button>
        </rp-row>
        <rp-row class="demo-line">
            <rp-button icon="rp-icon-search" circle></rp-button>
            <rp-button type="primary" icon="rp-icon-edit" circle></rp-button>
            <rp-button type="success" icon="rp-icon-check" circle></rp-button>
            <rp-button type="info" icon="rp-icon-message" circle></rp-button>
            <rp-button type="warning" icon="rp-icon-star-off" circle></rp-button>
            <rp-button type="danger" icon="rp-icon-delete" circle></rp-button>
        </rp-row>
        <rp-row class="demo-line">
            <rp-button>Default</rp-button>
            <rp-button size="medium">Medium</rp-button>
            <rp-button size="small">Small</rp-button>
            <rp-button size="mini">Mini</rp-button>
        </rp-row>
        <h4>Radio</h4>
        <rp-row class="demo-line">
            <rp-radio v-model="radio" label="1">Option A</rp-radio>
            <rp-radio v-model="radio" label="2">Option B</rp-radio>
        </rp-row>
        <rp-row class="demo-line">
            <rp-radio-group v-model="radio1">
                <rp-radio-button label="New York"></rp-radio-button>
                <rp-radio-button label="Washington"></rp-radio-button>
                <rp-radio-button label="Los Angeles"></rp-radio-button>
                <rp-radio-button label="Chicago"></rp-radio-button>
            </rp-radio-group>
        </rp-row>
        <rp-row class="demo-line">
            <rp-radio v-model="radio2" label="1" border>Option A</rp-radio>
            <rp-radio v-model="radio2" label="2" border>Option B</rp-radio>
        </rp-row>
        <h4>Checkbox</h4>
        <rp-row class="demo-line">
            <rp-checkbox v-model="checked">Option</rp-checkbox>
        </rp-row>
        <rp-row class="demo-line">
            <rp-checkbox-group v-model="checked1">
                <rp-checkbox-button v-for="city in ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']" :label="city" :key="city">
                    {{ city }}
                </rp-checkbox-button>
            </rp-checkbox-group>
        </rp-row>
        <rp-row class="demo-line">
            <rp-checkbox v-model="checked2" label="Option1" border></rp-checkbox>
        </rp-row>
        <h4>Input</h4>
        <rp-row style="width: 180px">
            <rp-input placeholder="Please input" v-model="input"></rp-input>
        </rp-row>
        <h4>InputNumber</h4>
        <rp-row>
            <rp-input-number v-model="inputNumber" :min="1" :max="10"></rp-input-number>
        </rp-row>
        <h4>Select</h4>
        <rp-row>
            <rp-select v-model="selectValue" placeholder="Select">
                <rp-option v-for="item in selectOptions" :key="item.value" :label="item.label" :value="item.value"></rp-option>
            </rp-select>
        </rp-row>
        <h4>Cascader</h4>
        <rp-row>
            <rp-cascader :options="cascadeOptions" v-model="cascaderValue"></rp-cascader>
        </rp-row>
        <h4>Switch</h4>
        <rp-row>
            <rp-switch v-model="switchValue"></rp-switch>
            <rp-switch style="margin-left: 40px" v-model="switchValue" active-text="Pay by month" inactive-text="Pay by year"></rp-switch>
        </rp-row>
        <h4>Slider</h4>
        <rp-row style="width: 380px">
            <rp-slider v-model="slider"></rp-slider>
        </rp-row>
        <h4>DatePicker</h4>
        <rp-row>
            <rp-date-picker v-model="datePicker" type="date"></rp-date-picker>
        </rp-row>
        <h4>Rate</h4>
        <rp-row>
            <rp-rate class="demo-line" v-model="rate"></rp-rate>
            <rp-rate class="demo-line" v-model="rate" show-score text-color="#ff9900" score-template="{value} points"></rp-rate>
        </rp-row>
        <h4>Transfer</h4>
        <rp-row>
            <rp-transfer v-model="transfer" filterable :data="transferData">
                <rp-button class="transfer-footer" slot="left-footer" size="small">Operation</rp-button>
                <rp-button class="transfer-footer" slot="right-footer" size="small">Operation</rp-button>
            </rp-transfer>
        </rp-row>
        <h4>Table</h4>
        <rp-row>
            <rp-table :data="tableData" style="width: 70%">
                <rp-table-column prop="date" label="Date" width="180"></rp-table-column>
                <rp-table-column prop="name" label="Name" width="180"></rp-table-column>
                <rp-table-column prop="address" label="Address"></rp-table-column>
            </rp-table>
        </rp-row>
        <h4>Tag</h4>
        <rp-row>
            <rp-tag class="demo-item" closable>Tag One</rp-tag>
            <rp-tag class="demo-item" closable type="success">Tag Two</rp-tag>
            <rp-tag class="demo-item" closable type="info">Tag Three</rp-tag>
            <rp-tag class="demo-item" closable type="warning">Tag Four</rp-tag>
            <rp-tag class="demo-item" closable type="danger">Tag Five</rp-tag>
        </rp-row>
        <h4>Progress</h4>
        <rp-row style="width: 380px">
            <rp-progress :percentage="20"></rp-progress>
            <rp-progress :percentage="60" status="exception"></rp-progress>
            <rp-progress :percentage="100" status="success"></rp-progress>
        </rp-row>
        <h4>Tree</h4>
        <rp-row style="width: 380px">
            <rp-tree :data="treeData" :props="defaultTreeProps"></rp-tree>
        </rp-row>
        <h4>Pagination</h4>
        <rp-row>
            <rp-pagination layout="prev, pager, next" :total="1000"></rp-pagination>
        </rp-row>
        <h4>Badge</h4>
        <rp-row>
            <rp-badge :value="12" class="demo-item">
                <rp-button size="small">comments</rp-button>
            </rp-badge>
            <rp-badge :value="3" class="demo-item">
                <rp-button size="small">replies</rp-button>
            </rp-badge>
            <rp-badge :value="1" class="demo-item" type="primary">
                <rp-button size="small">comments</rp-button>
            </rp-badge>
            <rp-badge :value="2" class="demo-item" type="warning">
                <rp-button size="small">replies</rp-button>
            </rp-badge>
        </rp-row>
        <h4>Alert</h4>
        <rp-row style="width: 380px;">
            <rp-alert class="demo-item" title="success alert" type="success" show-icon></rp-alert>
            <rp-alert class="demo-item" title="info alert" type="info" close-text="Gotcha" show-icon></rp-alert>
            <rp-alert class="demo-item" title="warning alert" type="warning" show-icon></rp-alert>
            <rp-alert class="demo-item" title="error alert" type="error" description="more text description" show-icon></rp-alert>
        </rp-row>
        <h4>Loading</h4>
        <rp-row>
            <rp-table :data="tableData" style="width: 90%" v-loading="true">
                <rp-table-column prop="date" label="Date" width="180"></rp-table-column>
                <rp-table-column prop="name" label="Name" width="180"></rp-table-column>
                <rp-table-column prop="address" label="Address"></rp-table-column>
            </rp-table>
        </rp-row>
        <h4>Message</h4>
        <rp-row>
            <div
                role="alert"
                class="demo-item rp-message rp-message--success rp-message-fade-leave-active rp-message-fade-leave-to"
                style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"
            >
                <i class="rp-message__icon rp-icon-success"></i>
                <p class="rp-message__content">Congrats, this is a success message.</p>
                <!---->
            </div>
            <div
                role="alert"
                class="demo-item rp-message rp-message--warning rp-message-fade-leave-active rp-message-fade-leave-to"
                style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"
            >
                <i class="rp-message__icon rp-icon-warning"></i>
                <p class="rp-message__content">Warning, this is a warning message.</p>
                <!---->
            </div>
            <div
                role="alert"
                class="demo-item rp-message rp-message--info rp-message-fade-leave-active rp-message-fade-leave-to"
                style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"
            >
                <i class="rp-message__icon rp-icon-info"></i>
                <p class="rp-message__content">This is a message.</p>
                <!---->
            </div>
            <div
                role="alert"
                class="demo-item rp-message rp-message--error is-closable rp-message-fade-leave-active rp-message-fade-leave-to"
                style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"
            >
                <i class="rp-message__icon rp-icon-error"></i>
                <p class="rp-message__content">Oops, this is a error message.</p>
                <i class="rp-message__closeBtn rp-icon-close"></i>
            </div>
        </rp-row>
        <h4>MessageBox</h4>
        <rp-row>
            <div class="rp-message-box">
                <div class="rp-message-box__header">
                    <div class="rp-message-box__title">
                        <!---->
                        <span>Warning</span>
                    </div>
                    <button type="button" aria-label="Close" class="rp-message-box__headerbtn">
                        <i class="rp-message-box__close rp-icon-close"></i>
                    </button>
                </div>
                <div class="rp-message-box__content">
                    <div class="rp-message-box__status rp-icon-warning"></div>
                    <div class="rp-message-box__message"><p>This will permanently delete the file. Continue?</p></div>
                    <div class="rp-message-box__input" style="display: none;">
                        <div class="rp-input">
                            <!---->
                            <input type="text" autocomplete="off" placeholder="" class="rp-input__inner" />
                            <!---->
                            <!---->
                            <!---->
                        </div>
                        <div class="rp-message-box__errormsg" style="visibility: hidden;"></div>
                    </div>
                </div>
                <div class="rp-message-box__btns">
                    <button type="button" class="rp-button rp-button--default rp-button--small">
                        <!---->
                        <!---->
                        <span>
                            Cancel
                        </span>
                    </button>
                    <button type="button" class="rp-button rp-button--default rp-button--small rp-button--primary ">
                        <!---->
                        <!---->
                        <span>
                            OK
                        </span>
                    </button>
                </div>
            </div>
        </rp-row>
        <h4>Notification</h4>
        <rp-row>
            <div role="alert" class="rp-notification right" style="position: relative; left: 0;">
                <!---->
                <div class="rp-notification__group">
                    <span class="rp-notification__title">Notification</span>
                    <div class="rp-notification__content"><div>This is a message</div></div>
                    <div class="rp-notification__closeBtn rp-icon-close"></div>
                </div>
            </div>
        </rp-row>
        <h4>Menu</h4>
        <rp-row>
            <rp-menu :default-active="menu" class="rp-menu-demo" mode="horizontal">
                <rp-menu-item index="1">Processing Center</rp-menu-item>
                <rp-submenu index="2">
                    <template slot="title">
                        Workspace
                    </template>
                    <rp-menu-item index="2-1">item one</rp-menu-item>
                    <rp-menu-item index="2-2">item two</rp-menu-item>
                    <rp-menu-item index="2-3">item three</rp-menu-item>
                    <rp-submenu index="2-4">
                        <template slot="title">
                            item four
                        </template>
                        <rp-menu-item index="2-4-1">item one</rp-menu-item>
                        <rp-menu-item index="2-4-2">item two</rp-menu-item>
                        <rp-menu-item index="2-4-3">item three</rp-menu-item>
                    </rp-submenu>
                </rp-submenu>
                <rp-menu-item index="3" disabled>Info</rp-menu-item>
                <rp-menu-item index="4">
                    <a href="https://www.rp-pet.com" target="_blank">Orders</a>
                </rp-menu-item>
            </rp-menu>
            <rp-menu default-active="2" class="demo-line">
                <rp-submenu index="1">
                    <template slot="title">
                        <i class="rp-icon-location"></i>
                        <span>Navigator One</span>
                    </template>
                    <rp-menu-item-group title="Group One">
                        <rp-menu-item index="1-1">item one</rp-menu-item>
                        <rp-menu-item index="1-2">item one</rp-menu-item>
                    </rp-menu-item-group>
                    <rp-menu-item-group title="Group Two">
                        <rp-menu-item index="1-3">item three</rp-menu-item>
                    </rp-menu-item-group>
                    <rp-submenu index="1-4">
                        <template slot="title">
                            item four
                        </template>
                        <rp-menu-item index="1-4-1">item one</rp-menu-item>
                    </rp-submenu>
                </rp-submenu>
                <rp-menu-item index="2">
                    <i class="rp-icon-menu"></i>
                    <span>Navigator Two</span>
                </rp-menu-item>
                <rp-menu-item index="3" disabled>
                    <i class="rp-icon-document"></i>
                    <span>Navigator Three</span>
                </rp-menu-item>
                <rp-menu-item index="4">
                    <i class="rp-icon-setting"></i>
                    <span>Navigator Four</span>
                </rp-menu-item>
            </rp-menu>
        </rp-row>
        <h4>Tabs</h4>
        <rp-row>
            <rp-tabs v-model="tab" class="demo-item">
                <rp-tab-pane label="User" name="first">User</rp-tab-pane>
                <rp-tab-pane label="Config" name="second">Config</rp-tab-pane>
                <rp-tab-pane label="Role" name="third">Role</rp-tab-pane>
                <rp-tab-pane label="Task" name="fourth">Task</rp-tab-pane>
            </rp-tabs>
            <rp-tabs type="card" class="demo-item">
                <rp-tab-pane label="User">User</rp-tab-pane>
                <rp-tab-pane label="Config">Config</rp-tab-pane>
                <rp-tab-pane label="Role">Role</rp-tab-pane>
                <rp-tab-pane label="Task">Task</rp-tab-pane>
            </rp-tabs>
        </rp-row>
        <h4>Dialog</h4>
        <rp-row>
            <div role="dialog" aria-modal="true" aria-label="Tips" class="rp-dialog" style="margin: 0">
                <div class="rp-dialog__header">
                    <span class="rp-dialog__title">Tips</span>
                    <button type="button" aria-label="Close" class="rp-dialog__headerbtn">
                        <i class="rp-dialog__close rp-icon rp-icon-close"></i>
                    </button>
                </div>
                <div class="rp-dialog__body"><span>This is a message</span></div>
                <div class="rp-dialog__footer">
                    <span class="dialog-footer">
                        <button type="button" class="rp-button rp-button--default">
                            <!---->
                            <!---->
                            <span>Cancel</span>
                        </button>
                        <button type="button" class="rp-button rp-button--primary">
                            <!---->
                            <!---->
                            <span>Confirm</span>
                        </button>
                    </span>
                </div>
            </div>
        </rp-row>
        <h4>Tooltip</h4>
        <rp-row>
            <div role="tooltip" x-placement="top" class="rp-tooltip__popper is-dark" style="position: relative; width: 40px;text-align: center;">
                Dark
                <div x-arrow="" class="popper__arrow"></div>
            </div>
            <div
                role="tooltip"
                x-placement="top"
                class="rp-tooltip__popper is-light"
                style="margin-top: 10px;position: relative; width: 40px;text-align: center;"
            >
                Light
                <div x-arrow="" class="popper__arrow"></div>
            </div>
        </rp-row>
        <h4>Popover</h4>
        <rp-row>
            <div
                role="tooltip"
                x-placement="top"
                id="rp-popover-2936"
                aria-hidden="true"
                class="rp-popover rp-popper rp-popover--plain"
                tabindex="0"
                style="width: 200px; position: relative; "
            >
                <div class="rp-popover__title">Title</div>
                this is content, this is content, this is content
                <div x-arrow="" class="popper__arrow"></div>
            </div>
        </rp-row>
        <h4>Card</h4>
        <rp-row>
            <rp-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>Card name</span>
                </div>
            </rp-card>
        </rp-row>
        <h4>Carousel</h4>
        <rp-row>
            <rp-carousel height="150px">
                <rp-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                </rp-carousel-item>
            </rp-carousel>
        </rp-row>
        <h4>Collapse</h4>
        <rp-row>
            <rp-collapse v-model="collapse">
                <rp-collapse-item title="Consistent" name="1">
                    <div>
                        Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the
                        users are used to;
                    </div>
                </rp-collapse-item>
                <rp-collapse-item title="Feedback" name="2">
                    <div>
                        Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;
                    </div>
                </rp-collapse-item>
            </rp-collapse>
        </rp-row>
        <h4>Avatar</h4>
        <rp-row class="demo-line avatar-demo">
            <rp-avatar icon="rp-icon-user-solid" />
            <rp-avatar>avatar</rp-avatar>
            <rp-avatar shape="square" fit="contain" :src="avatarData.url"></rp-avatar>
            <rp-avatar size="large">large</rp-avatar>
            <rp-avatar size="medium">medium</rp-avatar>
            <rp-avatar size="small">small</rp-avatar>
        </rp-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            radio: '1',
            radio1: 'Washington',
            radio2: '1',
            checked: true,
            checked1: ['Shanghai'],
            checked2: true,
            input: 'Ruipeng',
            inputNumber: 1,
            selectOptions: [
                {
                    value: 'Option1',
                    label: 'Option1'
                },
                {
                    value: 'Option2',
                    label: 'Option2'
                },
                {
                    value: 'Option3',
                    label: 'Option3'
                },
                {
                    value: 'Option4',
                    label: 'Option4'
                },
                {
                    value: 'Option5',
                    label: 'Option5'
                }
            ],
            selectValue: '',
            cascadeOptions: [
                {
                    value: 'guide',
                    label: 'Guide',
                    children: [
                        {
                            value: 'disciplines',
                            label: 'Disciplines',
                            children: [
                                {
                                    value: 'consistency',
                                    label: 'Consistency'
                                },
                                {
                                    value: 'feedback',
                                    label: 'Feedback'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 'resource',
                    label: 'Resource',
                    children: [
                        {
                            value: 'axure',
                            label: 'Axure Components'
                        },
                        {
                            value: 'sketch',
                            label: 'Sketch Templates'
                        },
                        {
                            value: 'docs',
                            label: 'Design Documentation'
                        }
                    ]
                }
            ],
            cascaderValue: [],
            switchValue: true,
            slider: 28,
            datePicker: '',
            rate: null,
            transferData: (() => {
                const data = []
                for (let i = 1; i <= 15; i++) {
                    data.push({
                        key: i,
                        label: `Option ${i}`,
                        disabled: i % 4 === 0
                    })
                }
                return data
            })(),
            transfer: [1, 4],
            tableData: [
                {
                    date: '2016-05-03',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                },
                {
                    date: '2016-05-02',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                },
                {
                    date: '2016-05-04',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                },
                {
                    date: '2016-05-01',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }
            ],
            menu: '1',
            tab: 'first',
            collapse: ['1'],
            treeData: [
                {
                    label: 'Level one 1',
                    children: [
                        {
                            label: 'Level two 1-1',
                            children: [
                                {
                                    label: 'Level three 1-1-1'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Level one 2',
                    children: [
                        {
                            label: 'Level two 2-1',
                            children: [
                                {
                                    label: 'Level three 2-1-1'
                                }
                            ]
                        },
                        {
                            label: 'Level two 2-2',
                            children: [
                                {
                                    label: 'Level three 2-2-1'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Level one 3',
                    children: [
                        {
                            label: 'Level two 3-1',
                            children: [
                                {
                                    label: 'Level three 3-1-1'
                                }
                            ]
                        },
                        {
                            label: 'Level two 3-2',
                            children: [
                                {
                                    label: 'Level three 3-2-1'
                                }
                            ]
                        }
                    ]
                }
            ],
            defaultTreeProps: {
                children: 'children',
                label: 'label'
            },
            avatarData: {
                url: 'http://www.rp-pet.com/images/shipin2.jpg'
            }
        }
    }
}
</script>
