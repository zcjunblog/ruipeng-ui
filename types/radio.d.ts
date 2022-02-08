import { RuipengUIComponent } from './component'

/** Radio Component */
export declare class RpRadio extends RuipengUIComponent {
  /** The form input value */
  value: string

  /** The value of radio */
  label: string | number | boolean

  /** Whether radio is disabled */
  disabled: boolean

  /** Whether to add a border around Radio */
  border: boolean

  /** Native 'name' attribute */
  name: string
}
