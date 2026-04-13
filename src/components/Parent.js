import React from "react";
import { useState } from "react";
import Lift6 from "./Lift6";


const Parent=()=>{
  const [todos,setTodos]=useState(["Learn React", "Build a React app", "Deploy the React app"])
  function handleComplete(todo)
  {
    setTodos(todos.filter(value=>value!==todo))
  }
  return(
    <div>
      <h1>Parent Component</h1>
      <Lift6 todos={todos} setTodos={setTodos} handleComplete={handleComplete}/>
    </div>
  )
}





export default Parent