import React from 'react';
import { observer } from 'mobx-react'
import { observable, useStrict, action } from 'mobx';

@observer
export default class App extends React.Component {
    state = {
        a: 0,
        b: 2
    };
    add = () => {
        this.setState({
            a: this.state.a + 1
        });
    };
    render() {
        return (
            <div>
                {this.state.a}
                <button onClick={this.add}>+1</button>
                <PureItem v={this.state.b} />
            </div>
        );
    }
}

@observer
class PureItem extends React.Component {

    constructor() {
        super()
        this.state = {}
    }

    static getDerivedStateFromProps(nextProps, prveState) {
        console.log(nextProps)
        // 函数返回结果会被添加到state里面去
        // null state不改变值
        return null
    }

    render() {
        console.log('PureItem的render触发了');
        return (
            <div><div>Pure:</div>{this.state.a}</div>
        );
    }
}
