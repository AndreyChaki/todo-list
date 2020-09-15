import React from "react"

const TodoFilter = ({filter, handleSetFilter}) => {
  const todoType = ['Все', 'Готово', 'Не готово']

  return (
    <header>
      <div className='todo-filter'>
        {
          todoType.map((item, index) => <div key={index} onClick={() => handleSetFilter(index)}
                                             className={index === filter ? 'active' : ''}>{item}</div>)
        }
      </div>
    </header>
  )
}

export default TodoFilter