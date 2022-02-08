const RUIPENG_THEME_USER_CONFIG = 'RUIPENG_THEME_USER_CONFIG'
export const loadFromLocal = key => {
    return new window.Promise(resolve => {
        chrome.storage.local.get([key], result => {
            resolve(result[key])
        })
    })
}
export const saveToLocal = (key, value) => {
    chrome.storage.local.set({ [key]: value })
}

export const loadUserThemeFromLocal = () => {
    return loadFromLocal(RUIPENG_THEME_USER_CONFIG)
}
export const saveUserThemeToLocal = value => {
    saveToLocal(RUIPENG_THEME_USER_CONFIG, value)
}
