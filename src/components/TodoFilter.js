import React from "react";

const TodoSort = ({todos}) => {
  return (
    <footer>
      <h2>Сортировать</h2>
      <div className='todo-sort'>
        <div>Все</div>
        <div>Готово</div>
        <div>Не готово</div>
      </div>
    </footer>
  )
}

export default TodoSort