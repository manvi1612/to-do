import { useReducer, useEffect } from "react";
import NewTask from "./components/NewTask";
import ShowTasks from "./components/ShowTasks";


function reducer(list, action) {
  switch(action.type) {
    case "ADD":
      return [...list, action.Data];
    case "COMPLETE":
      return list.map(function(item) {
        if (item.id === action.id) {
            item.text = !item.completed;
        }
        return item;
    });
    case "EDIT":
      return list.map(function(item) {
        if (item.id === action.id) {
            item.text = action.newText;
            item.date = new Date().toLocaleString();
        }
        return item;
  });
    
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