import "./AppHeader.css"

const AppHeader = ({ todos }) => {
	return (
		<div className="header">
			<h1 className="app-header">Мои задачи</h1>
			<h2 className="countTasks">Осталось {todos.length} задач!</h2>
		</div> // отображение количества оставшихся задач путем вычисления длины массива с задачами
	)
};

export default AppHeader;