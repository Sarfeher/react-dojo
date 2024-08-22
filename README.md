# React Blog Project

Welcome to the React Blog project! This application is a simple yet powerful blogging platform built with React and JavaScript, designed to allow users to create, edit, and manage blog posts easily. It also leverages a JSON server to handle data storage.

## Features

- **Create, Read, Update, Delete (CRUD)** operations for blog posts.
- Responsive design for an optimal user experience on both desktop and mobile devices.
- Simple and intuitive user interface.
- JSON Server as a mock backend to manage blog data.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/en/) (v14 or higher recommended)
- npm (Node package manager) or yarn
- [npx](https://www.npmjs.com/package/npx) (comes with npm 5.2+ and higher)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Sarfeher/react-dojo
cd react-blog
```

### 2. Install Dependencies

After cloning the repository, install the project dependencies:

```bash
npm install
```
or if you use yarn:

```bash
yarn install
```

### 3. Run the Application

To start the application in development mode, run:

```bash
npm start
```
or with yarn:
```bash
yarn start
```

This will start the React development server. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Start the JSON Server

In a separate terminal, start the JSON server to simulate a backend:

```bash
npx json-server --watch data/db.json --port 8000
```

This will launch a mock REST API server at [http://localhost:8000](http://localhost:8000).

### 5. Open the Application

The application should now be running, and you can begin creating and managing blog posts. The page will automatically reload if you make any changes to the code.


## Acknowledgements

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
