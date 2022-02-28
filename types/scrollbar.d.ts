/*
 * @Date: 2022-02-11 12:19:50
 * @LastEditors: zhaozc
 * @LastEditTime: 2022-02-11 12:34:13
 * @FilePath: \ruipeng-ui\types\scrollbar.d.ts
 */
import { RuipengUIComponent } from './component'


/** Tag Component */
export declare class RpTag extends RuipengUIComponent {
  /** 容器的样式名 */
  wrapClass: string

  /** 展示视图的样式名 */
  viewClass: string

  /** 容器的样式 */
  wrapStyle: string

  /** 展示视图的样式 */
  viewStyle: string

  /** 是否使用原生滚动 */
  native: boolean

  /** 容器大小是否是不可变的 */
  noresize: boolean

  /** 渲染容器的标签 */
  tag: string
}
