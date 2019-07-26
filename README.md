# jsx语法 
```js
// 存放变量
let a = 10;
let str = '您好'
let boo = true
let title = '000'
const h1 = <h1>红红火火</h1>
const arr = [
    <h2>这是h2</h2>,
    <h3>这是h3</h3>
]

// 字符串变为jsx数组
const arrStr = ['孙悟空', '猪八戒', '沙悟净']
let nameArr = [];
// 注意: React中，需要把key添加给被forEach或map或for循环直接控制的元素
arrStr.forEach(item => {
    const temp = <h5 key={item}>{item}</h5>
    nameArr.push(temp)
})

// 什么情况下使用{}呢？当我们需要在jsx控制的区域内，写js表达式了，则需要把js写到{}中
ReactDOM.render(<div title={title}>
    {a}
    <hr />
    {str}
    <hr />
    {boo.toString()}
    <hr />
    {h1}
    <hr />
    {/* {arr} */}
    <hr />
    {nameArr}
    <hr />
    {arrStr.map(item => <h5 key={item}>{item}</h5>)}
    <hr />
    <p className="color">jsx中的class用className代替，for用htmlFor代替</p>
</div>, document.getElementById('app'))
```