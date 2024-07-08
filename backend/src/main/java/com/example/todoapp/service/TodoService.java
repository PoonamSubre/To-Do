package com.example.todoapp.service;

import com.example.todoapp.model.Todo;

import java.util.List;

public interface TodoService {
    List<Todo> getAllTodos();

    Todo getTodoById(Long id);

    Todo createOrUpdateTodo(Todo todo);

    void deleteTodoById(Long id);
}
