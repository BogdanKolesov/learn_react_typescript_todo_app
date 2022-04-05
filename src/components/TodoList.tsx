import React, { FC } from 'react';
import { isTemplateExpression } from 'typescript';
import { ITodoListProps } from '../types/data';
import TodoItem from './TodoItem';

const TodoList: FC<ITodoListProps> = props => {
	const { items, toggleTodo, removeTodo } = props;
	return (
		<>
			{props.items.map(todo => (
				<TodoItem
					key={todo.id}
					toggleTodo={toggleTodo}
					removeTodo={removeTodo}
					{...todo}
				/>
			))}
		</>
	);
};

export default TodoList;
