/*
 * @Date: 2022-01-27 17:13:01
 * @LastEditors: zhaozc
 * @LastEditTime: 2022-02-08 17:01:32
 * @FilePath: \ruipeng-ui\src\mixins\locale.js
 */
import { t } from 'ruipeng-ui/src/locale'

export default {
    methods: {
        t(...args) {
            return t.apply(this, args)
        }
    }
}
