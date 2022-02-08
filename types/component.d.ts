/*
 * @Date: 2022-01-27 17:13:01
 * @LastEditors: zhaozc
 * @LastEditTime: 2022-02-08 17:35:54
 * @FilePath: \ruipeng-ui\types\component.d.ts
 */
import Vue from 'vue'

/** RuipengUI component common definition */
export declare class RuipengUIComponent extends Vue {
  /** Install component into Vue */
  static install (vue: typeof Vue): void
}

/** Component size definition for button, input, etc */
export type RuipengUIComponentSize = 'large' | 'medium' | 'small' | 'mini'

/** Horizontal alignment */
export type RuipengUIHorizontalAlignment = 'left' | 'center' | 'right'
