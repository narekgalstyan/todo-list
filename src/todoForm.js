import React from "react";
import { useState } from "react"
import './todoForm.css'
 function TodoForm({addTask}){
    const [inputValue,setInputValue] = useState('')

const funcChang = (e)=>{
setInputValue(e.currentTarget.value)

}
const handlSubmit =(e)=>{
e.preventDefault();
addTask(inputValue)
setInputValue('')
}

const funcKeyPress = (e)=>{
if(e.key ==='enter'){
  handlSubmit(e)
  console.log(e.key)
}
}
    return(
  <div className='div1'>
      <form onSubmit={handlSubmit} >
    <input
    className="input"
    onChange={funcChang} 
    value={inputValue}
    placeholder='write'
    />
   <button>click</button>

    
   </form>
  </div>
        
  
    )
  
}
export default TodoForm