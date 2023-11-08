import ToDoListItem from "../ToDoListItem/ToDoListItem";
import "./ToDoList.css"
import React, { useState, useMemo } from "react";


const ToDoList = ({ todos, setTodoList }) => {

	const onToggleImportant = (id) => {
		const updatedTodos = todos.map(item => {
			if (item.id === id) {
				return { ...item, important: !item.important };
			}
			return item;
		});
		setTodoList(updatedTodos);
	}; // изменение важности задачи при помощи поиска ее по айди


	function onDelete(id) {
		const updatedList = [...todos];
		const index = updatedList.findIndex(item => item.id === id);
		if (index !== -1) {
			updatedList.splice(index, 1);
			setTodoList(updatedList);
		}
	} // тот же самый принцип что и у onToggleImportant но удаление задачи

	const onDone = (id) => {
		const updatedTodos = todos.map(item => {
			if (item.id === id) {
				return { ...item, done: true };
			}
			return item;
		});
		setTodoList(updatedTodos)
	}

	const elements = todos.map(item => {
		return (
			<li key={item.id} className="list-group-item">
				<ToDoListItem {...item}
					onDelete={onDelete}
					onToggleImportant={onToggleImportant}
					onDone={onDone}
				/>
			</li>
		)
	}) // для каждой задачи вызывается ToDoListItem в котором добавляются нужные классы и кнопки и т.д

	return (
		<ul className="list-group todo-list">
			{elements}
		</ul> // класс от бутстрапа
	)
}

export default ToDoList;
