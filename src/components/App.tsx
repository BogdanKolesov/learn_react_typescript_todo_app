import React, { FC, useState, useEffect, useRef } from 'react';
import { ITodo } from '../types/data';

const App: FC = () => {
	const [value, setValue] = useState('');
	const [todos, setTodos] = useState<ITodo[]>([]);

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

	return (
		<div>
			<div>
				<input value={value} onChange={e => setValue(e.target.value)} />
				<button onClick={addTodo}>Add todo</button>
			</div>
		</div>
	);
};

export default App;
