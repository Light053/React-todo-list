import React, { useState, useMemo } from "react";
import './FilterTask.css'

const FilterImportantTask = ({ todos, setToDoList, setCheckPush }) => {
	const updatedList = [...todos]

	const importantTask = useMemo(() => updatedList.filter(task => task.important), [updatedList]);

	const handleFilterImportantClick = () => {
		setToDoList(importantTask);
		setCheckPush(true);

	}; // фильтрация задач по важным. В стейт списка задач передаю отфильтрованный массив и отмечаю что была нажата фильтрация

	return (
		<div className="buttonsDiv">
			<button className="filterButtons" onClick={handleFilterImportantClick}>Важные</button>
		</div>
	); // возвраащем кнопку что вызывает функцию изменения стейта и отображения задач
};

const AllTasks = ({ taskList, setTodoList, setCheckPush }) => {

	const handleFilterAllClick = () => {
		setTodoList(taskList);
		setCheckPush(false);
	};

	return (
		<div className="buttonsDiv">
			<button className="filterButtons" onClick={handleFilterAllClick}>Все</button>
		</div>
	); /* 
	тоже самое что и выше но уже все задачи. Нюанс в том, что тут мы берем
	 массив taskList который равен todos ДО ТОГО как произошла фильтрация */
}

const DoneTasks = ({ todos, setToDoList, setCheckPush }) => {
	const doneTasks = useMemo(() => todos.filter(task => task.done === true), [todos]);

	const handleFilterDoneClick = () => {
		setToDoList(doneTasks);
		setCheckPush(true);
	}
	return (
		<div className="buttonsDiv">
			<button className="filterButtons" onClick={handleFilterDoneClick}>Завершенные</button>
		</div>
	); /* тоже самое что и выше но лишь удаленные. 
	В setCheckPush передаем тру для того чтоб в taskList не копировались лишь завершенные задачи
	и была возможность отобразить все задачи
	*/

}

export {
	FilterImportantTask,
	AllTasks,
	DoneTasks
}
