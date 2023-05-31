export const Task = (props) => {
	return (
		<div
			className="task"
			style={{
				backgroundColor: props.completed ? "#00cc00C3" : "white",
				boxShadow: props.completed ? "0 0 4px rgba(0, 128, 0, 0.5)" : "none",
				transition: "background-color 0.3s ease, box-shadow 0.3s ease"
			}}
		>
			<h1 className="taskText">{props.taskName}</h1>
			{props.completed ? (
				<button
					className="button undo"
					onClick={() => props.completeTask(props.id)}
				>
					Undo
				</button>
			) : (
				<button
					className="button complete"
					onClick={() => props.completeTask(props.id)}
				>
					Complete
				</button>
			)}
			<button
				className="button delete"
				onClick={() => props.deleteTask(props.id)}
			>
				Delete
			</button>
		</div>
	);
};