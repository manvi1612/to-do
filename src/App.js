import { useReducer, useEffect } from "react";
import NewTask from "./components/NewTask";


function reducer(list, action) {
  switch(action.type) {
    case "ADD":
      return [...list, action.Data];
        default:
            return list;
  }
}

const saved = JSON.parse(localStorage.getItem("tasks")) || [];

function App() {
    const [tasks, dispatch] = useReducer(reducer, saved);
     useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    return (
        <div className="container">
            <h1>To-Do App</h1>
            <NewTask dispatch={dispatch} />
            <ShowTasks tasks={tasks} />
        </div>
    );
}

export default App;