import React from "react"

const TodoItem = ({id, title, handleToggleSuccess, handleDeleteItem, complete}) => {
  return (
    <div className={complete ? 'todo-item todo-item_success' : 'todo-item'}>
      <button onClick={() => handleToggleSuccess(id)} className='btn btn-success'/>
      <div className='todo-title'>{title}</div>
      <button onClick={() => handleDeleteItem(id)} className='btn btn-danger'/>
    </div>
  )
}

export default TodoItem