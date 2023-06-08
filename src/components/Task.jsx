import React, { useState } from "react";

const Task = ({ item, setAllTask, allTask, removeTask }) => {
  const { text, id } = item;
  // console.log(item);

  const handleCheck = () => {
    setAllTask(
      allTask.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  return (
    <div className="task-list">
      <nav>
        <ul>
          <li>
            {text}
            <div className="button-box">
              <button className="check" onClick={handleCheck}>
                <i className="bx bx-check"></i>
              </button>
              <button className="trash" onClick={() => removeTask(id)}>
                <i className="bx bx-trash"></i>
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Task;
