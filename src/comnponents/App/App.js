import React, { useState, useEffect } from "react";
import AppHeader from "../AppHeader/AppHeader";
import ToDoList from "../ToDoList/ToDoList";
import AddTask from '../AddTask/AddTask'
import { FilterImportantTask, AllTasks, DoneTasks } from "../FilterTask/FilterTask";
import "./App.css"

const App = () => {
  // Используем хук useState с функцией-инициализатором для получения данных из локального хранилища
  const [todoList, setTodoList] = useState(() => {

    // Попробуем получить данные из локального хранилища, если они там есть
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [
      { label: 'Поспать', important: false, id: Date.now() + 543534, done: false },
      { label: 'Поучиться', important: false, id: Date.now() + 12345, done: false },
      { label: 'Поиграть', important: false, id: Date.now() + 6678, done: false },
      { label: 'Почитать', important: false, id: Date.now() + 65444, done: false }
    ];
  });

  const [checkPush, setCheckPush] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    if (checkPush === false) {
      localStorage.setItem('tasks', JSON.stringify(todoList));
      setTaskList(todoList.map(task => ({ ...task })))
    }
  }, [todoList, checkPush]);

  // Возвращаем JSX
  return (
    <div className="app">
      {/* Выводим заголовок приложения */}
      <AppHeader todos={todoList} />

      {/* Компонент фильтрации по важности */}
      <FilterImportantTask todos={todoList} setToDoList={setTodoList} setCheckPush={setCheckPush} />

      {/* Компонент для отображения всех задач */}
      <AllTasks taskList={taskList} setTodoList={setTodoList} setCheckPush={setCheckPush} />

      {/*Компонент для отображения выполненных задач */}
      <DoneTasks todos={todoList} setToDoList={setTodoList} setCheckPush={setCheckPush} />

      {/* Компонент для отображения списка задач */}
      <ToDoList todos={todoList} setTodoList={setTodoList} />

      {/* Компонент для добавления новой задачи */}
      <AddTask todos={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
