import React  from "react";
class From extends React.Component{
 state = {
   txt:'',
   content:'',
   city:'sh',
   isChecked:false
 }
  handleChange = e =>{
   const target = e.target
   const value = target.type === 'checkbox' ? target.checked : target.value
   const name = target.name
   console.log(name,'name',value,'value')
    this.setState({
      [name]:value
    })
  }
 render(){
   return(
     <div>
          {/* 文本框 */}
        <input type="text" name="txt" value={this.state.txt} onChange={this.handleChange}/>
        <br/>
          {/* 富文本 */}
        <textarea name="content" value={this.state.content} onChange={this.handleChange}></textarea>
        <br/>
          {/* 下拉框 */}
        <select name="city" value={this.state.city} onChange={this.handleChange}>
          <option value="sh">上海</option>
          <option value="bj">北京</option>
          <option value="gz">广州</option>
        </select>
        <br/>
          {/* 复选框 */}
        <input name="isChecked" type="checkbox" checked={this.state.isChecked} onChange={this.handleChange} />
     </div>
   )
 }
}
export  default From