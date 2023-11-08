import React, { useState, useEffect } from "react";

import AppHeader from "../AppHeader/AppHeader";
import ToDoList from "../ToDoList/ToDoList";
import AddTask from '../AddTask/AddTask'
import { FilterImportantTask, AllTasks, DoneTasks } from "../FilterTask/FilterTask";

import "./App.css"

const App = () => {
  const [todoList, setTodoList] = useState([
    { label: 'Поспать', important: false, id: 1, done: false },
    { label: 'Поучиться', important: false, id: 2, done: false },
    { label: 'Поиграть', important: false, id: 3, done: false },
    { label: 'Захватить Польшу', important: false, id: 4, done: false }
  ]);

  const [checkPush, setCheckPush] = useState(false);
  const [taskList, setTaskList] = useState([]);
  /* Создаем стейт что проверяет нажата ли кнопка фильтрации
  Так же стейт taskList что содержит все задачи из todoList до применения фильтров  
  */
  useEffect(() => {
    if (checkPush === false) {
      setTaskList(todoList.map(task => ({ ...task })))
    }
  }, [todoList]); // меняет taskList в зависимости от того был ли нажат фильтр или же нет

  return (
    <div className="app">
      <AppHeader todos={todoList} />
      <FilterImportantTask todos={todoList} setToDoList={setTodoList} setCheckPush={setCheckPush} />
      <AllTasks taskList={taskList} setTodoList={setTodoList} setCheckPush={setCheckPush} />
      <DoneTasks todos={todoList} setToDoList={setTodoList} setCheckPush={setCheckPush} />
      <ToDoList todos={todoList} setTodoList={setTodoList} />
      <AddTask todos={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
