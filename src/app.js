import { useState } from "react"
import React   from 'react'
import TodoForm   from './todoForm'
import Todo  from './todo'
import './todoForm.css'
function App() {
const [todos,setTodo]= useState([])

const removeTask =(id)=>{
setTodo([...todos.filter((todo)=>todo.id !== id)])
}
const hadleTogle = ()=>{
    
}
const addTask = (inputValue)=>{
if(inputValue){
   const newItem ={
       id:Date.now(),
       task:inputValue,
       complete:false,
       ind:1
       
   }
   setTodo([...todos,newItem])
}
}
    return (
    <div>
   <h4> todo list{todos.length}</h4>
        <TodoForm
        addTask={addTask}
        />
        {todos.map((todo, index)=>{
            return(
                <Todo
                removeTask={removeTask}
                hadleTogle={hadleTogle}
                key={todo.id}
                todo={todo}
                index={index}
                />
            )

        })}
    </div>
       
    )
}

export default App