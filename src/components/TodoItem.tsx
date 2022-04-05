import React, { FC } from 'react';
import { ITodoItem } from '../types/data';

const TodoItem: FC<ITodoItem> = props => {
	const { id, title, complete, removeTodo, toggleTodo } = props;
	return (
		<div>
			<input
				type='checkbox'
				onChange={() => toggleTodo(id)}
				checked={complete}
			/>
			<span>{title}</span>
			<button onClick={() => removeTodo(id)}>Удалить</button>
		</div>
	);
};

export default TodoItem;
