import { useReducer, useEffect, useState } from "react";
import NewTask from "./components/NewTask";
import ShowTasks from "./components/ShowTasks";


function reducer(list, action) {
  switch(action.type) {
    case "ADD":
      return [...list, action.Data];
    case "COMPLETE":
      return list.map(function(item) {
        if (item.id === action.id) {
           return {
        ...item,
        completed: !item.completed
      };
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

      case "DELETE":
        return list.filter(function(item) {
          if (item.id !== action.id) {
              return item;
          }
        });
        default:
            return list;
  }
}

const saved = JSON.parse(localStorage.getItem("tasks")) || [];


function App() {
    const [tasks, dispatch] = useReducer(reducer, []);
    const [editId, setEditId] = useState(null);
    
     useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    return (
        <div className="container">
            <h1>To-Do App</h1>
            <NewTask 
                  dispatch={dispatch} 
                  editId={editId}
                  setEditId={setEditId}/>
            <ShowTasks 
                  tasks={tasks} 
                  dispatch={dispatch}
                  setEditId={setEditId}/>
        </div>
    );
}

export default App;