import React from 'react'; // 创建组件，虚拟DOM，生命周期

export default class HelloClass extends React.Component {

    // 构造器
    constructor() {
        // 由于继承了React.Component这个父类，所以自定义构造器中，必须调用super()
        super()
        // 只有调用了super()以后，才能使用this关键字
        this.state = {
            msg: '大家好，我是class创建的组件'
        }
    }

    // render函数的作用,渲染当前组件对应的虚拟dom元素
    // 在class关键字创建的组件中，如果想用外界传过来的props参数，不需接收，直接通过this.props.xxx访问
    render() {
        // 在class创建的组件中，this.state上的数据，都是可读可写的
        // this.state.msg = '你好'
        return <div>这是class创建的组件 --{this.props.name} --{this.props.age} --{this.state.msg}</div>
    }
}