# React渲染最基本的虚拟DOM到页面上  
* 引用react和react-dom包  
```js
import React from 'react'; // 创建组件，虚拟DOM，生命周期
import ReactDOM from 'react-dom'; // 创建好的组件和 虚拟DOM放到页面上展示  
```
* 创建虚拟DOM元素  
```js
// 创建虚拟DOM元素  
// 参数1: 创建的原色的类型，字符串，表示元素的名称
// 参数2: 是一个对象或者null, 表示 当前这个DOM元素的属性  
// 参数3: 子节点(包括其它 虚拟DOM 获取文本子节点)
// 参数n: 其它子节点
// <h1 id="myh1" title = "this is a h1"> 这是一个大大的H1</h1>
// const myh1 = React.createElement('h1', null, '这是一个大大的H1')
const myh1 = React.createElement('h1', { id: 'myh1', title: 'this is a h1' }, '这是一个大大的H1')
```

* 创建一个虚拟div DOM元素来包含上面定义的虚拟DOM
```js
const mydiv = React.createElement('div', null, '这是一个div', myh1)
```

* 使用ReactDOM把虚拟DOM渲染到页面上 
```js
// 使用ReactDOM把虚拟DOM渲染到页面上 
// 参数1: 要渲染的那个虚拟DOM元素  
// 参数2: 指定页面上一个DOM元素，当作容器
ReactDOM.render(myh1, document.getElementById('app'))
```