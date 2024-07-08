import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EditTodo from './components/EditTodo';
import './styles/App.css';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/edit/:id" element={<EditTodo />} />
            </Routes>
        </Router>
    );
};

export default App;
