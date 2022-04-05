import React, { FC, useState, useEffect, useRef } from 'react';
import { ITodo } from '../types/data';
import TodoList from './TodoList';

const App: FC = () => {
	const [value, setValue] = useState('');
	const [todos, setTodos] = useState<ITodo[]>([]);

	const inputRef = useRef<HTMLInputElement>(null);

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
		setValue(e.target.value);
	};

	const addTodo = () => {
		if (value) {
			setTodos([
				...todos,
				{
					id: Date.now(),
					title: value,
					complete: false,
				},
			]);
		}
		setValue('');
	};

	const removeTodo =(id:number): void {}

	const toggleTodo = (id:number): void {}

 	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

	const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = e => {
		if (e.key === 'Enter') {
			addTodo();
		}
	};
	return (
		<div>
			<div>
				<input
					value={value}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					ref={inputRef}
				/>
				<button onClick={addTodo}>Add todo</button>
			</div>
			<TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
		</div>
	);
};

export default App;
