/*
 * @Date: 2022-01-27 17:13:01
 * @LastEditors: zhaozc
 * @LastEditTime: 2022-02-08 17:10:29
 * @FilePath: \ruipeng-ui\types\alert.d.ts
 */
import { RuipengUIComponent } from './component'

export type AlertType = 'success' | 'warning' | 'info' | 'error'
export type AlertEffect = 'dark' | 'light'

/** Alert Component */
export declare class RpAlert extends RuipengUIComponent {
  /** Title */
  title: string

  /** Component type */
  type: AlertType

  /** Descriptive text. Can also be passed with the default slot */
  description: string

  /** If closable or not */
  closable: boolean

  /** whether to center the text */
  center: boolean

  /** Customized close button text */
  closeText: string

  /** If a type icon is displayed */
  showIcon: boolean

  /** Choose effect */
  effect: AlertEffect
}
