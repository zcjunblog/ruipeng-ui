/*
 * @Date: 2022-01-27 17:13:00
 * @LastEditors: zhaozc
 * @LastEditTime: 2022-02-07 18:18:09
 * @FilePath: \ruipeng-ui\packages\theme-chalk\gulpfile.js
 */
'use strict'

const { series, src, dest } = require('gulp')
const sass = require('gulp-dart-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')

// 将 scss 编译成 css 并压缩，最后输出到 ./lib 目录下
function compile() {
    return src('./src/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(
            autoprefixer({
                overrideBrowserslist: ['ie > 9', 'last 2 versions'],
                cascade: false
            })
        )
        .pipe(cssmin())
        .pipe(dest('./lib'))
}

// 拷贝 ./src/fonts 到 ./lib/fonts
function copyfont() {
    return src('./src/fonts/**').pipe(cssmin()).pipe(dest('./lib/fonts'))
}

exports.build = series(compile, copyfont)
