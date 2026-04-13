import React from "react";

const Lift6 = ({ todos, handleComplete }) => {
  return (
    <div>
    <h2>Child Component</h2>
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo.text}

          {/* 👇 THIS LINE IS THE KEY */}
          {!todo.completed && (
            <button
              data-testid="complete-btn"
              onClick={() => handleComplete(todo.text)}
            >
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