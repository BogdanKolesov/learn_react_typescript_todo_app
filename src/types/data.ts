export interface ITodo {
	id: number;
	title: string;
	complete: boolean;
}

export interface ITodoItem extends ITodo {}

export interface ITodoListProps {
	items: ITodo[];
}
