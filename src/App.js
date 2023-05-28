import { useState } from 'react';
import {Task} from './Task'
import './App.css';

function App() {
	const [todoList, setToDoList] = useState([]);
	const [newTask, setNewTask] = useState("");

	const handleChange = (event) => {
		setNewTask(event.target.value);
	};

	const addTask = () => {
		const task = {
			id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
			taskName: newTask,
		}
		setToDoList([...todoList, task]);
	};

	const deleteTask = (id) => {
		setToDoList(todoList.filter((task) => task.id !== id));
	}

	return (
		<div className="App">
			<div className='addTask'>
				<input placeholder='Cleaning' onChange={handleChange}/>
				<button onClick={addTask}>Add Task</button>
			</div>
			<div className='list'>
				{todoList.map((task) =>{
					return (<Task
							taskName={task.taskName}
							id={task.id}
							deleteTask={deleteTask}/>);
				})}
			</div>
		</div>
	);
}

export default App;
