import React from "react";
class Ref extends React.Component{
  constructor(){
    super()
    this.txtRef = React.createRef()
  }
  getTxt=()=>{
    console.log(this.txtRef.current.value,'this.txtRef')
  }
  render(){
    return(
      <div>
        <input type="text" ref={this.txtRef}/>
        <button onClick={this.getTxt}>获取文本框的值</button>
      </div>
    )
  }
}
export default  Ref