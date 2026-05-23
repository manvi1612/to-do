import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheck, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

function ShowTasks(props) {
    return (
        <div>
            {props.tasks.map((item) => (
                <div key={item.id}>
                    <h3>{item.text}</h3>
                    <p>{item.date}</p>
                  <FontAwesomeIcon
                        icon={faCheck}
                        onClick={() =>
                            props.dispatch({ type: "COMPLETE", id: item.id })
                        }/>
                    <FontAwesomeIcon
                        icon={faPen}
                        onClick={() => {
                            let newText = prompt("Edit your task:");
                            if (newText !== "") {
                                props.dispatch({ type: "EDIT", id: item.id });
                            }
                        }}/>
                    <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() =>
                            props.dispatch({ type: "DELETE", id: item.id })
                        }/>
                </div>
            ))}
        </div>
    );
}

export default ShowTasks;