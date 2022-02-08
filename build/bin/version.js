/*
 * @Date: 2022-01-27 17:12:59
 * @LastEditors: zhaozc
 * @LastEditTime: 2022-02-08 14:13:56
 * @FilePath: \ruipeng-ui\build\bin\version.js
 */
/**
 * 根据 package.json 自动生成 /examples/version.json，用于记录组件库的版本信息
 * 这些版本信息在官网组件页面的头部导航栏会用到
 */
var fs = require('fs')
var path = require('path')
var version = process.env.VERSION || require('../../package.json').version
var content = {
    '1.0.0': '1.0'
}
if (!content[version]) content[version] = '1.0'
fs.writeFileSync(path.resolve(__dirname, '../../examples/versions.json'), JSON.stringify(content))
