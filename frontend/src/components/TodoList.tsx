import React, { useState, useEffect } from 'react';
import { getTodos } from '../services/api';
import { Todo } from '../types/Todo';
import TodoItem from './TodoItem';
import '../styles/Todo.css';

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const fetchTodos = async () => {
        const todos = await getTodos();
        setTodos(todos);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onTodoUpdate={fetchTodos} />
            ))}
        </div>
    );
};

export default TodoList;
