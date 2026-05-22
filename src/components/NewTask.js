import { useState } from "react";

function NewTask({ dispatch }) {
    const [taskName, setTaskName] = useState("");
    function addTask(event) {
        event.preventDefault();
        if (taskName === "") return;
        dispatch({
            type: "ADD",
            Data: {
                text: taskName,
                date: new Date().toLocaleString()
            }
        });
        setTaskName("");
    }
    return (
        <form onSubmit={addTask}>
            <input
                type="text"
                value={taskName}
                onChange={(event) => setTaskName(event.target.value)}
                placeholder="Enter task"/>
            <button>Add Task</button>
        </form>
    );
}

export default NewTask;