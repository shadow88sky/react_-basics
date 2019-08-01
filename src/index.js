import React from 'react'; // 创建组件，虚拟DOM，生命周期
import ReactDOM from 'react-dom'; // 创建好的组件和 虚拟DOM放到页面上展示  
import LifeCycle from './components/lifeCycle'

import AuthExample from './router/redirect'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

ReactDOM.render(<div>
    <AuthExample />
</div>, document.getElementById('app'))