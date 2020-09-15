import React, {useState} from "react"

const TodoAdd = ({todos, handleAddTodo}) => {

  const [todoText, setTodoText] = useState('')

  const addTodo = e => {
    e.preventDefault()
    handleAddTodo(todoText)
    setTodoText('')
  }

  return (
    <footer>
      <form onSubmit={addTodo} className='add-todo-form'>
        <label>
          <span>Добавить</span>
          <input placeholder='Добавить' onChange={e => setTodoText(e.target.value)} value={todoText}
                 className='add-todo-input' type="text"/>
        </label>

        <button className='btn btn-primary'><span>Добавить</span></button>
      </form>
    </footer>
  )
}

export default TodoAdd