# React函数式组件化 & props参数传递
## 函数式组件  
```js
// 第一种创建组件的方式（函数式组件）
// 组件首字母必须大写
function Hello() {
    // 如果在一个组件中 return 一个null,则表示此组件什么都不渲染
    // return null
    // 在组件中，必须返回一个合法的jsx虚拟dom元素
    // 组件中的props永远都是只读的，不能被重新赋值
    return <div>这是一个Hello组件</div>
}
```

## 定义变量 & 使用组件  
```js
const user = {
    name: '沙赞',
    age: 14
}

ReactDOM.render(<div name="123"><Hello name={user.name} age={user.age}></Hello> </div>, document.getElementById('app'))
```

## 通过props传递参数  
```js
function Hello(props) {
    console.log(props)
    return <div>这是一个Hello组件  --- {props.name}</div>
}
```

## 展开运算符简化传递props
那么如果user的属性值有很多,那么在组件里面再按照上面的写法就会很麻烦，这时我们可以使用展开运算符(...)来简化操作。 
```js
ReactDOM.render(<div name="123"><Hello {...user}></Hello> </div>, document.getElementById('app'))
```