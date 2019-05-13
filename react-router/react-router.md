### 使用react-router

---

> npm i react-router-dom -D



react-router：核心库

react-router-dom：react-router的DOM绑定版

react-router-native：react-native中使用

react-router-config：静态配置辅助库



### 基本使用

---

三大对象：

 * Router：路由对象，包裹在所有路由逻辑 (链接、配置) 之外
    * BroswerRouter：基于HTML5的history API，直接以path形式呈现
      - 注意：浏览器并未真正刷新，服务器也没有对应的地址，**除非刷新、否则服务器不会接到请求**
      - 适合配合服务器
    * HashRouter：基于location.hash，页面不刷新
      * 无法配合服务器使用
    * MemoryRouter：路由状态保存在内存，刷新页面会消失
      * 刷新后消失，无法配合服务器使用

* Route：路由配置，非常类似Vue的路由表
* Link：路由跳转，类似Vue的link



### 路由参数

---

路由信息存储在this.props.match对象上

注意：

 * 路由对应组件，只会创建一次 (性能) ，路由参数改变，不会触发组件constructor

 * 路由参数变化，触发componentDidUpdate

   

注意：

	* 不要直接在componentDidUpdate中设置状态，会引起无限递归



### 嵌套路由

---

嵌套路由的原理很简单：在任何组件中，都能使用Route (因为整个App包含在Router中)

> 用path存储当前的路由路径，向后追加更多级别即可



### 路由跳转

---

本质上，路由都是通过history或近似原理实现的，而history本质上是一个栈，所以，总共有两套方案来操作：

 * push、pop：向栈尾添加/从栈尾取出
 * replace：直接替换掉当前级别



####Link标签

---

相当于push操作，类似于a链接

```react
<Link to="xx">文字</Link>
```

或更复杂的

```react
<Link to={{
	pathname:'/game',
	search:'?xxx',
	hash:'#111'
}}>文字</Link>
```



####Redirect标签

---

相当于replace操作，类似于302

```react
<Redirect to='xx'/>
```

或更复杂的

```react
<Redirect to={{
	pathname:'/game',
	search:'?xxx',
	hash:'#111'
}}/>
```

