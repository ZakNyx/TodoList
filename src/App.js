import { useState } from 'react';
import {Task} from './Task'
import './App.css';

function App() {
	const [todoList, setToDoList] = useState([]);
	const [newTask, setNewTask] = useState("");

	const handleChange = (event) => {
		setNewTask(event.target.value);
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter")
			addTask();
	} 

	const addTask = () => {
		if (newTask === '')
		{
			alert ("This field cannot be empty!");
			return ;
		}
		const task = {
			id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
			taskName: newTask,
			completed: false,
		}
		setToDoList([...todoList, task]);
	};

	const deleteTask = (id) => {
		setToDoList(todoList.filter((task) => task.id !== id));
	}

	const completeTask = (id) => {
		setToDoList(
			todoList.map((task) => {
				if (task.id === id)
					return {...task, completed: !task.completed};
				else
					return task;
				})
		)
	}

	return (
		<div className="App">
			<div className='addTask'>
				<input
					placeholder='Cleaning' 
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					value={newTask}
					required/>
				<button className='button' onClick={addTask}>Add Task</button>
			</div>
			<div className='list'>
				{todoList.map((task) =>{
					return (<Task
							taskName={task.taskName}
							id={task.id}
							deleteTask={deleteTask}
							completeTask={completeTask}
							completed={task.completed}/>);
				})}
			</div>
		</div>
	);
}

export default App;
