/*
 * @Date: 2022-01-27 17:12:59
 * @LastEditors: zhaozc
 * @LastEditTime: 2022-02-08 15:00:22
 * @FilePath: \ruipeng-ui\examples\components\theme\localstorage.js
 */
import { RUIPENG_THEME_PREVIEW_CONFIG, RUIPENG_THEME_USER_CONFIG } from './constant'

export const saveToLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const loadFromLocal = key => {
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch (e) {
        console.error(e)
        return null
    }
}

export const savePreviewToLocal = value => {
    saveToLocal(RUIPENG_THEME_PREVIEW_CONFIG, value)
}

export const loadPreviewFromLocal = () => {
    return loadFromLocal(RUIPENG_THEME_PREVIEW_CONFIG) || {}
}

export const removePreviewFromLocal = () => {
    return localStorage.removeItem(RUIPENG_THEME_PREVIEW_CONFIG)
}

export const saveUserThemeToLocal = value => {
    saveToLocal(RUIPENG_THEME_USER_CONFIG, value)
}

export const loadUserThemeFromLocal = () => {
    return loadFromLocal(RUIPENG_THEME_USER_CONFIG)
}
