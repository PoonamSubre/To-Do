import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateTodo, getTodos } from '../services/api';
import { Todo } from '../types/Todo';
import '../styles/Todo.css';

const EditTodo: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [todo, setTodo] = useState<Partial<Todo>>({});

    useEffect(() => {
        if (!id) return;

        const fetchTodo = async () => {
            const todos = await getTodos();
            const todoToEdit = todos.find((t) => t.id === parseInt(id));
            if (todoToEdit) {
                setTodo(todoToEdit);
            }
        };
        fetchTodo();
    }, [id]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!id) return;

        await updateTodo(parseInt(id), todo);
        navigate('/');
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={todo.title || ''}
                onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            />
            <textarea
                placeholder="Description"
                value={todo.description || ''}
                onChange={(e) => setTodo({ ...todo, description: e.target.value })}
            ></textarea>
            <button type="submit">Edit Todo</button>
        </form>
    );
};

export default EditTodo;
