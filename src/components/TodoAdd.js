import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todos}) => {
  return (
    <>
      {todos.map(t => <TodoItem title={t.title} />)}
    </>
  )
}

export default TodoList