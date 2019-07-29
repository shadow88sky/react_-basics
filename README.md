# React创建组件有两种方式  
* 函数式组件  
* 类组件  
函数式组件已经学过，现在看下类组件怎么写。 
```js
class HelloClass extends React.Component {
    // render函数的作用,渲染当前组件对应的虚拟dom元素
    // 在class关键字创建的组件中，如果想用外界传过来的props参数，不需接收，直接通过this.props.xxx访问
    render() {
        return <div>这是class创建的组件 --{this.props.name} --{this.props.age}</div>
    }
}
const user = {
    name: '沙赞',
    age: 14
}

ReactDOM.render(<HelloClass {...user} />, document.getElementById('app'))
```

# 函数式组件和类组件区别  
* 类组件，有自己的私有数据和生命周期函数  
* 函数式组件，只有props，没有自己的私有数据和生命周期函数
那么类组件有自己的私有数据怎么理解呢？我们把上面的类组件修改下:  
```js
class HelloClass extends React.Component {

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
```

# 有状态组件和无状态组件  
有状态组件和无状态组件之间的本质区别就是: 有无state属性和有无生命周期函数;  

# 组件中的props和state之间的区别  
* props中的数据都是外界传递过来的;
* state中的数据，都是组件私有的(通过Ajax获取回来的数据，一般都是私有数据)
* state中的数据，是可读可写的;