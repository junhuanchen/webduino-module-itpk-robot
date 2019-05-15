# Webduino Blockly 之 茉莉机器人

本插件地址：`https://junhuanchen.github.io/webduino-module-itpk-robot/blockly.json`

PS：这是一个纯粹 API 的积木接口，从这里我将阐述一下我设计的一些标准积木开头。

## 前言

本人设计的积木满足以下格式 webduino-module-模块名，例如：webduino-module-itpk-robot。

积木插件结构：（根据 [eim 积木设计文档](https://github.com/junhuanchen/webduino-module-eim) 可知）

- blockly

存放 blockly 积木有关的资源

- blockly/blocks.js

积木的样式设计代码，由 blockly 自动生成，但需要最终添加语言包。

- blockly/javascript.js

积木产生代码的生成代码，由 blockly 自动生成，但需要最终添加 代码生成函数 链接起来。

- blockly/msg

存放 简、繁、英的变量语言包

- demos/blockly.xml

存放现在积木的运行示例，你只需要在载入插件的时候，载入外部积木即可运行我的测试案例。

- demos/library.xml

存放现在积木的设计器（Blockly Tool）布局文件。

- *.js（如 itpk.js）

属于 Js Bin 中可直接运行的 浏览器 js 代码，并非 Nodejs。

- *-blockly.js（如 itpk-blockly.js）

配合 stringFormat.js 完成对积木生成代码的 字符串格式化（stringFormat） 生成 js 代码。

以上就是我设计积木的常见结构，如果有更好的建议，或想同我交流的，欢迎 @ 我。

## 使用方法

接下来说说这个积木的功能，如图
