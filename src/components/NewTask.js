import { useState } from "react";

function NewTask({ dispatch }) {
    const [taskName, setTaskName] = useState("");

    function addTask(e) {
        event.preventDefault();
        if (task === "") return;
        dispatch({
            type: "ADD",
            Data: {
                id: Date.now(),
                text: task,
                completed: false,
                date: new Date().toLocaleString()
            }
        });
        setText("");
    }
    return (
        <form onSubmit={addTask}>
            <input
                type="text"
                value={task}
                onChange={(event) => setText(event.target.value)}
                placeholder="Enter task"/>
            <button>Add Task</button>
        </form>
    );
}

export default NewTask;