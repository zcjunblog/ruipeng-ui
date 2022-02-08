#! /bin/sh
###
 # @Date: 2022-01-27 17:12:59
 # @LastEditors: zhaozc
 # @LastEditTime: 2022-02-08 14:22:19
 # @FilePath: \ruipeng-ui\build\deploy-faas.sh
### 
set -ex
mkdir temp_web
npm run deploy:build
cd temp_web
git clone --depth 1 -b gh-pages --single-branch https://github.com/ElemeFE/ruipeng.git && cd ruipeng

# build sub folder
SUB_FOLDER='2.15'
mkdir -p $SUB_FOLDER
rm -rf *.js *.css *.map static
rm -rf $SUB_FOLDER/**
cp -rf ../../examples/ruipeng-ui/** .
cp -rf ../../examples/ruipeng-ui/** $SUB_FOLDER/
cd ../..

# deploy domestic site
faas deploy daily -P ruipeng
rm -rf temp_web
