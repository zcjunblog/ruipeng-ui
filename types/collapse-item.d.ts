import { VNode } from 'vue'
import { RuipengUIComponent } from './component'

export interface CollapseItemSlots {
  /** Content of the collapse item */
  default: VNode[],

  /** Title of the collapse item */
  title: VNode[]

  [key: string]: VNode[]
}

/** Collapse Item Component */
export declare class RpCollapseItem extends RuipengUIComponent {
  /** Unique identification of the panel */
  name: string | number

  /** Title of the panel */
  title: string

  $slots: CollapseItemSlots

  /** Disable the collapse item */
  disabled: boolean
}
