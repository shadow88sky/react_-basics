# 项目中使用jsx语法 
实际开发中，用React.createElement这种方式去创建虚拟DOM还是太麻烦了。  
是不是能够直接写html呢？答案是可以，那这种在js文件中写html语法的就是jsx。
但是我们需要用babel来编译，实际上这种jsx语法最后会经过webpack,babel编译成React.createElement来创建虚拟DOM

步骤:
* 安装babel包  
    * babel-loader：使用 Babel 转换 JavaScript依赖关系的 Webpack 加载器
    * @babel/core：即 babel-core，将 ES6 代码转换为 ES5  
    * @babel/preset-env：即 babel-preset-env，根据您要支持的浏览器，决定使用哪些 transformations / plugins 和 polyfills，例如为旧浏览器提供现代浏览器的新特性  
    * @babel/preset-react：即 babel-preset-react，针对所有 React 插件的 Babel 预设，例如将 JSX 转换为函数
```
npm i babel-loader@8 @babel/core @babel/preset-env @babel/preset-react -D
```  

* 配置  
```js
// webpack.config.js  
    module: { // 所有第三方模块的配置规则
        rules: [ // 第三方匹配规则
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node-modules/ }, // 千万别忘记添加exclude排除项
        ]
    } 
// .babellrc
   {
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
   }
```  

* 引用react包  
```js
import React from 'react'; // 创建组件，虚拟DOM，生命周期
import ReactDOM from 'react-dom'; // 创建好的组件和 虚拟DOM放到页面上展示  
```
* 使用jsx语法
```js
const mydiv = <div id="mydiv" title="div aaa">这是一个div元素<p>嘿嘿</p></div>
```

* 渲染
```js
// 使用ReactDOM把虚拟DOM渲染到页面上 
// 参数1: 要渲染的那个虚拟DOM元素  
// 参数2: 指定页面上一个DOM元素，当作容器
ReactDOM.render(mydiv, document.getElementById('app'))
```