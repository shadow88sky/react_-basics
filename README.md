# 用React创建一个评论列表组件:  
类似效果:
![image.png](https://upload-images.jianshu.io/upload_images/18760381-3129eeb4135c9444.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```js
// components/commentList
import React from 'react'; // 创建组件，虚拟DOM，生命周期
import CommentDetail from '@/components/commentDetail'

const commentList = [
    {
        id: 1,
        user: '路飞',
        content: '吃肉'
    }, {
        id: 2,
        user: '索隆',
        content: '练剑'
    }, {
        id: 3,
        user: '香吉士',
        content: '做饭'
    }, {
        id: 4,
        user: '娜美',
        content: '爱财'
    }, {
        id: 5,
        user: '罗宾',
        content: '历史'
    }
];

export default class CommentList extends React.Component {
    constructor() {
        super()
        this.state = {
            commentList: commentList
        }
    }
    render() {
        return <div className="commentList">
            <h1>这是评论列表组件</h1>
            {this
                .state
                .commentList
                .map(item => {
                    return <CommentDetail key={item.id} {...item} />
                })}
        </div>
    }
}

```

```js
// components/commentDetail
import React from 'react'; // 创建组件，虚拟DOM，生命周期

export default class CommentDetail extends React.Component {
    render() {
        return <div>
            <h1>角色:{this.props.user}</h1>
            <p>特点:{this.props.content}</p>
        </div>
    }
}

```