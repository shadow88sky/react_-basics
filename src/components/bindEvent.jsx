import React from 'react'

export default class BindEvent extends React.Component {
    constructor() {
        super()
        this.state = {
            msg: '哈哈'
        }
    }
    render() {
        return <div>
            BindEvent 组件
            <hr />
            {/* 在React中，有一套自己的事件绑定机制；事件名，是小驼峰形式 */}
            {/* <button onClick={this.myClickHandler}>按钮</button> */}
            {/* 传参调用 */}
            <button onClick={() => this.myClickHandler('你好')}>按钮</button>
            <hr />
            {/* 点击按钮修改msg的值 */}
            <h3>{this.state.msg}</h3>
            {/* 注意 React中，如果想为state中的数据重新赋值，不要用this.state.xxx=值 */}
            <button onClick={() => this.update()}>更改msg</button>
            <hr />
            {/* 如果只是为文本框的value属性绑定到了this.state状态，但是如果不提供onChange处理函数的话，
            那么该文本框是只读的 */}
            {/* 当为文本框绑定value值后，要么为文本框提供onChange事件，要么就要提供readOnly */}
            <input type='text' style={{ width: '100 %' }} value={this.state.msg} onChange={(e) => this.textChange(e)} ref="txt" />
        </div >
    }

    myClickHandler(w) {
        console.log('ok')
        console.log(w)
    }

    update() {
        // 在React中，推荐使用this.setState({})修改状态值
        // 注意: this.setState方法的执行是异步的
        // 如果想在调用完this.setState之后，又想立即拿到最新的state值，需要使用callback
        this.setState({
            msg: '你好'
        }, () => {
            console.log(this.state.msg)
        })
    }

    textChange(e) {
        // 在onChange事件中，获取文本框的值，有两种方案
        // 方案1: 通过事件参数e来获取
        // console.log(e.target.value)
        this.setState({
            msg: e.target.value
        })
        // 方案2:
        console.log(this.refs.txt.value)
    }
}