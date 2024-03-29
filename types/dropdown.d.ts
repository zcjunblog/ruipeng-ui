/*
 * @Date: 2022-01-27 17:13:01
 * @LastEditors: zhaozc
 * @LastEditTime: 2022-02-08 17:54:23
 * @FilePath: \ruipeng-ui\types\dropdown.d.ts
 */
import { RuipengUIComponent, RuipengUIComponentSize } from './component'
import { ButtonType } from './button'

export type DropdownMenuAlignment = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end'
export type DropdownMenuTrigger = 'hover' | 'click'

/** Toggleable menu for displaying lists of links and actions */
export declare class RpDropdown extends RuipengUIComponent {
  /** Menu button type. only works when split-button is true */
  type: ButtonType

  /** Whether a button group is displayed */
  splitButton: boolean

  /** menu size, also works on the split button */
  size: RuipengUIComponentSize

  /** Placement of the menu */
  placement: DropdownMenuAlignment

  /** How to trigger */
  trigger: DropdownMenuTrigger

  /** Whether to hide menu after clicking menu-item */
  hideOnClick: boolean

  /** Delay time before show a dropdown */
  showTimeout: number

  /** Delay time before hide a dropdown */
  hideTimeout: number

  /** Dropdown tabindex */
  tabindex: number

  /** Whether Dropdown is disabled */
  disabled: boolean
}
