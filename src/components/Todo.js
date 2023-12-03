import { useContext } from "react";
import {
  Paper,
  Checkbox,
  Typography,
  Box,
  Stack,
  Button,
  ListItem,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { TodoContext } from "../data/todoContext";

export default function Todo({ todo }) {
  const { deleteTodo, updateTodo, setEditing } = useContext(TodoContext);

  function completeTodo() {
    updateTodo({
      ...todo,
      completed: !todo.completed,
      endedAt: !todo.completed ? new Date().toLocaleTimeString() : "",
    });
  }

  return (
    <Paper elevation={0} sx={{ margin: "1rem auto" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <div>
          <Checkbox checked={todo.completed} onChange={completeTodo} />
          <Typography variant="h6" component="span">
            <span>{todo.completed ? <del>{todo.title}</del> : todo.title}</span>
          </Typography>
        </div>

        <div>Started at: {todo.startedAt}</div>
        {todo.completed ? <div>Completed at: {todo.endedAt}</div> : null}
        <div>
          <Button
            size="small"
            color="success"
            onClick={() => setEditing(todo.id)}
          >
            <EditIcon />
          </Button>
          <Button
            size="small"
            color="error"
            onClick={() => deleteTodo(todo.id)}
          >
            <DeleteIcon />
          </Button>
        </div>
      </Stack>
    </Paper>
  );
}
