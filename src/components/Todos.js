import { useContext } from "react";
import { List, ListItem, Container } from "@mui/material";

import { TodoContext } from "../data/todoContext";

import Todo from "./Todo";

export default function Todos(props) {
  const { todos } = useContext(TodoContext);

  return (
    <div style={{ margin: "1em auto" }}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
