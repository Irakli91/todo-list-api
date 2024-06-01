# Todo List API

## Overview

This Todo List project is a RESTful API built with NestJS, TypeORM, and PostgreSQL. It provides endpoints to manage tasks, including creating, updating, retrieving, and deleting tasks. User authentication and authorization are implemented to ensure secure access.

The application features two roles: User and Admin. The permissions for each role are as follows:

User:

- Create Tasks: Users can create new tasks.
- View Tasks: Users can only view their own tasks.
- Update Tasks: Users can update their own tasks.
- Delete Tasks: Users can delete their own tasks.

Admin:

- View Tasks: Admins can view tasks created by all users.
- Update Tasks: Admins can update tasks created by all users.
- Delete Tasks: Admins can delete tasks created by all users.
- Restricted: Admins cannot create new tasks.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (v18 or higher)
- npm (v9 or higher)
- PostgreSQL (v14 or higher)

## Getting Started

### Installation

1. **Clone the repository**:
   git clone https://github.com/Irakli91/todo-list-api.git
2. **Navigate to the project directory**:
   cd todo-list-api
3. **Install dependencies**:
   npm install

### Configure the environment variables

1. **Create .env file**:
   Copy the .env.example file to .env
2. **Adding needed configuration**:
   Edit the .env file to match your configuration

## Running the Application

npm run start
The server will be running on http://localhost:3000.

## API Documentation

You can access the API documentation with Swagger at [http://localhost:3000/api](http://localhost:3000/api).
