import axios from 'axios';
import { Todo } from '../types/Todo';

const api = axios.create({
    baseURL: 'http://localhost:8080/api/todos',
});

export const getTodos = async (): Promise<Todo[]> => {
    const response = await api.get('/');
    return response.data;
};

export const addTodo = async (todo: Omit<Todo, 'id'>): Promise<Todo> => {
    const response = await api.post('/', todo);
    return response.data;
};

export const updateTodo = async (id: number, todo: Partial<Todo>): Promise<Todo> => {
    const response = await api.put(`/${id}`, todo);
    return response.data;
};

export const deleteTodo = async (id: number): Promise<void> => {
    await api.delete(`/${id}`);
};
