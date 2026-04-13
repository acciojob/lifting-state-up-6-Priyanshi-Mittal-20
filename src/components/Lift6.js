import React from "react";
import { useState } from "react";


const Lift6=({todos, setTodos, handleComplete})=>{
  
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map(list=>{
          return(
            <>
          <li>{list}
          <button onClick={()=>{handleComplete(list)}}>Complete</button>
          </li>
          <br/>
          </>
          )
     } )}
     </ul>
    </div>
  )
}



export default Lift6