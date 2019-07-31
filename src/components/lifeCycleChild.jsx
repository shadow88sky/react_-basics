import React from 'react';

export default class LifeCycleChild extends React.Component {
    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            time: new Date()
        }
    }

    static getDerivedStateFromPorps(nextProps, prveState) {
        console.log(111111)
        // 函数返回结果会被添加到state里面去
        // null state不改变值
        return null
    }

    render() {
        console.log('render')
        return <div style={{ border: "solid black 1px" }}>
            定时器: {this.state.time.getSeconds()}
            <br />
            <button onClick={() => this.updateState()}>更新</button>
            <br />
            <button onClick={() => this.forceUpdate()}>强制更新</button>
        </div>
    }

    tick() {
        this.timeInterval = setInterval(() => {
            this.setState({ time: new Date() })
        }, 1000)
    }

    updateState() {
        this.setState({
            msg: 'tomorrow'
        })
    }

    // 装配阶段
    // componentWillMount() {
    //     this.tick()
    //     console.log('组件将要加载')
    // }

    componentDidMount() {
        console.log('组件加载完毕')
    }

    // 更新阶段
    // componentWillReceiveProps() {
    //     console.log('组件将要接收参数----componentWillReceiveProps')
    // }

    shouldComponentUpdate() {
        console.log('组件是否应该更新 --- shouldComponentUpdate')
        return true
    }

    // componentWillUpdate() {
    //     console.log('组件将要更新 --- componentWillUpdate')
    // }

    // getSnapshotBeforeUpdate() {
    //     console.log('在更新前获取截图 --- getSnapshotBeforeUpdate')
    // }

    componentDidUpdate() {
        console.log('组件已经更新完成 --- componentDidUpdate')
    }

    // 卸载
    componentWillUnmount() {
        console.log('组件将要卸载 --- componentWillUnmount')
        clearInterval(this.timeInterval)
    }

}