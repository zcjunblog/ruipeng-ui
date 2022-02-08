import Vue from 'vue'

/** RpementUI component common definition */
export declare class RpementUIComponent extends Vue {
  /** Install component into Vue */
  static install (vue: typeof Vue): void
}

/** Component size definition for button, input, etc */
export type RpementUIComponentSize = 'large' | 'medium' | 'small' | 'mini'

/** Horizontal alignment */
export type RpementUIHorizontalAlignment = 'left' | 'center' | 'right'
