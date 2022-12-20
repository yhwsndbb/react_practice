// 1 导入react
import React from 'react'
import ReactDOM  from "react-dom"
//引入Css
import  './css/index.less'
// const isLoading = false
// const loadData = ()=>{
//   if(isLoading){
//     return <div>loading...</div>
//   }
//   return <div>数据加载完成,此处显示加载后的数据</div>
// }
// const title =(<h1>{loadData()}</h1>)

// ReactDOM.render(title,document.getElementById('root'))
//map的数组方法和V-for一样
// const songs = [{id:1,name:'阳衡'},{id:2,name:'袁爱一'},{id:3,name:'罗斐'}]
// const list = (<ul>{songs.map(item=><li style={{color:'red'}} key={item.id}>{item.name}</li>)}</ul>)
// // 渲染 react 元素
// ReactDOM.render(list, document.getElementById('root'))
/*
  行内样式，外联样式
*/ 
//style 行内样式
// const list = (<h1 style={{color :'red'}}> Jsx处理样式 </h1>)
//className 外联样式
// const list2 = (<h1 className="title"> Jsx处理样式 </h1>)
// ReactDOM.render(list2, document.getElementById('root'))

//使用组件
  // 1.函数组件
  // function Hello(){
  //   return (<div>函数组件</div>)
  // }
  // const Hello = ()=><div>函数组件222</div>
  // 2.类组件
  /**
   * 创建类组件的规则
   * 1.创建的类名必须是大写字母开头
   * 2.自定义的类组件要继承React.Component父类，从而可以使用父类中提供的方法或属性
   * 3.创建的类组件必须提供render()方法
   * 4.创建的类组件中的render()方法里必须要有return（返回值），表示该组件的结构
   */
  // class Hello  extends React.Component{
  //   render(){
  //     return  <div>类组件</div>
  //   }
  // }
 /*
  组件分离
 */
  import Hello from './Hello/Hello'
  import FromIndex from "./from/index"
  import FromRef from "./from/fromRef"
  let hourArr = [...new Array(12).keys()]
      let grad = hourArr.map((item) => {
        return <div key={item} className="grad" style={{transform: `rotateZ(${item*30}deg)`}}></div>
      })
  const title = (
  <div>
    <div>123</div>
    <div className="rotate">
      <div className="rotate-merge">
        <div>
          <div className="rotate-merge-asthenia"></div>
          <div className="rotate-merge-Halfturn"></div>
          <div className="rotate-merge-empty"></div>
        </div>
        <div className="cloth">
          <div className="rotate-merge-Pointer"></div>
          <div className="rotate-merge-circle"></div>
        </div>
      </div>
      <div>
        <p>1</p>
        <p>2</p>
      </div>
      <div className="clock-wrapper">
        <div className="pointer "></div>
        {grad}
        <div className="pointer_minute"></div>
        <div className="garden"></div>
        <div className="second"></div>
      </div>
    </div>
    <Hello />
    <FromIndex/>
    <FromRef/>
  </div>
  )
  //渲染组件
  ReactDOM.render(title, document.getElementById('root'))
