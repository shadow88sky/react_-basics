const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')  //导入在内存中自动生成index页面的插件

// 创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './src/index.html'),//源文件
    filename: 'index.html' // 生成的内存中的首页的名称
})

module.exports = {
    mode: 'development',
    // 在webpack 4.x中，有一个很大的特性，就是约定大鱼配置，默认的打包入口路径是src->index.js
    plugins: [
        htmlPlugin
    ]
}