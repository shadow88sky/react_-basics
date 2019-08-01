import React from 'react';
import LifeCycleChild from './lifeCycleChild'

export default class LifeCycle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isRenderTest: true,
            time: 1
        }
    }

    render() {
        return <div style={{
            border: "solid black 1px"
        }}>

            {this.state.isRenderTest
                ? <LifeCycleChild time={this.state.time} />
                : '不渲染Test'}
            <br />
            Farther组件:
            <br />
            <button onClick={() => this.setState({ time: 2 })}>父组件更新</button>
            <br />
            <button
                onClick={() => this.setState({
                    isRenderTest: !this.state.isRenderTest
                })}>卸载子组件</button>
        </div >
    }
}