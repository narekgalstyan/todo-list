import './todoForm.css'
import { useState } from "react"
function Todo({todo,removeTask,hadleTogle,index}){
  const [ind,setInd]= useState([])

    return(
      
  <div key={todo.id} className='div2'>

     
<div className='div5'>{index+1}</div>
  


  <div className={todo.complete ? "taskLine":'div3'}>{todo.task}</div>

  <div className='div4' onClick={()=>removeTask(todo.id)}>x</div>  
   
  </div>
        
    )
}

export default Todo