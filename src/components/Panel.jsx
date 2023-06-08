import React, { useState } from "react";

const Panel = ({ setAllTask, allTask, setFilterTitle }) => {
  const [task, setTask] = useState("");

  const handleFilter = (e) => setFilterTitle(e.target.value);

  const addTask = (e) => {
    setAllTask([
      ...allTask,
      { text: task, completed: false, id: Math.random() },
    ]);
    e.preventDefault();
  };

  const handleSetTask = (e) => {
    // console.log(e.target.value);
    setTask(e.target.value);
  };

  console.log(task);

  return (
    <form>
      <div className="panel">
        <div className="add-task">
          <input type="text" value={task} onChange={handleSetTask} />
          <button className="btn" type="submit" onClick={addTask}>
            <i className="bx bxs-plus-circle"></i>
          </button>
        </div>

        <div className="filter">
          <select onChange={handleFilter} id="task-select">
            <option value="all">Choose an option</option>
            <option value="finished">finish</option>
            <option value="unfinished">unfinish</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default Panel;
