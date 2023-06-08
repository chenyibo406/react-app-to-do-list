import { useState, useEffect } from "react";
import Task from "./components/Task";
import Panel from "./components/Panel";

function App() {
  const [allTask, setAllTask] = useState([]);
  const [filterTitle, setFilterTitle] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState([]);

  // Filter Function
  const filterHandler = () => {
    switch (filterTitle) {
      case "finished":
        setFilteredTasks(allTask.filter((item) => item.completed === true));
        break;
      case "unfinished":
        setFilteredTasks(allTask.filter((item) => item.completed === false));
        break;
      default:
        setFilteredTasks(allTask);
        break;
    }
  };

  const removeTask = (delId) => {
    setAllTask(allTask.filter((item) => item.id !== delId));
  };

  useEffect(() => {
    filterHandler();
  }, [allTask, filterTitle]);

  return (
    <>
      <div className="main">
        <h1>To Do List</h1>
        <Panel
          setFilterTitle={setFilterTitle}
          setAllTask={setAllTask}
          allTask={allTask}
        />

        {filteredTasks.map((item) => (
          <Task
            item={item}
            key={item.id}
            setAllTask={setAllTask}
            allTask={allTask}
            removeTask={removeTask}
          />
        ))}
      </div>
    </>
  );
}

export default App;
