import React, { FC } from 'react';
import { isTemplateExpression } from 'typescript';
import { ITodoListProps } from '../types/data';
import TodoItem from './TodoItem';

const TodoList: FC<ITodoListProps> = props => {
	return (
		<>
			{props.items.map(todo => (
				<TodoItem key={todo.id} {...todo} />
			))}
		</>
	);
};

export default TodoList;
