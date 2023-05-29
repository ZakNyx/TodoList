export const Task = (props) => {
	return(
		<div
			className="task"
			style={{ backgroundColor: props.completed ? "rgba(0, 128, 0, 0.5)" : "white",
			boxShadow: props.completed ? "0 0 4px rgba(0, 128, 0, 0.5)" : "none",
			transition: "background-color 0.3s ease, box-shadow 0.3s ease"}}	
		>
			<h1>{props.taskName}</h1>
			<button className="complete" onClick={() => props.completeTask(props.id)}>{props.completed ? "Undo" : "Complete"}</button>
			<button className="delete" onClick={()  => props.deleteTask(props.id)} >Delete</button>
		</div>
	);
};