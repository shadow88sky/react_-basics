import React from 'react'; // 创建组件，虚拟DOM，生命周期
import ReactDOM from 'react-dom'; // 创建好的组件和 虚拟DOM放到页面上展示  

// 创建一个虚拟div DOM元素来包含上面定义的虚拟DOM
// const mydiv = React.createElement('div', null, '这是一个div')


// HTML 是最优秀的标记语言:
// 注意: 在js中，默认不能写种种类似于HTML的标记；否则，会打包失败;
// 可以使用babel 来转换 这些js的标签;
// 这种在js中，混合写入类似于html的语法，叫做jsx语法
// 注意: jsx语法的本质，还是在运行的时候，被转换成了React.createElement形式来执行的
// 安装babel相关依赖 
// npm i babel-loader@8 @babel/core @babel/preset-env @babel/preset-react -D
// babel-loader：使用 Babel 转换 JavaScript依赖关系的 Webpack 加载器
// @babel/core：即 babel-core，将 ES6 代码转换为 ES5
// @babel/preset-env：即 babel-preset-env，根据您要支持的浏览器，决定使用哪些 transformations / plugins 和 polyfills，例如为旧浏览器提供现代浏览器的新特性
// @babel/preset-react：即 babel-preset-react，针对所有 React 插件的 Babel 预设，例如将 JSX 转换为函数
const mydiv = <div id="mydiv" title="div aaa">这是一个div元素<p>嘿嘿</p></div>

// 使用ReactDOM把虚拟DOM渲染到页面上 
// 参数1: 要渲染的那个虚拟DOM元素  
// 参数2: 指定页面上一个DOM元素，当作容器
ReactDOM.render(mydiv, document.getElementById('app'))