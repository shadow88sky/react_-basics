import React from 'react'; // 创建组件，虚拟DOM，生命周期
import ReactDOM from 'react-dom'; // 创建好的组件和 虚拟DOM放到页面上展示  
import LifeCycle from './components/lifeCycle'

import BasicExample from './router/router'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

ReactDOM.render(<div>
    <BasicExample />
</div>, document.getElementById('app'))