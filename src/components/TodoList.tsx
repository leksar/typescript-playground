import React from 'react';
import ToDo from '../todo.model';

interface TodoListProps {
    items: ToDo[];
    onDelete: (idToDelete: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({items, onDelete}) => {
    return (
        <ul>
            {items.map(todo => 
            <li key={todo.id}>
                <span>{todo.text}</span>
                <button onClick={onDelete.bind(null, todo.id)}>Delete</button>
                </li>)}
        </ul>
    )
}

export default TodoList;