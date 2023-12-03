import { useRef, useState } from "react";
import { nanoid } from "nanoid";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  CssBaseline,
  Container,
  Button,
} from "@mui/material";

import { TodoContext } from "./data/todoContext";

import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [editing, setEditing] = useState(false);

  function addTodo(title) {
    console.assert(editing === "new", `${editing} should be new`);
    setTodos([
      ...todos,
      {
        id: nanoid(),
        title,
        completed: false,
        startedAt: new Date().toLocaleTimeString(),
        endedAt: "",
      },
    ]);
    setEditing(false);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function updateTodo(todo) {
    setTodos(
      todos.map((t) => {
        if (t.id === todo.id) {
          return todo;
        } else {
          return t;
        }
      }),
    );
    setEditing(false);
  }

  return (
    <div className="App">
      <TodoContext.Provider
        value={{
          todos,
          editing,
          setEditing,
          addTodo,
          deleteTodo,
          updateTodo,
        }}
      >
        <CssBaseline />
        <Box>
          <AppBar position="relative">
            <Box width="100%" maxWidth="md" m="auto" className="headText">
              <Toolbar>
                <Typography variant="h2">Task Manager</Typography>
              </Toolbar>
            </Box>
          </AppBar>
          <Container maxWidth="md" sx={{ margin: "1em auto" }}>
            {editing ? (
              <TodoForm />
            ) : (
              <>
                <Todos />
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => setEditing("new")}
                >
                  Add Task
                </Button>
              </>
            )}
          </Container>
        </Box>
      </TodoContext.Provider>
    </div>
  );
}
