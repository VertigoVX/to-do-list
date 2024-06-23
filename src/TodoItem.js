import React from 'react';

const TodoItem = ({ todo, index, toggleTodo, removeTodo }) => {
	return (
		<li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
			{todo.text}
		<button onClick={() => toggleTodo(index)}>
			{todo.completed ? 'Undo' : 'Complete'}
		</button>
			<button onClick={() => removeTodo(index)}>Delete</button>
			</li>
			);
	};

export default TodoItem;
