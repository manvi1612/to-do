import { useState } from "react";

function NewTask(props) {
    const [taskName, setTaskName] = useState("");
    function addTask(event) {
        event.preventDefault();
        if (taskName === "") return;
        if (props.editId) {
                props.dispatch({
                type: "EDIT",
                id: props.editId,
                newText: taskName
            });
            props.setEditId(null);
        }
        else {
            props.dispatch({
            type: "ADD",
            Data: {
                id: Date.now(),
                text: taskName,
                completed: false,
                date: new Date().toLocaleString()
            }
        });
    }
        setTaskName("");
    }
    return (
        <form onSubmit={addTask}>
            <input
                type="text"
                value={taskName}
                onChange={(event) => setTaskName(event.target.value)}
                placeholder="Enter your task"/>
                <button>{props.editId ? "Update" : "Add"}</button>
        </form>
    );
}

export default NewTask;