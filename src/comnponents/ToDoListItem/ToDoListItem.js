import "./ToDoListItem.css";

const ToDoListItem = ({ label, important = false, id, onDelete, onToggleImportant, onDone, done }) => {
	const listItemClass = `ToDoListItem${important ? 'Important' : ''} ${done ? 'doneTask' : ''}`;
	// добавление класса когда задача важна/закончена

	return (
		<div className="taskAndButtons">
			<span className={listItemClass} key={id}>{label}</span>
			<div className="buttons">
				<button key={label + 'excl'} onClick={() => onToggleImportant(id)} className="excl bi bi-exclamation"></button>
				<button key={label + 'trash'} onClick={() => onDelete(id)} className="trash bi bi-trash-fill"></button>
				<button key={label + 'done'} onClick={() => onDone(id)} className="done bi bi-check-lg"></button>
			</div>
		</div>
	);
}// кнопки с иконками которые отвечают за возможность отметить задачу как важную, удалить ее и завершить

export default ToDoListItem;

