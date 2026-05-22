import { useReducer } from "react";
import NewTask from "./components/NewTask";

function reducer(list, action) {
  switch(action.type) {
    case "ADD":
      return [...list, action.Data];
        default:
            return list;
  }
}

function App() {
    const [tasks, dispatch] = useReducer(reducer, []);
    return (
        <div>
            <h1>To-Do App</h1>
            <NewTask dispatch={dispatch} />
            {tasks.map(item => (
                <div key={item.id}>
                    <h3>{item.text}</h3>
                    <p>{item.date}</p>
                </div>
            ))}
        </div>
    );
}

export default App;