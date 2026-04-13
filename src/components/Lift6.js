import React from "react";

const Lift6 = ({ todos, handleComplete }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span
              // style={{
              //   textDecoration: todo.completed ? "line-through" : "none"
              // }}
            >
              {todo.text}
            </span>

            {!todo.completed && (
              <button onClick={() => handleComplete(todo.text)}>
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lift6;