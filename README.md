# React组件的生命周期  
老版本: React<16.3
* 装配阶段(特点:一辈子只执行一次)    
    * componentWillMount  
    * render
    * componentDidMount  
* 更新阶段:按需,根据props属性或state状态的改变，有选择性的执行0到多次  
    * componentWillReceiveProps
    * shouldComponentUpdate
    * componentWillUpdate
    * render
    * componentDidUpdate
* 卸载阶段(一辈子只执行一次)  
    * componentWillUnmount

![image.png](https://upload-images.jianshu.io/upload_images/18760381-62504774332da5e5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

新版本: React>=16.3
新版本的生命周期会用静态方法 getDerivedStateFromPorps来替代componentWillMount，componentWillReceiveProps，componentWillUpdate


![image.png](https://upload-images.jianshu.io/upload_images/18760381-b1c5a3b2a5b8d5a9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)