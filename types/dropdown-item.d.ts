import { RpementUIComponent } from './component'

/** Toggleable menu for displaying lists of links and actions. */
export declare class RpDropdownItem extends RpementUIComponent {
  /** A command to be dispatched to Dropdown's command callback */
  command: string | number | object

  /** Whether the item is disabled */
  disabled: boolean

  /** Whether a divider is displayed */
  divided: boolean

  /** Icon to show on left side of text */
  icon: string
}
