.PHONY: dist test
default: help

# build all theme
build-theme:
	npm run build:theme

install:
	npm install

install-cn:
	npm install --registry=http://registry.npm.taobao.org

dev:
	npm run dev

play:
	npm run dev:play

new:
	node build/bin/new.js $(filter-out $@,$(MAKECMDGOALS)) && npm run build:file

new-lang:
	node build/bin/new-lang.js $(filter-out $@,$(MAKECMDGOALS))

dist: install
	npm run dist

deploy:
	@npm run deploy

pub:
	npm run pub

test:
	npm run test:watch

help:
	@echo "   make 命令使用说明\033[0m"
	@echo "   make install  ---  安装依赖"
	@echo "   make new <component-name> [中文名]  ---  创建新组件 package. 例如 'make new button 按钮'"
	@echo "   make dev  ---  开发模式"
	@echo "   make dist  ---  编译项目，生成目标文件"
	@echo "   make deploy  ---  部署 demo"
	@echo "   make pub  ---  发布到 npm 上"
	@echo "   make new-lang <lang>  ---  为网站添加新语言. 例如 'make new-lang fr'"
