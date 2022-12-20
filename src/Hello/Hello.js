import React from "react";
// import '../Hello/index.less'
//创建组件
// const title = {
//     name:'按钮'
// }
class Hello extends React.Component{
  // handleClick(e){
  //   //阻止浏览器默认行为
  //   e.preventDefault()
  //   console.log("a标签的触发",e)
  // }
  constructor(){
    super()
    this.state = {
      count :0
    }
    this.onAdd = this.onAdd.bind(this)
  }
  onAdd = () =>{
    this.setState({count:this.state.count +1})
  }
  onCut = () =>{
    if(this.state.count!==0){
      this.setState({count:this.state.count -1})
    }
    
  }
  render(){
    return(
      <div className="Underlay">
      <div>{this.state.count}</div>
    {/* <a href="http://www.baidu.com/"  onClick={this.handleClick}>{title.name}</a> */}
    <button onClick={this.onAdd}>+1</button>
    <button onClick={this.onCut}>-1</button>
    </div>
    )
  }
}
//导出组件
export default Hello