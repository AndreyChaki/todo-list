import React from "react"
import TodoItem from "./TodoItem"

const TodoList = ({todos, handleToggleSuccess, handleDeleteItem}) => {


  return (
    <main>
      {
        !todos.length
          ? 'Добавьте задачи'
          : todos.map(t => <TodoItem key={t.id} id={t.id} title={t.title} complete={t.complete}
                                     handleToggleSuccess={handleToggleSuccess}
                                     handleDeleteItem={handleDeleteItem}/>)
      }
    </main>
  )
}

export default TodoList