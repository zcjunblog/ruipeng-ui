/*
 * @Date: 2022-01-27 17:12:59
 * @LastEditors: zhaozc
 * @LastEditTime: 2022-02-08 14:38:57
 * @FilePath: \ruipeng-ui\examples\components\theme\loader\api.js
 */
import Ruipeng from 'main/index.js'
import { post, get } from './ajax'

const { version } = Ruipeng

const hostList = {
    local: 'http://localhost:3008/',
    production: 'https://element-api.ele.me/element/theme/' // TODO: zhaozc: 换成我们部署组件库项目的域名
}

const host = hostList[process.env.FAAS_ENV] || hostList.production

export const getVars = () => {
    return get(`${host}getVariable?version=${version}`)
}

export const updateVars = (data, cb) => {
    return post(`${host}updateVariable?version=${version}`, data, cb)
}
