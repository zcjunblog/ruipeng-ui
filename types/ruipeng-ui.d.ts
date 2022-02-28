import Vue, { PluginObject } from 'vue'
import { RuipengUIComponent, RuipengUIComponentSize, RuipengUIHorizontalAlignment } from './component'

import { RpAlert } from './alert'
import { RpAside } from './aside'
import { RpAutocomplete } from './autocomplete'
import { RpBadge } from './badge'
import { RpBreadcrumb } from './breadcrumb'
import { RpBreadcrumbItem } from './breadcrumb-item'
import { RpButton } from './button'
import { RpButtonGroup } from './button-group'
import { RpCard } from './card'
import { RpCarousel } from './carousel'
import { RpCarouselItem } from './carousel-item'
import { RpCascader } from './cascader'
import { RpCheckbox } from './checkbox'
import { RpCheckboxButton } from './checkbox-button'
import { RpCheckboxGroup } from './checkbox-group'
import { RpCol } from './col'
import { RpCollapse } from './collapse'
import { RpCollapseItem } from './collapse-item'
import { RpColorPicker } from './color-picker'
import { RpContainer } from './container'
import { RpDatePicker } from './date-picker'
import { RpDialog } from './dialog'
import { RpDropdown } from './dropdown'
import { RpDropdownItem } from './dropdown-item'
import { RpDropdownMenu } from './dropdown-menu'
import { RpFooter } from './footer'
import { RpForm } from './form'
import { RpFormItem } from './form-item'
import { RpHeader } from './header'
import { RpInput } from './input'
import { RpInputNumber } from './input-number'
import { RpLoading } from './loading'
import { RpMain } from './main'
import { RpMenu } from './menu'
import { RpMenuItem } from './menu-item'
import { RpMenuItemGroup } from './menu-item-group'
import { RpMessage } from './message'
import { RpMessageBox } from './message-box'
import { RpNotification } from './notification'
import { RpOption } from './option'
import { RpOptionGroup } from './option-group'
import { RpPagination } from './pagination'
import { RpPopover } from './popover'
import { RpProgress } from './progress'
import { RpRate } from './rate'
import { RpRadio } from './radio'
import { RpRadioButton } from './radio-button'
import { RpRadioGroup } from './radio-group'
import { RpRow } from './row'
import { RpSelect } from './select'
import { RpSlider } from './slider'
import { RpStep } from './step'
import { RpSteps } from './steps'
import { RpSubmenu } from './submenu'
import { RpSwitch } from './switch'
import { RpTable } from './table'
import { RpTableColumn } from './table-column'
import { RpTag } from './tag'
import { RpTabs } from './tabs'
import { RpTabPane } from './tab-pane'
import { RpTimeline } from './timeline'
import { RpTimelineItem } from './timeline-item'
import { RpTimePicker } from './time-picker'
import { RpTimeSelect } from './time-select'
import { RpTooltip } from './tooltip'
import { RpTransfer } from './transfer'
import { RpTree, TreeData } from './tree'
import { RpUpload } from './upload'
import { RpLink } from './link'
import { RpDivider } from './divider'
import { RpIcon } from './icon'
import { RpCalendar } from './calendar'
import { RpImage } from './image'
import { RpBacktop } from './backtop'
import { RpInfiniteScroll } from './infinite-scroll'
import { RpPageHeader } from './page-header'
import { RpAvatar } from './avatar'
import { RpDrawer } from './drawer'
import { RpPopconfirm } from './popconfirm'
import { RpSkeleton } from './skeleton'
import { RpSkeletonItem } from './skeleton-item'
import { RpCascaderPanel } from './cascader-panel'
import { RpEmpty } from './empty'
import { RpSpinner } from './spinner'
import { RpDescriptions } from './descriptions'
import { RpDescriptionsItem } from './descriptions-item'
import { RpResult } from './result'

export interface InstallationOptions {
  locale: any,
  i18n: any,
  size: string
}

/** The version of ruipeng-ui */
export const version: string

/**
 * Install all ruipeng-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(RuipengUI)` to install.
 */
export function install (vue: typeof Vue, options: InstallationOptions): void

/** RuipengUI component common definition */
export type Component = RuipengUIComponent

/** Component size definition for button, input, etc */
export type ComponentSize = RuipengUIComponentSize

/** Horizontal alignment */
export type HorizontalAlignment = RuipengUIHorizontalAlignment

/** Show animation while loading data */
export const Loading: RpLoading

/** Used to show feedback after an activity. The difference with Notification is that the latter is often used to show a system level passive notification. */
export const Message: RpMessage

/** A set of modal boxes simulating system message box, mainly for message prompt, success tips, error messages and query information */
export const MessageBox: RpMessageBox

/** Displays a global notification message at the upper right corner of the page */
export const Notification: RpNotification

// TS cannot merge imported class with namespace, so declare subclasses instead

/** Alert Component */
export class Alert extends RpAlert {}

/** Aside Component */
export class Aside extends RpAside {}

/** Autocomplete Component */
export class Autocomplete extends RpAutocomplete {}

/** Bagde Component */
export class Badge extends RpBadge {}

/** Breadcrumb Component */
export class Breadcrumb extends RpBreadcrumb {}

/** Breadcrumb Item Component */
export class BreadcrumbItem extends RpBreadcrumbItem {}

/** Button Component */
export class Button extends RpButton {}

/** Button Group Component */
export class ButtonGroup extends RpButtonGroup {}

/** Card Component */
export class Card extends RpCard {}

/** Cascader Component */
export class Cascader extends RpCascader {}

/** Carousel Component */
export class Carousel extends RpCarousel {}

/** Carousel Item Component */
export class CarouselItem extends RpCarouselItem {}

/** Checkbox Component */
export class Checkbox extends RpCheckbox {}

/** Checkbox Button Component */
export class CheckboxButton extends RpCheckboxButton {}

/** Checkbox Group Component */
export class CheckboxGroup extends RpCheckboxGroup {}

/** Colunm Layout Component */
export class Col extends RpCol {}

/** Collapse Component */
export class Collapse extends RpCollapse {}

/** Collapse Item Component */
export class CollapseItem extends RpCollapseItem {}

/** Color Picker Component */
export class ColorPicker extends RpColorPicker {}

/** Container Component */
export class Container extends RpContainer {}

/** Date Picker Component */
export class DatePicker extends RpDatePicker {}

/** Dialog Component */
export class Dialog extends RpDialog {}

/** Dropdown Component */
export class Dropdown extends RpDropdown {}

/** Dropdown Item Component */
export class DropdownItem extends RpDropdownItem {}

/** Dropdown Menu Component */
export class DropdownMenu extends RpDropdownMenu {}

/** Footer Component */
export class Footer extends RpFooter {}

/** Form Component */
export class Form extends RpForm {}

/** Form Item Component */
export class FormItem extends RpFormItem {}

/** Header Component */
export class Header extends RpHeader {}

/** Input Component */
export class Input extends RpInput {}

/** Input Number Component */
export class InputNumber extends RpInputNumber {}

/** Main Component */
export class Main extends RpMain {}

/** Menu that provides navigation for your website */
export class Menu extends RpMenu {}

/** Menu Item Component */
export class MenuItem extends RpMenuItem {}

/** Menu Item Group Component */
export class MenuItemGroup extends RpMenuItemGroup {}

/** Dropdown Select Option Component */
export class Option extends RpOption {}

/** Dropdown Select Option Group Component */
export class OptionGroup extends RpOptionGroup {}

/** Pagination Component */
export class Pagination extends RpPagination {}

/** Popover Component */
export class Popover extends RpPopover {}

/** Progress Component */
export class Progress extends RpProgress {}

/** Rate Component */
export class Rate extends RpRate {}

/** Radio Component */
export class Radio extends RpRadio {}

/** Radio Button Component */
export class RadioButton extends RpRadioButton {}

/** Radio Group Component */
export class RadioGroup extends RpRadioGroup {}

/** Row Layout Component */
export class Row extends RpRow {}

/** Dropdown Select Component */
export class Select extends RpSelect {}

/** Slider Component */
export class Slider extends RpSlider {}

/** Step Component */
export class Step extends RpStep {}

/** Steps Component */
export class Steps extends RpSteps {}

/** Submenu Component */
export class Submenu extends RpSubmenu {}

/** Switch Component */
export class Switch extends RpSwitch {}

/** Table Component */
export class Table extends RpTable {}

/** Table Column Component */
export class TableColumn extends RpTableColumn {}

/** Tabs Component */
export class Tabs extends RpTabs {}

/** Tab Pane Component */
export class TabPane extends RpTabPane {}

/** Tag Component */
export class Tag extends RpTag {}

/** Timeline Component */
export class Timeline extends RpTimeline {}

/** Timeline Item Component */
export class TimelineItem extends RpTimelineItem {}

/** TimePicker Component */
export class TimePicker extends RpTimePicker {}

/** TimeSelect Component */
export class TimeSelect extends RpTimeSelect {}

/** Tooltip Component */
export class Tooltip extends RpTooltip {}

/** Transfer Component */
export class Transfer extends RpTransfer {}

/** Tree Component */
export class Tree<K = any, D = TreeData> extends RpTree<K, D> {}

/** Upload Component */
export class Upload extends RpUpload {}

/** Divider Component */
export class Divider extends RpDivider {}

/** Link Component */
export class Link extends RpLink {}

/** Image Component */
export class Image extends RpImage {}

/** Icon Component */
export class Icon extends RpIcon {}

/** Calendar Component */
export class Calendar extends RpCalendar {}

/** Backtop Component */
export class Backtop extends RpBacktop {}

/** InfiniteScroll Directive */
export const InfiniteScroll: PluginObject<RpInfiniteScroll>;

/** PageHeader Component */
export class PageHeader extends RpPageHeader {}

/** Avatar Component */
export class Avatar extends RpAvatar {}

/** Drawer Component */
export class Drawer extends RpDrawer {}

/** Popconfirm Component */
export class Popconfirm extends RpPopconfirm {}

/** Skeleton Component */
export class Skeleton extends RpSkeleton {}

/** Skeleton Item Component */
export class SkeletonItem extends RpSkeletonItem {}

/** CascaderPanel Component */
export class CascaderPanel extends RpCascaderPanel {}

/** Empty Component */
export class Empty extends RpEmpty {}

/** Spinner Component */
export class Spinner extends RpSpinner {}

/** Description Component */
export class Descriptions extends RpDescriptions {}

/** Description Item Component */
export class DescriptionsItem extends RpDescriptionsItem {}

/** Result Component */
export class Result extends RpResult {}