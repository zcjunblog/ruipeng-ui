/*
 * @Date: 2022-01-27 17:13:00
 * @LastEditors: zhaozc
 * @LastEditTime: 2022-02-08 16:16:01
 * @FilePath: \ruipeng-ui\examples\extension\src\entry.js
 */
import init from './app'

if (!window.RuipengThemeRollerInit) {
    window.RuipengThemeRollerInit = true
    init()
}
