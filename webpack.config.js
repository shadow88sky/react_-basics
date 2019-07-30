const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')  //导入在内存中自动生成index页面的插件

// 创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './src/index.html'),//源文件
    filename: 'index.html' // 生成的内存中的首页的名称
})

// webpack 默认只能打包处理 .js 后缀名类型的文件; 像.png .vue无法主动处理，所以要配置第三方的loader
module.exports = {
    mode: 'development',
    // 在webpack 4.x中，有一个很大的特性，就是约定大鱼配置，默认的打包入口路径是src->index.js
    plugins: [
        htmlPlugin
    ],
    module: { // 所有第三方模块的配置规则
        rules: [ // 第三方匹配规则
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node-modules/ }, // 千万别忘记添加exclude排除项
            // 可以在css-loader之后，通过?追加参数
            // 其中，有个固定的参数，叫做modules,表示普通的css样式表，启用模块化
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 打包处理css样式表的第三方loader
            { test: /\.ttf|woff|woff2|eot|svg$/, use: 'url-loader' }, // 打包处理字体文件的loader
            { test: /\.scss$/, use: ['style-loader', 'css-loader?modules=true', 'sass-loader'] } // 打包处理scss的文件的loader
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'], // 表示这几个文件的后缀名，可以省略不写
        alias: { //表示别名
            '@': path.join(__dirname, './src') // 这样，@就表示项目根目录中src这一层路径
        }
    }
}