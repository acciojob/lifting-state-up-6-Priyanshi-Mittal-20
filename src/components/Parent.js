import React, { useState } from "react";
import Lift6 from "./Lift6";

const Parent = () => {
  const [todos, setTodos] = useState([
    { text: "Learn React", completed: false },
    { text: "Build a React app", completed: false },
    { text: "Deploy the React app", completed: false }
  ]);

  function handleComplete(todoText) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.text === todoText
          ? { ...todo, completed: true }
          : todo
      )
    );
  }

  return (
    <div>
      <h1>Parent Component</h1>
      <Lift6 todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default Parent;