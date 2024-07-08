# Todo Application

This is a simple Todo application built with a Spring Boot backend and a React frontend. The application is containerized using Docker Compose.

## Requirements

- Docker
- Docker Compose

## Setup

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd todo-app
    ```

2. Build and start the application:
    ```bash
    docker-compose up --build
    ```

3. Access the application:
    - Backend: `http://localhost:8080`
    - Frontend: `http://localhost:3000`

## Functionalities

- Add a new todo item.
- Edit an existing todo item.
- Delete a todo item.
- Mark a todo item as complete/incomplete.
- View a list of all todo items.
- Search for todo items.

## Approach and Challenges

- The backend is built using Spring Boot with Hibernate for ORM and MySQL as the database.
- The frontend is built using React.js with TypeScript for type safety.
- Docker Compose is used to manage multi-container applications.
- Google Auth integration is set up but may require additional configuration in the Google Developer Console.

## Conclusion

This application demonstrates basic full-stack development skills, including backend development with Spring Boot, frontend development with React, and containerization with Docker Compose.
