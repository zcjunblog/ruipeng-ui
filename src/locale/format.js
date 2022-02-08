/*
 * @Date: 2022-01-27 17:13:01
 * @LastEditors: zhaozc
 * @LastEditTime: 2022-02-08 17:00:50
 * @FilePath: \ruipeng-ui\src\locale\format.js
 */
import { hasOwn } from 'ruipeng-ui/src/utils/util'

const RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g
/**
 *  String format template
 *  - Inspired:
 *    https://github.com/Matt-Esch/string-template/index.js
 */
export default function(Vue) {
    /**
     * template
     *
     * @param {String} string
     * @param {Array} ...args
     * @return {String}
     */

    function template(string, ...args) {
        if (args.length === 1 && typeof args[0] === 'object') {
            args = args[0]
        }

        if (!args || !args.hasOwnProperty) {
            args = {}
        }

        return string.replace(RE_NARGS, (match, prefix, i, index) => {
            let result

            if (string[index - 1] === '{' && string[index + match.length] === '}') {
                return i
            } else {
                result = hasOwn(args, i) ? args[i] : null
                if (result === null || result === undefined) {
                    return ''
                }

                return result
            }
        })
    }

    return template
}
