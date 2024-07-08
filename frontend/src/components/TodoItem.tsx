import React from 'react';
import { Todo } from '../types/Todo';
import { deleteTodo, updateTodo } from '../services/api';
import '../styles/Todo.css';

interface TodoItemProps {
    todo: Todo;
    onTodoUpdate: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onTodoUpdate }) => {
    const handleDelete = async () => {
        await deleteTodo(todo.id);
        onTodoUpdate();
    };

    const handleToggleComplete = async () => {
        await updateTodo(todo.id, { completed: !todo.completed });
        onTodoUpdate();
    };

    return (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <button onClick={handleToggleComplete}>
                {todo.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
            </button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default TodoItem;
