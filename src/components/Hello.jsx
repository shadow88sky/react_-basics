import React from 'react'; // 创建组件，虚拟DOM，生命周期

// 第一种创建组件的方式
function Hello(props) {
    // 如果在一个组件中 return 一个null,则表示此组件什么都不渲染
    // return null
    // 在组件中，必须返回一个合法的jsx虚拟dom元素
    console.log(props)
    // 组件中的props永远都是只读的，不能被重新赋值
    return <div name={props.name}>这是一个Hello组件 --- {props.name}</div>
}

// 把组件暴露出去
export default Hello