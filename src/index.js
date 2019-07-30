import React from 'react'; // 创建组件，虚拟DOM，生命周期
import ReactDOM from 'react-dom'; // 创建好的组件和 虚拟DOM放到页面上展示  
import BindEvent from './components/bindEvent'

ReactDOM.render(<BindEvent />, document.getElementById('app'))