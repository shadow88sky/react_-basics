import React from 'react';

export default class LifeCycleChild extends React.Component {
    constructor(props) {
        console.log('childrenconstructor')
        super(props)
        this.state = {
            time: props.time
        }
    }

    static getDerivedStateFromProps(nextProps, prveState) {
        alert(1);
        // 函数返回结果会被添加到state里面去
        // null state不改变值
        return null;
    }

    render() {
        console.log('childrenrender')
        return <div style={{ border: "solid black 1px" }}>
            定时器: {this.state.time}
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
        console.log('children组件加载完毕')
    }

    // 更新阶段
    // componentWillReceiveProps(props) {
    //     console.log(props)
    //     this.setState({ time: props.time })
    //     console.log('children组件将要接收参数----componentWillReceiveProps')
    // }

    shouldComponentUpdate() {
        console.log('children组件是否应该更新 --- shouldComponentUpdate')
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