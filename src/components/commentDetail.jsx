import React from 'react'; // 创建组件，虚拟DOM，生命周期

export default class CommentDetail extends React.Component {
    render() {
        return <div>
            <h1>角色:{this.props.user}</h1>
            <p>特点:{this.props.content}</p>
        </div>
    }
}
