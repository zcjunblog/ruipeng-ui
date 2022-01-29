/*
 * @Date: 2022-01-27 17:12:59
 * @LastEditors: zhaozc
 * @LastEditTime: 2022-01-28 16:29:18
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
    '1.4.13': '1.4',
    '2.0.11': '2.0',
    '2.1.0': '2.1',
    '2.2.2': '2.2',
    '2.3.9': '2.3',
    '2.4.11': '2.4',
    '2.5.4': '2.5',
    '2.6.3': '2.6',
    '2.7.2': '2.7',
    '2.8.2': '2.8',
    '2.9.2': '2.9',
    '2.10.1': '2.10',
    '2.11.1': '2.11',
    '2.12.0': '2.12',
    '2.13.2': '2.13',
    '2.14.1': '2.14'
}
if (!content[version]) content[version] = '2.15'
fs.writeFileSync(path.resolve(__dirname, '../../examples/versions.json'), JSON.stringify(content))
