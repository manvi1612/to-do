function ShowTasks(props) {
    return (
        <div>
            {props.tasks.map((item) => (
                <div key={item.id}>
                    <h3>{item.text}</h3>
                    <p>{item.date}</p>
                </div>
            ))}
        </div>
    );
}

export default ShowTasks;