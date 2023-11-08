import { useState } from "react"
import './AddTask.css'

const AddTask = ({ todos, setTodoList }) => {
	// стейт новой задачи
	const [newTask, setNewTask] = useState("");

	// Следит за изменениями поля ввода
	const handleInputChange = (e) => {
		setNewTask(e.target.value);
	}

	// Функция для добавления новой задачи
	const onAddTask = () => {
		if (newTask.trim() !== "") { // Проверка на пустое значение
			// Создание новой задачи и обновление списка задач
			const updatedList = [...todos, {
				label: newTask,
				important: false,
				id: todos.length + 1
			}];
			setTodoList(updatedList);
			setNewTask(""); // Сброс значения поля ввода
		}
	}

	return (
		<div>
			<input className="inputTask" type="text" id="addTask" onChange={handleInputChange} placeholder="Введите новую задачу" value={newTask} />
			<button type="button" className="addTaskButton" onClick={() => onAddTask()}>Добавить</button>
		</div> // поле ввода и сама кнопка. Вызывается функция handleInputChange что получает значение поля ввода
	)
}

export default AddTask
