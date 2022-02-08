import { RpementUIComponent } from './component'

/** Use Collapse to store contents. */
export declare class RpCollapse extends RpementUIComponent {
  /** Whether to activate accordion mode */
  accordion: boolean

  /** Currently active panel */
  value: string | number | string[] | number[]
}
