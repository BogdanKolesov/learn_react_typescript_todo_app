import React, { FC } from 'react';
import { ITodoItem } from '../types/data';

const TodoItem: FC<ITodoItem> = props => {
	const { id, title, complete } = props;
	return (
		<div>
			<input type='checkbox' checked={complete} />
			<span>{title}</span>
			<button>Удалить</button>
		</div>
	);
};

export default TodoItem;
