import React from 'react'
import TodoList from "./components/TodoList"
import TodoAdd from "./components/TodoAdd"
import TodoFilter from "./components/TodoFilter"
import {useDispatch, useSelector} from "react-redux"
import {actions} from "./redux/app-reducer"

const App = () => {

  const todos = useSelector(state => state.app.todos)
  const filter = useSelector(state => state.app.filter)

  const dispatch = useDispatch()
  const addTodo = (title) => {
    dispatch(actions.addTodoItem(title))
  }
  const toggleSuccess = (id) => {
    dispatch(actions.toggleSuccessTodoItem(id))
  }
  const delItem = (id) => {
    if (window.confirm('Удалить?')) {
      dispatch(actions.delTodoItem(id))
    }
  }
  const setFilter = (filter) => {
    dispatch(actions.setFilterType(filter))
  }


  let todoList = []
  switch (filter) {
    case 0:
      todoList = [...todos]
      break
    case 1:
      todoList = todos.filter(item => item.complete === true && {...item})
      break
    case 2:
      todoList = todos.filter(item => item.complete === false && {...item})
      break
    default:
      break
  }


  return (
    <div className="app-root">
      <TodoFilter handleSetFilter={setFilter} filter={filter}/>
      <TodoList filter={filter} todos={todoList} handleToggleSuccess={toggleSuccess} handleDeleteItem={delItem}/>
      <TodoAdd handleAddTodo={addTodo}/>
    </div>
  )
}

export default App
