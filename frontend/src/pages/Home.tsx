import React from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import '../styles/App.css';

const Home: React.FC = () => {
    return (
        <div className="app-container">
            <h1>Todo Application</h1>
            <AddTodo />
            <TodoList />
        </div>
    );
};

export default Home;
