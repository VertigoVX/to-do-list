import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import './styles.css';


const App = () => {
	const [todos, setTodos] = useState([]);
	
	const addTodo = (text) => {
		const newTodos = [...todos, { text, completed: false }];
		setTodos(newTodos);
		};
	
	const toggleTodo = (index) => {
		const newTodos = [...todos];
		newTodos[index].completed = !newTodos[index].completed;
		setTodos(newTodos);
		};
	
	const removeTodo = (index) => {
		const newTodos = todos.filter((_, i) => i !== index);
		setTodos(newTodos);
		};
	
	return (
		<div className="App">
			<h1>Todo List</h1>
			<AddTodo addTodo={addTodo} />
			<TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
			</div>
			);
	};

export default App;
