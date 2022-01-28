/*
 * @Date: 2022-01-27 17:12:59
 * @LastEditors: zhaozc
 * @LastEditTime: 2022-01-28 14:25:56
 * @FilePath: \ruipeng-ui\build\bin\i18n.js
 */
'use strict'

var fs = require('fs')
var path = require('path')

// 官网页面翻译配置，内置了四种语言
var langConfig = require('../../examples/i18n/page.json')

// 遍历所有语言
langConfig.forEach(lang => {
    // 创建 /examples/pages/{lang}，比如: /examples/pages/zh-CN TODO: zhaozc: ? 并未找到zh-CN和其他语言包文件夹
    try {
        fs.statSync(path.resolve(__dirname, `../../examples/pages/${lang.lang}`))
    } catch (e) {
        fs.mkdirSync(path.resolve(__dirname, `../../examples/pages/${lang.lang}`))
    }

    // 遍历所有的页面，根据 page.tpl 自动生成对应语言的 .vue 文件 zhaozc: ? 直接生成了不同语言的vue文件 上面的.lang有什么用
    Object.keys(lang.pages).forEach(page => {
        // 以下以 /examples/pages/template/index.tpl 为例
        var templatePath = path.resolve(__dirname, `../../examples/pages/template/${page}.tpl`)
        // /examples/pages/zh-CN/index.vue
        var outputPath = path.resolve(__dirname, `../../examples/pages/${lang.lang}/${page}.vue`)
        // 读取模版文件
        var content = fs.readFileSync(templatePath, 'utf8')
        // 读取 index页面的语言配置
        var pairs = lang.pages[page]
        // 遍历这些键值对，通过正则匹配的方式替换掉模版中对应的 key
        Object.keys(pairs).forEach(key => {
            content = content.replace(new RegExp(`<%=\\s*${key}\\s*>`, 'g'), pairs[key])
        })
        // 将替换后的内容写入 vue 文件
        fs.writeFileSync(outputPath, content)
    })
})
