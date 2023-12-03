import { useContext, useState } from "react";
import { TextField, Button } from "@mui/material";

import { TodoContext } from "../data/todoContext";

export default function TodoForm() {
  const { todos, addTodo, editing, setEditing, updateTodo } =
    useContext(TodoContext);

  let todo = null;
  if (editing && editing !== "new") {
    todo = todos.find((t) => t.id === editing);
  }

  const [title, setTitle] = useState(todo?.title || "");

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleClick() {
    if (editing === "new") {
      addTodo(title);
    } else if (todo) {
      updateTodo({
        ...todo,
        title,
      });
    } else {
      throw Error(`Todo with id: ${editing} does not exist`);
    }
    setEditing("");
  }

  return (
    <>
      <TextField
        size="small"
        placeholder="Add new task..."
        onChange={handleChange}
        value={title}
      />
      <Button variant="contained" color="success" onClick={handleClick}>
        Add
      </Button>
    </>
  );
}
