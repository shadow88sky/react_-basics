import React from 'react'; // 创建组件，虚拟DOM，生命周期
import ReactDOM from 'react-dom'; // 创建好的组件和 虚拟DOM放到页面上展示  
// 默认不做单独配置的话，不能省略.jsx后缀名
// import Hello from './components/Hello';

import Hello from '@/components/Hello'; // @是在webpack中配置的src目录


const user = {
    name: '沙赞',
    age: 14
}

// ReactDOM.render(<div name="123"><Hello name={user.name} age={user.age}></Hello> </div>, document.getElementById('app'))

// 如果参数过多，也能通过...传递
ReactDOM.render(<div><Hello name={user.name}></Hello> </div>, document.getElementById('app'))