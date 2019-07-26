# 虚拟DOM  
本质: 用JS对象，模拟DOM元素和嵌套关系  
目的: 实现页面元素的高效更新 

# 辅助工具  
* webpack  
    设置mode，在webpack.config.js  
```js
module.exports = {
    mode: 'development',
    // 在webpack 4.x中，有一个很大的特性，就是约定大鱼配置，默认的打包入口路径是src->index.js
}
```
* webpack-dev-server(设置端口，打开页面，热启动，打包压缩到内存)  
    设置package.json  
```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server --open --port 3000 --hot --process --compress"
  },
```
* html-webpack-plugin(html压缩到内存)  
    在webpack.config.js中设置plugins。  
```
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')  //导入在内存中自动生成index页面的插件

// 创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './src/index.html'),//源文件
    filename: 'index.html' // 生成的内存中的首页的名称
})

module.exports = {
    plugins: [
        htmlPlugin
    ]
}
```
