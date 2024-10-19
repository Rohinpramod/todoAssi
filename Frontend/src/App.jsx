import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ToDoList from "./Pages/Todo";
import CreateToDo from "./Pages/CreateToDo";
import EditToDo from "./Pages/EditToDo";

function App() {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <ToDoList /> : <Navigate to="/login" />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/todos"
          element={isAuthenticated ? <ToDoList /> : <Navigate to="/login" />}
        />
        <Route
          path="/create"
          element={isAuthenticated ? <CreateToDo /> : <Navigate to="/login" />}
        />
        <Route
          path="/edit/:id"
          element={isAuthenticated ? <EditToDo /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;